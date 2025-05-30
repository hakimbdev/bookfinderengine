import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg shadow-gray-100/50 overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-56 sm:h-64 overflow-hidden relative bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        {book.imageUrl ? (
          <img 
            src={book.imageUrl} 
            alt={`Cover of ${book.title}`} 
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-amber-300">
            <BookOpen className="h-12 w-12 mb-2" />
            <div className="text-lg font-serif italic">No cover available</div>
          </div>
        )}
      </div>
      
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-serif font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 font-medium">by {book.author || 'Unknown Author'}</p>
        
        <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow line-clamp-4">
          {book.description || 'No description available.'}
        </p>
        
        {book.infoLink && (
          <a 
            href={book.infoLink} 
            target={'_blank'} 
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
          >
            More information
            <ExternalLink className="ml-1.5 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;