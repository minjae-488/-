'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users } from 'lucide-react';

export default function ScholarshipPage() {
    const years = [
        { year: 2023, count: 35, amount: '7,000만원', completed: true },
        { year: 2024, count: 46, amount: '9,200만원', completed: true },
        { year: 2025, count: 38, amount: '7,600만원', completed: true },
    ];

    const criteria = [
        {
            title: '성적 우수 학생',
            description: '뛰어난 학업 성취도를 보이는 학생들을 선발하여 학업에 더욱 정진할 수 있도록 지원합니다.',
            icon: Award,
            color: 'bg-yellow-100 text-yellow-600',
        },
        {
            title: '성적 향상 학생',
            description: '지속적인 노력으로 성적이 향상된 학생들을 격려하고 응원합니다.',
            icon: TrendingUp,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            title: '취약 경제 학생',
            description: '경제적 어려움을 겪고 있는 학생들이 학업을 중단하지 않도록 생활비를 지원합니다.',
            icon: Users,
            color: 'bg-green-100 text-green-600',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="장학사업"
                subtitle="Scholarship Program"
                description="연간 1회 국내 대학생들에게 장학금을 지급하여 학업에 전념할 수 있도록 돕습니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">신주장학재단 장학사업</h2>
                    <p className="text-lg text-gray-600">
                        신주장학재단은 매년 국내 대학생들을 대상으로 장학금을 지급하고 있습니다.<br />
                        꿈을 향해 나아가는 학생들의 든든한 버팀목이 되겠습니다.
                    </p>
                </div>

                {/* Recent Years Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {years.map((data, index) => (
                        <motion.div
                            key={data.year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 text-center border overflow-hidden relative"
                        >
                            {data.completed && (
                                <div className="absolute top-4 right-4 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">지급 완료</div>
                            )}
                            <div className="text-indigo-600 text-xl font-bold mb-2">{data.year}년</div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">{data.count}명</div>
                            <div className="text-gray-500 font-medium">{data.amount}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Selection Criteria */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">선발 기준</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {criteria.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white"
                            >
                                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
