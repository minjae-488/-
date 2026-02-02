'use client';

import { useState } from 'react';
import { Search, GraduationCap, Calendar, School, Award, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface Scholar {
    id: number;
    year: number;
    name: string;
    school: string;
    grade: string;
    category: '고등학생' | '대학생';
    region: string;
    amount: number;
}

// 샘플 데이터 (실제로는 API나 데이터베이스에서 가져와야 함)
const scholars: Scholar[] = [
    { id: 1, year: 2024, name: '김○○', school: '서울고등학교', grade: '3학년', category: '고등학생', region: '서울', amount: 2000000 },
    { id: 2, year: 2024, name: '이○○', school: '고려대학교', grade: '2학년', category: '대학생', region: '서울', amount: 3000000 },
    { id: 3, year: 2024, name: '박○○', school: '인천고등학교', grade: '2학년', category: '고등학생', region: '인천', amount: 2000000 },
    { id: 4, year: 2024, name: '최○○', school: '연세대학교', grade: '3학년', category: '대학생', region: '서울', amount: 3000000 },
    { id: 5, year: 2023, name: '정○○', school: '경기고등학교', grade: '3학년', category: '고등학생', region: '서울', amount: 2000000 },
    { id: 6, year: 2023, name: '강○○', school: '서울대학교', grade: '4학년', category: '대학생', region: '서울', amount: 3000000 },
    { id: 7, year: 2023, name: '조○○', school: '부산고등학교', grade: '3학년', category: '고등학생', region: '부산', amount: 2000000 },
    { id: 8, year: 2023, name: '윤○○', school: '성균관대학교', grade: '1학년', category: '대학생', region: '서울', amount: 3000000 },
    { id: 9, year: 2022, name: '장○○', school: '대전고등학교', grade: '3학년', category: '고등학생', region: '대전', amount: 2000000 },
    { id: 10, year: 2022, name: '임○○', school: '한양대학교', grade: '2학년', category: '대학생', region: '서울', amount: 3000000 },
];

export default function ScholarListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [selectedCategory, setSelectedCategory] = useState<'고등학생' | '대학생' | 'all'>('all');
    const [selectedRegion, setSelectedRegion] = useState<string>('all');

    // 필터링된 장학생 목록
    const filteredScholars = scholars.filter(scholar => {
        const matchesSearch = scholar.name.includes(searchTerm) || scholar.school.includes(searchTerm);
        const matchesYear = selectedYear === 'all' || scholar.year === selectedYear;
        const matchesCategory = selectedCategory === 'all' || scholar.category === selectedCategory;
        const matchesRegion = selectedRegion === 'all' || scholar.region === selectedRegion;

        return matchesSearch && matchesYear && matchesCategory && matchesRegion;
    });

    // 연도 목록 추출
    const years = Array.from(new Set(scholars.map(s => s.year))).sort((a, b) => b - a);
    const regions = Array.from(new Set(scholars.map(s => s.region))).sort();

    // 통계 계산
    const totalScholars = filteredScholars.length;
    const totalAmount = filteredScholars.reduce((sum, s) => sum + s.amount, 0);

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCap className="w-12 h-12 mr-4" />
                        <h1 className="text-5xl font-bold">장학생 명단</h1>
                    </div>
                    <p className="text-xl text-blue-100 text-center">
                        신주장학재단의 지원을 받은 장학생들을 소개합니다
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* 통계 카드 */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg"
                    >
                        <div className="flex items-center mb-4">
                            <Award className="w-8 h-8 mr-3" />
                            <h3 className="text-2xl font-bold">검색 결과</h3>
                        </div>
                        <p className="text-5xl font-bold mb-2">{totalScholars}명</p>
                        <p className="text-blue-100">검색된 장학생 수</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 shadow-lg"
                    >
                        <div className="flex items-center mb-4">
                            <Award className="w-8 h-8 mr-3" />
                            <h3 className="text-2xl font-bold">지급 총액</h3>
                        </div>
                        <p className="text-5xl font-bold mb-2">{(totalAmount / 10000).toLocaleString()}만원</p>
                        <p className="text-green-100">검색된 장학생 지급액</p>
                    </motion.div>
                </div>

                {/* 검색 및 필터 */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex items-center mb-6">
                        <Filter className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-800">검색 및 필터</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* 검색 */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="이름 또는 학교명 검색"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* 연도 필터 */}
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="all">전체 연도</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}년</option>
                                ))}
                            </select>
                        </div>

                        {/* 구분 필터 */}
                        <div className="relative">
                            <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as any)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="all">전체 구분</option>
                                <option value="고등학생">고등학생</option>
                                <option value="대학생">대학생</option>
                            </select>
                        </div>

                        {/* 지역 필터 */}
                        <div className="relative">
                            <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="all">전체 지역</option>
                                {regions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 장학생 목록 테이블 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold">연도</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold">이름</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold">학교</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold">학년</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold">구분</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold">지역</th>
                                    <th className="px-6 py-4 text-right text-sm font-bold">장학금액</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredScholars.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                            검색 결과가 없습니다.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredScholars.map((scholar, index) => (
                                        <motion.tr
                                            key={scholar.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-blue-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-gray-700">{scholar.year}</td>
                                            <td className="px-6 py-4">
                                                <span className="font-semibold text-gray-800">{scholar.name}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">{scholar.school}</td>
                                            <td className="px-6 py-4 text-gray-700">{scholar.grade}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${scholar.category === '고등학생'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {scholar.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">{scholar.region}</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="font-bold text-blue-600">
                                                    {(scholar.amount / 10000).toLocaleString()}만원
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 안내사항 */}
                <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                        <span className="mr-2">ℹ️</span>
                        개인정보 보호 안내
                    </h4>
                    <ul className="text-blue-700 space-y-1 ml-6 text-sm">
                        <li>• 개인정보 보호를 위해 장학생 이름은 일부만 표시됩니다.</li>
                        <li>• 표시된 정보는 장학생 본인의 동의를 받아 공개되었습니다.</li>
                        <li>• 문의사항은 재단 사무국(02-3463-5656)으로 연락주시기 바랍니다.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
