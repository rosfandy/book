import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "E-Library | Pencarian Buku",
  description: "Pencarian buku di E-Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className=" bg-gradient-to-r from-blue-500 to-purple-700 min-h-screen">
          <Navbar />
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
