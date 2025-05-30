import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../types';

interface BookContextType {
  books: Book[];
  loading: boolean;
  error: string;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <BookContext.Provider value={{ books, loading, error, setBooks, setLoading, setError }}>
      {children}
    </BookContext.Provider>
  );
};