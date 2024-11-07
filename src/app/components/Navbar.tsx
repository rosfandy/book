import Link from 'next/link';

export default function Navbar() {
    const categories = ['OTKP', 'AKL', 'DKV', 'RPL'];

    return (
        <div className="flex w-full py-3 px-12 bg-white/20 shadow items-center justify-between">
            <Link href={'/'} className="font-bold text-lg text-white">E-Library</Link>
            <div className="flex gap-x-2 text-white">
                {categories.map((category, index) => (
                    <Link key={index} href={`/book/${category.toLowerCase()}`}>
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
}
