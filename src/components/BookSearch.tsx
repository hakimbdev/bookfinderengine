import React, { useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import BookList from './BookList';
import { useBookContext } from '../context/BookContext';
import { fetchBookRecommendations } from '../services/bookService';

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error, setBooks, setLoading, setError } = useBookContext();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setHasSearched(true);
    
    try {
      const recommendations = await fetchBookRecommendations(query);
      setBooks(recommendations);
    } catch (err) {
      setError('Failed to fetch book recommendations. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-amber-100">
        <h2 className="text-2xl font-serif font-medium text-gray-800 mb-4">Find Your Next Book</h2>
        <p className="text-gray-600 mb-6">
          Enter a genre (e.g., "sci-fi", "romance"), mood, or describe what you're looking for.
        </p>
        
        <form onSubmit={handleSearch} className="relative">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Example: Uplifting sci-fi with female protagonists"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                'Get Recommendations'
              )}
            </button>
          </div>
        </form>
      </div>

      {hasSearched && <BookList />}
    </div>
  );
};

export default BookSearch;