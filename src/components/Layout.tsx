import React from 'react';
import { BookOpenCheck } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-100">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-2 shadow-lg shadow-amber-100">
                <BookOpenCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-serif font-medium text-gray-800">BookFinder</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Discover your next read</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        {children}
      </main>
      
      <footer className="mt-auto bg-gradient-to-b from-white to-gray-50 py-6 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2025 BookFinder. Built by iOrbit Tech Solutions Lab.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;