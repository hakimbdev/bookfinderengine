import React from 'react';
import BookCard from './BookCard';
import { useBookContext } from '../context/BookContext';
import { Book } from '../types';
import { RefreshCw, BookX, LibraryBig } from 'lucide-react';

const BookList: React.FC = () => {
  const { books, loading, error } = useBookContext();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 sm:py-16">
        <RefreshCw className="h-12 w-12 text-amber-600 animate-spin mb-4" />
        <p className="text-gray-600 text-lg font-medium">Finding the perfect books for you...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a moment</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8 text-center">
        <BookX className="h-12 w-12 text-red-400 mx-auto mb-4" />
        <p className="text-red-600 font-medium">{error}</p>
        <p className="text-red-500 text-sm mt-2">Please try again with a different search term</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
        <LibraryBig className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-medium">No books found</p>
        <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-800">
          Recommended Books
        </h2>
        <span className="text-sm text-gray-500">
          {books.length} {books.length === 1 ? 'book' : 'books'} found
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;