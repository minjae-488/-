'use client';

import { useState } from 'react';
import { Search, GraduationCap, Filter } from 'lucide-react';

export default function ScholarListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');

    // 실제 데이터 기반 (2022-2024 총 119명)
    const scholarsByYear = [
        {
            year: 2024,
            total: 46,
            amount: 92000000,
            scholars: [
                '강○○', '강○○', '구○○', '김○○', '김○○', '김○○', '김○○', '김○○',
                '김○○', '김○○', '노○○', '류○○', '박○○', '박○○', '변○○', '서○○',
                '성○○', '손○○', '송○○', '심○○', '안○○', '여○○', '염○○', '오○○',
                '우○○', '유○○', '윤○○', '이○○', '이○○', '이○○', '이○○', '이○○',
                '임○○', '임○○', '장○○', '장○○', '전○○', '정○○', '정○○', '조○○',
                '주○○', '최○○', '최○○', '하○○', '허○○', '황○○'
            ]
        },
        {
            year: 2023,
            total: 35,
            amount: 70000000,
            scholars: [
                '강○○', '곽○○', '권○○', '김○○', '김○○', '김○○', '김○○', '김○○',
                '김○○', '남○○', '문○○', '박○○', '박○○', '박○○', '배○○', '서○○',
                '심○○', '안○○', '오○○', '유○○', '윤○○', '이○○', '이○○', '이○○',
                '임○○', '장○○', '전○○', '정○○', '정○○', '조○○', '주○○', '최○○',
                '하○○', '허○○', '홍○○'
            ]
        },
        {
            year: 2022,
            total: 38,
            amount: 76000000,
            scholars: [
                '강○○', '고○○', '곽○○', '권○○', '김○○', '김○○', '김○○', '김○○',
                '김○○', '남○○', '류○○', '문○○', '박○○', '박○○', '박○○', '변○○',
                '서○○', '성○○', '손○○', '송○○', '신○○', '안○○', '오○○', '우○○',
                '유○○', '윤○○', '이○○', '이○○', '이○○', '임○○', '장○○', '전○○',
                '정○○', '조○○', '주○○', '최○○', '하○○', '허○○'
            ]
        }
    ];

    // 존재하는 모든 연도 추출
    const availableYears = scholarsByYear.map(d => d.year);

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

            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* 검색 및 필터 */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
                    <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                        {/* 검색창 */}
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="장학생 이름 검색"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                            />
                        </div>

                        {/* 연도 필터 */}
                        <div className="relative min-w-[140px]">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full pl-11 pr-8 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white cursor-pointer"
                            >
                                <option value="all">전체 연도</option>
                                {availableYears.map(year => (
                                    <option key={year} value={year}>{year}년</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                                ▼
                            </div>
                        </div>
                    </div>
                </div>

                {/* 연도별 장학생 명단 */}
                {scholarsByYear
                    .filter(item => selectedYear === 'all' || item.year.toString() === selectedYear)
                    .map((yearData) => {
                        // 검색어 필터링
                        const filteredScholars = yearData.scholars.filter(name =>
                            name.includes(searchTerm)
                        );

                        // 검색어가 있는데 결과가 없으면 보여주지 않음 (단, 해당 연도가 선택된 상태라면 "검색 결과 없음"을 보여주는게 나을 수도 있지만, 
                        // 기존 로직처럼 여기서는 null을 리턴하고 아래에서 전체적으로 결과 없음을 체크하는게 깔끔함)
                        if (filteredScholars.length === 0 && searchTerm !== '') return null;

                        return (
                            <div key={yearData.year} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                {/* 연도 헤더 */}
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-3xl font-bold">{yearData.year}년</h2>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">
                                                {searchTerm ? `${filteredScholars.length}명 검색됨` : `${yearData.total}명`}
                                            </div>
                                            {!searchTerm && (
                                                <div className="text-blue-100 text-sm">
                                                    {(yearData.amount / 10000).toLocaleString()}만원
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* 장학생 명단 */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {filteredScholars.map((name, index) => (
                                            <div
                                                key={`${yearData.year}-${index}`}
                                                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
                                            >
                                                <div className="text-lg font-semibold text-gray-800">{name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                {/* 검색 결과 없음 표시 */}
                {(() => {
                    const visibleYears = scholarsByYear.filter(item => selectedYear === 'all' || item.year.toString() === selectedYear);
                    const hasResults = visibleYears.some(year => year.scholars.some(s => s.includes(searchTerm)));

                    if (!hasResults && (searchTerm || selectedYear !== 'all')) {
                        return (
                            <div className="text-center py-20 bg-gray-50 rounded-xl">
                                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-xl text-gray-500">조건에 맞는 결과가 없습니다.</p>
                                <p className="text-gray-400 mt-2">검색어 또는 필터를 변경해보세요.</p>
                            </div>
                        );
                    }
                    return null;
                })()}

                {/* 안내사항 */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-12">
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
