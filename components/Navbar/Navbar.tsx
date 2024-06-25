'use client'
import React, { useState } from 'react';
import CtaButton from '../CtaButton';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log(isMobileMenuOpen);

        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-blue-500">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <a href="#" className="text-3xl font-bold leading-none">
                    {/* Replace with your logo SVG */}
                    Logo
                </a>
                {/* Hamburger Menu for Mobile */}
                <button className={`lg:hidden navbar-burger flex items-center text-blue-600 p-3 ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    {/* Replace with your hamburger menu SVG */}
                    menu
                </button>
                {/* Navigation Links (Desktop) */}
                <ul className={`hidden    lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-600">Sponsor us</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-600">Mentor</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-600">Faq</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-600">About</a>
                    </li>
                    <li>
                        <div className="flex flex-wrap justify-center gap-6">
                            <CtaButton />
                        </div>
                    </li>
                </ul>
            </nav>
            {/* Mobile Navigation Menu */}
            <div className={`navbar-menu  relative z-50  ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    {/* Mobile Navigation Links (Similar structure to desktop) */}

                    <button className='ml-auto ' onClick={toggleMobileMenu}>close</button>
                    <ul>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-600">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-600">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
