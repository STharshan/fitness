import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = ['About', 'Benefits', 'Community', 'Contact'];

    const handleMenuClick = (item) => {
        const id = item.toLowerCase();

        if (id === 'contact') {
            navigate('/contact');
            setMenuOpen(false);
            return;
        }

        if (location.pathname === '/') {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md w-full fixed z-20">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center px-4 py-2">
                        <img
                            src="/logo.png"
                            alt="Committed Fitness Logo"
                            className="h-12 w-auto"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleMenuClick(item)}
                                className="text-gray-700 hover:text-[#db4a00] transition font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-[#db4a00] text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition"
                        >
                            Book Free Session
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
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
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleMenuClick(item)}
                            className="block text-gray-700 hover:text-[#db4a00] font-medium w-full text-left"
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => navigate('/contact')}
                        className="mt-2 block bg-[#db4a00] text-white text-center font-semibold px-4 py-2 rounded hover:opacity-90 transition w-full"
                    >
                        Book Free Session
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
