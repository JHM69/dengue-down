import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-2 shadow-md">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">হোম</a>
        <a href="/blood" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">ব্লাড ব্যাংক</a>
        <a href="/healthcare" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">স্বাস্থ্যসেবা অবকাঠামো</a>
        <a href="/vector" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">ভেক্টর নিয়ন্ত্রণ</a>
        <a href="/community" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">কমিউনিটি সুরক্ষা</a>
        <a href="/individual" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">ব্যক্তিগত সুরক্ষা</a>
        <a href="legal_policy" className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border-b-2 border-transparent hover:border-blue-600">আইন এবং নীতি</a>
      </div>
    </nav>
  );
}

export default Navbar;
