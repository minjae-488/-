'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuItems = [
        {
            title: '재단소개',
            path: '/about', // Links to landing page
            submenu: [
                { title: '이사장 인사말', path: '/about/greetings' },
                { title: '이사진', path: '/about/directors' },
                { title: '설립취지', path: '/about/purpose' },
                { title: '연혁/조직도', path: '/about/history' },
                { title: '찾아오시는 길', path: '/about/directions' },
            ],
        },
        {
            title: '장학사업',
            path: '/scholarship',
            submenu: [
                { title: '장학금 지급 현황', path: '/scholarship/report' },
                { title: '장학생 명단', path: '/scholarship/list' },
            ],
        },
        {
            title: '알림마당',
            path: '/notice',
            submenu: [],
        },
        {
            title: '후원안내',
            path: '/support',
            submenu: [],
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-[72px]">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* CSS implementation of the logo icon based on image */}
                        <div className="grid grid-cols-2 gap-0.5 w-10 h-10 flex-shrink-0">
                            <div className="bg-[#D69046] w-full h-full"></div> {/* Orange Top-Left */}
                            <div className="bg-[#A0A0A0] w-full h-full"></div> {/* Grey Top-Right */}
                            <div className="bg-[#4E6C7C] w-full h-full"></div> {/* Dark Blue/Grey Bottom-Left */}
                            <div className="bg-[#66A495] w-full h-full"></div> {/* Green Bottom-Right */}
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-end gap-1 leading-none">
                                <span className="text-[10px] text-gray-500 font-medium mb-1 tracking-tighter shrink-0">재단<br />법인</span>
                                <span className="text-2xl font-bold text-gray-800 tracking-tight whitespace-nowrap">신주장학재단</span>
                            </div>
                            <span className="text-[9px] text-gray-400 uppercase tracking-wider mt-0.5 hidden sm:block">The Shin Joo Scholarship Foundation</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setOpenDropdown(item.title)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.path}
                                    className="text-gray-900 font-bold hover:text-[#D69046] transition-colors text-[17px] py-6"
                                >
                                    {item.title}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.submenu && item.submenu.length > 0 && (
                                    <div
                                        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-200 border-t-2 border-[#D69046] ${openDropdown === item.title
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                    >
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.path}
                                                href={subitem.path}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D69046] transition-colors text-center"
                                            >
                                                {subitem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-[#D69046]"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-lg px-4">
                        {menuItems.map((item) => (
                            <div key={item.title} className="mb-2">
                                <Link
                                    href={item.path}
                                    className="block px-4 py-3 text-gray-900 font-bold hover:text-[#D69046]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                                {item.submenu && item.submenu.length > 0 && (
                                    <div className="pl-4 bg-gray-50 rounded-lg">
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.path}
                                                href={subitem.path}
                                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#D69046]"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subitem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
