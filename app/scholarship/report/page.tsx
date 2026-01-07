'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { Users, Coins, GraduationCap } from 'lucide-react';

export default function ScholarshipReportPage() {
    const totalStudents = 119;
    const totalAmount = '2억 3,800만원';

    return (
        <div className="min-h-screen bg-gray-50">
            <PageTitle
                title="장학금 지급 현황"
                subtitle="Scholarship Report"
                description="설립 이후 현재까지의 장학금 누적 지급 현황입니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Total Summary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl mb-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid.svg')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-12 opacity-90">누적 지급 현황 (2025년 기준)</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    <Users size={40} className="text-white" />
                                </div>
                                <div className="text-5xl md:text-6xl font-bold mb-2">{totalStudents}명</div>
                                <div className="text-indigo-200 font-medium text-lg">총 장학생 수</div>
                            </div>

                            <div className="hidden md:block w-px h-32 bg-white/20"></div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    <Coins size={40} className="text-white" />
                                </div>
                                <div className="text-5xl md:text-6xl font-bold mb-2 break-keep">{totalAmount}</div>
                                <div className="text-indigo-200 font-medium text-lg">총 지급액</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Detailed List */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <GraduationCap className="text-indigo-600" />
                            연도별 세부 현황
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                                <tr>
                                    <th className="px-8 py-4 font-semibold">연도</th>
                                    <th className="px-8 py-4 font-semibold">장학생 수</th>
                                    <th className="px-8 py-4 font-semibold">지급액</th>
                                    <th className="px-8 py-4 font-semibold">비고</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-6 font-medium text-gray-900">2025년</td>
                                    <td className="px-8 py-6 text-gray-600">38명</td>
                                    <td className="px-8 py-6 text-gray-600 font-medium">7,600만원</td>
                                    <td className="px-8 py-6 text-sm text-green-600 bg-green-50 w-fit rounded-full px-3 py-1 inline-block m-4">지급 완료</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-6 font-medium text-gray-900">2024년</td>
                                    <td className="px-8 py-6 text-gray-600">46명</td>
                                    <td className="px-8 py-6 text-gray-600 font-medium">9,200만원</td>
                                    <td className="px-8 py-6 text-sm text-green-600 bg-green-50 w-fit rounded-full px-3 py-1 inline-block m-4">지급 완료</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-6 font-medium text-gray-900">2023년</td>
                                    <td className="px-8 py-6 text-gray-600">35명</td>
                                    <td className="px-8 py-6 text-gray-600 font-medium">7,000만원</td>
                                    <td className="px-8 py-6 text-sm text-green-600 bg-green-50 w-fit rounded-full px-3 py-1 inline-block m-4">지급 완료</td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-gray-50 font-bold text-gray-900">
                                <tr>
                                    <td className="px-8 py-4">합계</td>
                                    <td className="px-8 py-4">{totalStudents}명</td>
                                    <td className="px-8 py-4">{totalAmount}</td>
                                    <td className="px-8 py-4"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
