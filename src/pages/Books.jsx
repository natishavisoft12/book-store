import React, { useState } from 'react';
import { booksData } from '../data/booksDataa';

const Books = () => {
    const [books, setBooks] = useState(booksData);

    // Get unique categories
    const uniqueCategories = [...new Set(booksData.map((book) => book.category))];

    // Handle category filter
    const handleCategoryClick = (category) => {
        if (category === "All") {
            setBooks(booksData);
        } else {
            setBooks(booksData.filter((book) => book.category === category));
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white py-10">
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {uniqueCategories.map((cat) => (
                    <button 
                        key={cat} 
                        onClick={() => handleCategoryClick(cat)} 
                        className="bg-white text-black px-4 py-2 rounded-md"
                    >
                        {cat}
                    </button>
                ))}
                <button 
                    className="bg-white text-black px-4 py-2 rounded-md" 
                    onClick={() => handleCategoryClick("All")}
                >
                    All
                </button>
            </div>

            <h2 className="text-4xl font-bold text-center mb-8">Book Collection</h2>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 max-w-6xl mx-auto">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        {/* Book Name */}
                        <h3 className="text-xl font-semibold mb-2">{book.name}</h3>

                        {/* Category & Author */}
                        <p className="text-sm text-gray-400">
                            <span className="font-medium text-yellow-400">{book.category}</span> - {book.author}
                        </p>

                        {/* Price & Rating */}
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-semibold text-green-400">${book.price}</span>
                            <span className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-lg">
                                ⭐ {book.rating}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
