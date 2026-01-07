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
            path: '/about',
            submenu: [
                { title: '이사장 인사말', path: '/about/greetings' },
                { title: '설립취지', path: '/about/purpose' },
                { title: '연혁/조직도', path: '/about/history' },
            ],
        },
        {
            title: '장학사업',
            path: '/scholarship',
            submenu: [
                { title: '장학사업', path: '/scholarship' },
                { title: '장학금 지급 현황', path: '/scholarship/report' },
            ],
        },
        {
            title: '알림마당',
            path: '/notice',
            submenu: [
                { title: '공지사항', path: '/notice' },
            ],
        },
        {
            title: '후원안내',
            path: '/support',
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">신주</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">신주장학재단</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(item.title)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.path}
                                    className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                                >
                                    {item.title}
                                </Link>

                                {item.submenu && (
                                    <div
                                        className={`absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${openDropdown === item.title
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                    >
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.path}
                                                href={subitem.path}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
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
                        className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        {menuItems.map((item) => (
                            <div key={item.title} className="mb-2">
                                <Link
                                    href={item.path}
                                    className="block px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                                {item.submenu && (
                                    <div className="pl-4">
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.path}
                                                href={subitem.path}
                                                className="block px-4 py-2 text-sm text-gray-600 hover:text-indigo-600"
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
