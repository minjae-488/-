'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { scholarshipData } from '../data';

export default function DetailedStats() {
    const latestData = scholarshipData[0]; // 2024 data

    const studentTypeData = [
        { name: '고등학생', value: latestData.highSchool },
        { name: '대학생', value: latestData.university },
    ];

    const regionData = latestData.regions.map(r => ({
        name: r.region,
        value: r.studentCount
    }));

    const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'];

    return (
        <section className="py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{latestData.year}년 세부 통계</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Student Type Distribution */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-800 mb-6 text-center">학급별 수혜 비중</h4>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={studentTypeData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {studentTypeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value: any) => [`${value}명`, '인원']}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Region Distribution */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-800 mb-6 text-center">지역별 지원 현황</h4>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={regionData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }: any) => `${name} ${(percent ? percent * 100 : 0).toFixed(0)}%`}
                                >
                                    {regionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value: any) => [`${value}명`, '인원']}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
