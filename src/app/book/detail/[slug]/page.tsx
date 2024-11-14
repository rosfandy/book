"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

/**
 * Generates a JSX element containing a given number of full and empty stars.
 *
 * The input rating is clamped between 0 and 10 and then divided by 2 to determine
 * the number of full stars to display. The remaining space is filled with empty stars.
 *
 * @param {number} rating A value between 0 and 10 to determine the number of stars.
 * @returns A JSX element containing full and empty stars.
 */
const generateStars = (rating: number) => {
  const starCount = Math.ceil(Math.min(10, Math.max(0, rating)) / 2);
  
  const fullStars = starCount;
  const emptyStars = 5 - fullStars;

  return (
    <>
      {Array(fullStars)
        .fill("★")
        .map((_, index) => (
          <span key={`full-${index}`} style={{ color: "gold" }}>
            ★
          </span>
        ))}
      {Array(emptyStars)
        .fill("☆")
        .map((_, index) => (
          <span key={`empty-${index}`} style={{ color: "gray" }}>
            ☆
          </span>
        ))}
    </>
  );
};

export default function Page() {
  const pathname = usePathname();
  const bookId = pathname?.split('/').pop();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/book/${bookId}`);
        setBook(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError("Failed to load book data.");
      }
    };

    fetchBook();
  }, [bookId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return(
        <div className="flex w-full min-h-[50vh] items-center justify-center text-white">
            <div>Loading...</div>
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="px-8 mt-12">
            <Link href={'/'} className=" text-white">{'< Kembali'}</Link>
            <div className="flex justify-center items-center mt-4">
                <div className="items-center flex justify-center">
                    <div className="bg-white shadow py-4 px-8 rounded border-4 border-gray-300">
                        <div className="">
                            <p className="text-md">{book.tahun_terbit}</p>
                            <p className="font-bold text-lg md:max-w-[400px] max-w-[350px]">{book.judul_buku}</p>
                            <p className="text-xs text-justify py-2 text-gray-500 md:max-w-[400px] max-w-[350px]">{book.deskripsi}</p>
                            <p className="text-sm font-bold">Oleh: {book.penulis}</p>
                        </div>
                        <div className="py-2">
                            <hr/>
                        </div>
                        <div className="">
                            <p className="text-md">Ulasan</p>
                            <p className="text-xs"><span className="text-lg">{generateStars(book.rating)}</span> ({book.rating})</p>
                            <p className="text-xs text-justify py-2 text-gray-500 md:max-w-[400px] max-w-[350px]">{book.ulasan}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
