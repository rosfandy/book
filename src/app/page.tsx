"use client"
import { useState } from "react";
import axios from "axios";
import thumbnail from './thumbnail'; // Import the thumbnail object
import Image from "next/image";

// Define the type for the book object
interface Book {
  id_buku: number;
  judul_buku: string;
  kategori: string;
  penulis: string;
  rating: number;
  tahun_terbit: number;
  deskripsi: string;
  similarity_score: number;
  thumbnailUrl?: string; // Add a thumbnailUrl property to store the image URL
}

// Helper function to get a sequential thumbnail based on the category and index
const getThumbnailByCategory = (category: string, index: number): string => {
  const images = thumbnail[category];
  if (images && images.length > 0) {
    // Use the index to select the image in a cyclic manner
    return images[index % images.length];
  }
  // Fallback image if no category match is found
  return 'https://placehold.co/150x150.png';
};

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a book title.");
      return;
    }


    try {
      setLoading(true);
      setError("");
      setBooks([]);

      const res = await axios.post(`/api/book/recommend`, {
        title,
      });

      console.log("Response data:", res.data);

      const bookData: Book[] = (Array.isArray(res.data) ? res.data : [res.data]).map((book, index) => ({
        ...book,
        thumbnailUrl: getThumbnailByCategory(book.kategori, index),
      }));

      setBooks(bookData);
      setTitle("");
    } catch (err) {
      console.error("Error during the search:", err);
      const errorMessage = axios.isAxiosError(err) && err.response
        ? err.response.data.error || err.message
        : err instanceof Error
          ? err.message
          : 'Unknown Error';

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 items-center justify-center min-h-[100vh] ">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center text-center">
          <div className="font-bold text-2xl text-white">Selamat Datang di Pencarian Buku</div>
          <div className="text-lg text-white">Silahkan masukkan judul buku</div>
        </div>
      </div>
      <div className="flex justify-center">
        {/* Use a form and handle submission */}
        <form onSubmit={handleSearch} className="flex items-center bg-white pl-4 shadow-md rounded-xl">
          <input
            type="text"
            placeholder="Judul Buku..."
            className="text-sm px-4 py-2 w-[30em] focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit" // Change button type to submit
            className="text-sm bg-blue-500 shadow-md text-white px-6 py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
      </div>
      {/* Show error if any */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg shadow-md">
          <div className="text-sm text-red-700">Error: {error}</div>
        </div>
      )}
      {/* Display list of books if available */}
      {books.length > 0 ? (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-[30em] ">
          <div className="font-bold text-lg mb-2">Recommended Books:</div>
          <ul className="list-none">
            {books.map((book, index) => (
              <li key={index} className="flex gap-4 mb-4">
                <Image
                  src={book.thumbnailUrl || 'default-thumbnail-url.jpg'}
                  alt={`${book.kategori} thumbnail`}
                  className="w-24 h-24 object-cover rounded-md shadow-md"
                  width={24}
                  height={24}
                  quality={100}
                  unoptimized={true} />
                <div className="text-sm text-gray-700">
                  <div><strong>Title:</strong> {book.judul_buku}</div>
                  <div><strong>Author:</strong> {book.penulis}</div>
                  <div><strong>Category:</strong> {book.kategori}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) :
        <div className="flex mt-8 gap-x-4 justify-center gap-y-4 flex-wrap max-w-[50em]">
          {Object.keys(thumbnail).map((category) =>
            thumbnail[category].slice(0, 2).map((imageUrl, index) => (
              <div key={`${category}-${index}`} className="bg-white rounded-md shadow-md">
                <Image
                  src={imageUrl || 'https://placehold.co/150x150.png'}
                  alt={`${category} thumbnail`}
                  className="w-32 h-48 object-cover rounded-md shadow-md"
                  width={32}
                  height={48}
                  unoptimized={true} />
              </div>
            ))
          )}
        </div>
      }
    </div>
  );
}
