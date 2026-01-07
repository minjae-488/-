'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';

export default function HistoryPage() {
    const history = [
        {
            year: '2023',
            events: [
                { date: '01월', text: '재단법인 신주장학재단 설립' },
            ],
        },
        {
            year: '2022',
            events: [
                { date: '11월', text: '설립 발기인 총회 개최' },
                { date: '08월', text: '장학재단 설립 준비위원회 운영' },
                { date: '03월', text: '장학재단 설립 및 운영 조례 제정' },
            ],
        },
        {
            year: '2021',
            events: [
                { date: '10월', text: '장학재단 설립계획 확정' },
                { date: '06월', text: '장학재단 설립 논의' },
            ],
        },
    ];

    const orgChart = [
        { name: '이사회', level: 1 },
        { name: '이사장', level: 2 },
        { name: '이사', level: 3, grid: true },
        { name: '감사', level: 3, grid: true },
        { name: '사무국', level: 4 },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="연혁/조직도"
                subtitle="History & Organization"
                description="신주장학재단이 걸어온 길과 투명한 운영을 위한 조직 구성입니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* History Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">재단 연혁</h2>
                    <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-12 space-y-12">
                        {history.map((yearGroup, index) => (
                            <motion.div
                                key={yearGroup.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                                <h3 className="text-4xl font-bold text-indigo-900 mb-6">{yearGroup.year}</h3>
                                <div className="space-y-4">
                                    {yearGroup.events.map((event, eventIndex) => (
                                        <div key={eventIndex} className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <span className="text-indigo-600 font-bold mb-1 md:mb-0 md:w-24 text-lg">{event.date}</span>
                                            <span className="text-gray-700 font-medium">{event.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Organization Chart Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">조직도</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-8 max-w-3xl mx-auto"
                    >
                        {/* Level 1: 이사회 */}
                        <div className="w-64 bg-indigo-900 text-white rounded-lg py-4 text-center font-bold text-xl shadow-lg relative">
                            이사회
                            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 text-gray-300">
                                <div className="h-8 w-0.5 bg-gray-300"></div>
                            </div>
                        </div>

                        {/* Level 2: 이사장 */}
                        <div className="w-64 bg-indigo-700 text-white rounded-lg py-4 text-center font-bold text-xl shadow-lg relative mt-8">
                            이사장
                            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 text-gray-300">
                                <div className="h-8 w-0.5 bg-gray-300"></div>
                            </div>
                        </div>

                        {/* Level 3: 이사 & 감사 */}
                        <div className="flex gap-8 w-full justify-center relative mt-8">
                            {/* Horizontal Line */}
                            <div className="absolute top-[-16px] left-1/4 right-1/4 h-0.5 bg-gray-300"></div>
                            <div className="absolute top-[-16px] left-1/2 h-4 w-0.5 bg-gray-300 transform -translate-x-1/2 -translate-y-full"></div>

                            <div className="w-48 bg-white border-2 border-indigo-200 text-indigo-900 rounded-lg py-3 text-center font-bold shadow-sm">
                                이사
                            </div>
                            <div className="w-48 bg-white border-2 border-indigo-200 text-indigo-900 rounded-lg py-3 text-center font-bold shadow-sm">
                                감사
                            </div>
                        </div>

                        {/* Level 4: 사무국 */}
                        <div className="relative mt-4">
                            <div className="absolute left-1/2 top-[-32px] h-8 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                            <div className="w-64 bg-gray-100 text-gray-800 rounded-lg py-3 text-center font-bold shadow-sm">
                                사무국
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
