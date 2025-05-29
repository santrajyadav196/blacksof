// pages/404.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-6xl font-bold text-darkBlue">404</h1>
      <p className="mt-4 text-lg text-gray-700">
        The page you have requested doesn&#39;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-5 py-3 bg-primary text-black rounded-full font-medium hover:bg-primaryhover transition-colors duration-300"
      >
        Go Back Homepage
      </Link>
    </div>
  );
}
