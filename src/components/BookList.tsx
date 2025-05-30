import React from 'react';
import BookCard from './BookCard';
import { useBookContext } from '../context/BookContext';
import { Book } from '../types';
import { RefreshCw } from 'lucide-react';

const BookList: React.FC = () => {
  const { books, loading, error } = useBookContext();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <RefreshCw className="h-10 w-10 text-amber-600 animate-spin mb-4" />
        <p className="text-gray-600">Finding the perfect books for you...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (books.length === 0 && !loading) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-600">No books found. Try another search term.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-serif font-medium text-gray-800 mb-6">Recommended Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;