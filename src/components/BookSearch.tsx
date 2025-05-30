import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import BookList from './BookList';
import { useBookContext } from '../context/BookContext';
import { fetchBookRecommendations } from '../services/bookService';

const BookSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const { setBooks, setLoading, setError } = useBookContext();
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
      <div className="bg-white rounded-2xl shadow-xl shadow-amber-50/50 p-6 sm:p-8 mb-8 border border-amber-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center justify-center bg-amber-100 rounded-xl p-3">
            <BookOpen className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-800 mb-2">Find Your Next Book</h2>
            <p className="text-gray-600">
              Enter a genre, mood, or describe what you're looking for to get personalized recommendations.
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Example: Uplifting sci-fi with female protagonists"
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition shadow-sm text-gray-800 placeholder:text-gray-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-4 px-8 rounded-xl transition duration-200 flex items-center justify-center shadow-lg shadow-amber-100 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Get Recommendations
          </button>
        </form>

        {!hasSearched && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            {['Fantasy', 'Mystery', 'Romance'].map((genre) => (
              <button
                key={genre}
                onClick={() => {
                  setQuery(genre);
                  handleSearch(new Event('submit') as any);
                }}
                className="text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-700 transition-colors"
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>

      {hasSearched && <BookList />}
    </div>
  );
};

export default BookSearch;