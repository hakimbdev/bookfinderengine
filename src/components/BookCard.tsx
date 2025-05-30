import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="h-64 overflow-hidden relative bg-amber-100 flex items-center justify-center">
        {book.imageUrl ? (
          <img 
            src={book.imageUrl} 
            alt={`Cover of ${book.title}`} 
            className="object-cover h-full w-full transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="text-amber-300 text-2xl font-serif italic">No cover available</div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-serif font-medium text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-3">by {book.author || 'Unknown Author'}</p>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-4">{book.description || 'No description available.'}</p>
        
        {book.infoLink && (
          <a 
            href={book.infoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800"
          >
            More information
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;