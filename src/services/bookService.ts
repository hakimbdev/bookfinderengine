import { Book } from '../types';

const API_KEY = 'AIzaSyD4z58lkIQQ6W-CR4vNt2k72o_SBSVHQq8';
const MAX_RESULTS = 5;

export const fetchBookRecommendations = async (query: string): Promise<Book[]> => {
  try {
    // Enhance the query to find relevant books
    const enhancedQuery = `${query} fiction books`;
    
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(enhancedQuery)}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return [];
    }

    // Transform the Google Books API response to our Book model
    const books: Book[] = data.items.map((item: any) => {
      const volumeInfo = item.volumeInfo;
      
      return {
        id: item.id,
        title: volumeInfo.title || 'Unknown Title',
        author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
        description: volumeInfo.description || 'No description available.',
        imageUrl: volumeInfo.imageLinks?.thumbnail || null,
        infoLink: volumeInfo.infoLink || null,
      };
    });

    return books;
  } catch (error) {
    console.error('Error fetching book recommendations:', error);
    throw error;
  }
};