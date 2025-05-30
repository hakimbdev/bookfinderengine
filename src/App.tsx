import React from 'react';
import Layout from './components/Layout';
import BookSearch from './components/BookSearch';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <Layout>
        <BookSearch />
      </Layout>
    </BookProvider>
  );
}

export default App;