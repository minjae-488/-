'use client';

import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function NoticePage() {
    // Temporary mock data based on sjsf.or.kr board content
    const notices = [
        {
            id: 1,
            title: '2024년 재단법인 신주장학재단 결산 재무제표',
            date: '2025.03.31',
            author: '관리자',
            views: 125,
            important: true,
        },
        {
            id: 2,
            title: '2024년 기부금모금액 및 활용실적 명세서',
            date: '2025.03.31',
            author: '관리자',
            views: 98,
            important: true,
        },
        {
            id: 3,
            title: '2023 신주장학재단 결산 재무상태표, 운영성과표',
            date: '2024.03.29',
            author: '관리자',
            views: 245,
            important: false,
        },
        {
            id: 4,
            title: '2023년 재단법인 신주장학재단 결산 재무제표',
            date: '2024.03.29',
            author: '관리자',
            views: 189,
            important: false,
        },
        {
            id: 5,
            title: '2023년 기부금모금액 및 활용실적 명세서',
            date: '2024.03.29',
            author: '관리자',
            views: 156,
            important: false,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="공지사항"
                subtitle="Notice Board"
                description="신주장학재단의 새로운 소식과 안내사항을 알려드립니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Search & Filter */}
                <div className="flex justify-between items-center mb-8">
                    <div className="text-gray-600 font-medium">
                        총 <span className="text-indigo-600 font-bold">{notices.length}</span>건의 게시물이 있습니다.
                    </div>
                    <div className="relative w-64 md:w-80">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Notice List */}
                <div className="border-t border-gray-200">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-gray-600 font-medium hidden md:table-header-group">
                            <tr>
                                <th className="py-4 px-4 text-center w-20">번호</th>
                                <th className="py-4 px-4 text-left">제목</th>
                                <th className="py-4 px-4 text-center w-32">작성자</th>
                                <th className="py-4 px-4 text-center w-32">등록일</th>
                                <th className="py-4 px-4 text-center w-24">조회</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {notices.map((notice, index) => (
                                <motion.tr
                                    key={notice.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-gray-50 transition-colors group"
                                >
                                    <td className="py-4 px-4 text-center text-gray-500 hidden md:table-cell">
                                        {notice.important ? (
                                            <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-md font-medium">공지</span>
                                        ) : (
                                            notice.id
                                        )}
                                    </td>
                                    <td className="py-4 px-4">
                                        <Link href={`#`} className="block group-hover:text-indigo-600 font-medium text-gray-900 transition-colors">
                                            <span className="md:hidden inline-block mr-2">
                                                {notice.important && (
                                                    <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-md font-medium">공지</span>
                                                )}
                                            </span>
                                            {notice.title}
                                        </Link>
                                        <div className="md:hidden text-xs text-gray-400 mt-1 flex gap-2">
                                            <span>{notice.date}</span>
                                            <span>·</span>
                                            <span>{notice.author}</span>
                                            <span>·</span>
                                            <span>조회 {notice.views}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center text-gray-600 hidden md:table-cell">{notice.author}</td>
                                    <td className="py-4 px-4 text-center text-gray-500 hidden md:table-cell">{notice.date}</td>
                                    <td className="py-4 px-4 text-center text-gray-500 hidden md:table-cell">{notice.views}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                            &lt;
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                            &gt;
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
