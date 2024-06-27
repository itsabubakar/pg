'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const CtaButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Link href={'/'} className="flex flex-wrap gap-6">
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span
                    className={`absolute top-0 left-0 mt-1 ml-1 h-full w-full   ${isHovered ? '' : 'bg-gray-300'
                        }`}
                />
                <span className="fold-bold relative inline-block h-full w-full  border-2 border-blue-400 bg-blue-400 px-3 py-1 text-base font-bold text-slate-100 transition duration-100 hover:bg-gray-700 hover:text-white hover:border-gray-700">
                    Register
                </span>
            </div>
        </Link>

    );
};

export default CtaButton;
