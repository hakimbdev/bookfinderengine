import React from 'react';
import { BookOpenCheck } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-amber-600 rounded-lg p-2">
              <BookOpenCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-medium text-gray-800">BookFinder</h1>
              <p className="text-xs text-gray-500">Discover your next read</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2025 BookFinder. Built by iOrbit Tech Solutions Lab.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;