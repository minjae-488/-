'use client';

import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Users, ArrowRight } from 'lucide-react';

export default function ScholarshipPage() {
    const cards = [
        {
            title: '장학금 지급 현황',
            description: '연도별 장학금 지급 내역과 통계를 확인하실 수 있습니다.',
            icon: BarChart3,
            href: '/scholarship/report',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            title: '장학생 명단',
            description: '신주장학재단의 지원을 받은 장학생 명단을 확인하실 수 있습니다.',
            icon: Users,
            href: '/scholarship/list',
            color: 'bg-green-50 text-green-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageTitle
                title="장학사업"
                subtitle="Scholarship Program"
                description="신주장학재단의 장학사업 현황을 안내해 드립니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* 카드 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {cards.map((card, index) => (
                        <Link key={card.title} href={card.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300 h-full border border-gray-100"
                            >
                                <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-6`}>
                                    <card.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                                    {card.title}
                                    <ArrowRight size={20} className="text-gray-400" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* 기존 내용 */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-900 pb-3 mb-6">
                        신주장학재단 장학사업
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        연간 1회 국내 대학생들에게 장학금 지급
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">지급 내역</h3>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2023년</span>
                                <span>(11월 장학금 지급 완료): 대학생 35명 / 7,000만원</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2024년</span>
                                <span>(12월 장학금 지급 완료): 대학생 46명 / 9,200만원</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2025년</span>
                                <span>(12월 장학금 지급 완료): 대학생 38명 / 7,600만원</span>
                            </li>
                            <li className="pt-4 mt-2 border-t border-gray-300 font-bold text-lg text-blue-900">
                                총계: 119명 / 2억 3,800만원
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">선발 기준</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                        <li>성적 우수 학생</li>
                        <li>성적 향상 학생</li>
                        <li>취약 경제 학생</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
