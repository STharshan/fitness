// Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full fixed z-20">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center px-4 py-2">
                        <img
                            src="/logo.png" // ⬅️ replace with your actual path (e.g., /assets/logo.png)
                            alt="Committed Fitness Logo"
                            className="h-12 w-auto"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Benefits', 'Community', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-[#db4a00] transition font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-[#db4a00] text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition">
                            Book Free Session
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
                    {['About', 'Benefits', 'Community', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-gray-700 hover:text-[#db4a00] font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="mt-2 w-full bg-[#db4a00] text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition">
                        Book Free Session
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
