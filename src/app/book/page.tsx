"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface Book {
    id_buku: number;
    judul_buku: string;
    kategori: string;
    penulis: string;
    rating: number;
    tahun_terbit: number;
    deskripsi: string;
    ulasan: string;
    user: string;
}

export default function Books() {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const itemsPerPage = 10;

    useEffect(() => {
        if (!category) {
            setError("Category is required.");
            return;
        }

        const fetchBooks = async () => {
            try {
                const response = await axios.get(`/api/book?category=${category}`);
                setBooks(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load books data.");
            }
        };
        fetchBooks();
    }, [category]);

    const totalPages = Math.ceil(books.length / itemsPerPage);
    const currentBooks = books.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex flex-col items-center mt-8 px-4">
            {error && <div className="text-red-500">{error}</div>}
            <div className="overflow-auto w-full max-w-5xl" style={{ maxHeight: '70vh' }}>
                <table className="min-w-full border-collapse bg-white rounded-md shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600">
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Judul Buku</th>
                            <th className="py-3 px-4 text-left">Kategori</th>
                            <th className="py-3 px-4 text-left">Penulis</th>
                            <th className="py-3 px-4 text-left">Rating</th>
                            <th className="py-3 px-4 text-left">Tahun Terbit</th>
                            <th className="py-3 px-4 text-left">Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.length > 0 ? (
                            currentBooks.map((book, index) => (
                                <tr key={book.id_buku} className="border-t">
                                    <td className="py-2 px-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td className="py-2 px-4">{book.judul_buku}</td>
                                    <td className="py-2 px-4">{book.kategori}</td>
                                    <td className="py-2 px-4">{book.penulis}</td>
                                    <td className="py-2 px-4">{book.rating}</td>
                                    <td className="py-2 px-4">{book.tahun_terbit}</td>
                                    <td className="py-2 px-4 truncate max-w-xs">{book.deskripsi}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                                    No books available
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-white">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
