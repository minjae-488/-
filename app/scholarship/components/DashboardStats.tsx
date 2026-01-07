'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Coins, TrendingUp, School } from 'lucide-react';
import { totalCumulative } from '../data';

export default function DashboardStats() {
    return (
        <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Cumulative Students */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Users size={64} className="text-blue-600" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Users size={20} />
                        </div>
                        <h3 className="text-gray-600 font-medium">누적 장학생</h3>
                    </div>
                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            <CountUp end={totalCumulative.students} duration={2.5} separator="," />
                        </span>
                        <span className="text-gray-500 ml-1">명</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-1 inline-block">
                        <span className="text-blue-600 font-bold">2021년</span> 부터 현재까지
                    </div>
                </motion.div>

                {/* Cumulative Amount */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Coins size={64} className="text-emerald-600" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                            <Coins size={20} />
                        </div>
                        <h3 className="text-gray-600 font-medium">누적 지급액</h3>
                    </div>
                    <div className="mt-2 flex items-end">
                        <span className="text-3xl font-bold text-gray-900">
                            <CountUp end={totalCumulative.amount / 100000000} duration={2.5} decimals={2} />
                        </span>
                        <span className="text-gray-500 ml-1 mb-1">억원</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-1 inline-block">
                        꿈을 위한 든든한 지원
                    </div>
                </motion.div>

                {/* Growth Rate */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={64} className="text-amber-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                            <TrendingUp size={20} />
                        </div>
                        <h3 className="text-gray-600 font-medium">전년 대비 증가율</h3>
                    </div>
                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            +<CountUp end={totalCumulative.growthRate} duration={2.5} />
                        </span>
                        <span className="text-gray-500 ml-1">%</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-1 inline-block">
                        지속적인 장학 규모 확대
                    </div>
                </motion.div>

                {/* School Count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <School size={64} className="text-indigo-600" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                            <School size={20} />
                        </div>
                        <h3 className="text-gray-600 font-medium">수혜 학교 수</h3>
                    </div>
                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            <CountUp end={totalCumulative.schoolCount} duration={2.5} />
                        </span>
                        <span className="text-gray-500 ml-1">개교</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-1 inline-block">
                        전국 다양한 대학 지원
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
