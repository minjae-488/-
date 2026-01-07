'use client';

import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { motion } from 'framer-motion';
import { scholarshipData } from '../data';

export default function ScholarshipCharts() {
    const [viewMode, setViewMode] = useState<'amount' | 'students'>('amount');

    // Sort data by year ascending for the chart
    const chartData = [...scholarshipData].sort((a, b) => a.year - b.year).map(item => ({
        ...item,
        displayAmount: item.totalAmount / 10000, // 만원 단위
        formattedAmount: (item.totalAmount / 100000000).toFixed(1) + '억원'
    }));

    return (
        <section className="py-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">연도별 장학금 지급 현황</h3>
                    <p className="text-gray-500">재단의 지속적인 성장과 지원 현황을 확인하세요.</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-xl mt-4 md:mt-0">
                    <button
                        onClick={() => setViewMode('amount')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'amount'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        지급 금액
                    </button>
                    <button
                        onClick={() => setViewMode('students')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'students'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        장학생 수
                    </button>
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    {viewMode === 'amount' ? (
                        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="year"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280' }}
                                tickFormatter={(value) => `${value / 100}억`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    padding: '12px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                                formatter={(value: any) => [`${(value).toLocaleString()}만원`, '지급액']}
                            />
                            <Area
                                type="monotone"
                                dataKey="displayAmount"
                                stroke="#2563EB"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                                activeDot={{ r: 8, strokeWidth: 0 }}
                                animationDuration={1500}
                            />
                        </AreaChart>
                    ) : (
                        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="year"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280' }}
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    padding: '12px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Bar
                                dataKey="highSchool"
                                name="고등학생"
                                fill="#60A5FA"
                                radius={[4, 4, 0, 0]}
                                barSize={40}
                                stackId="a"
                                animationDuration={1500}
                            />
                            <Bar
                                dataKey="university"
                                name="대학생"
                                fill="#2563EB"
                                radius={[4, 4, 0, 0]}
                                barSize={40}
                                stackId="a"
                                animationDuration={1500}
                            />
                        </BarChart>
                    )}
                </ResponsiveContainer>
            </div>
        </section>
    );
}
