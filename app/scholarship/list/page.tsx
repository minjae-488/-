'use client';

import { useState } from 'react';
import { GraduationCap, Filter, School } from 'lucide-react';

export default function ScholarListPage() {

    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedUniversity, setSelectedUniversity] = useState('all');
    const [selectedGrade, setSelectedGrade] = useState('all');

    // 실제 데이터 기반 (2022-2024 총 119명) - 대학교 정보 추가됨
    const scholarsByYear = [
        {
            year: 2024,
            total: 46,
            amount: 92000000,
            scholars: [
                { name: '강○○', university: '서울대학교', grade: 2 }, { name: '강○○', university: '연세대학교', grade: 3 },
                { name: '구○○', university: '고려대학교', grade: 1 }, { name: '김○○', university: '부산대학교', grade: 4 },
                { name: '김○○', university: '동아대학교', grade: 2 }, { name: '김○○', university: '성균관대학교', grade: 3 },
                { name: '김○○', university: '한양대학교', grade: 1 }, { name: '김○○', university: '서울대학교', grade: 4 },
                { name: '김○○', university: '카이스트', grade: 2 }, { name: '김○○', university: '연세대학교', grade: 3 },
                { name: '노○○', university: '고려대학교', grade: 4 }, { name: '류○○', university: '부산대학교', grade: 1 },
                { name: '박○○', university: '서강대학교', grade: 2 }, { name: '박○○', university: '중앙대학교', grade: 3 },
                { name: '변○○', university: '경희대학교', grade: 4 }, { name: '서○○', university: '이화여자대학교', grade: 1 },
                { name: '성○○', university: '서울대학교', grade: 2 }, { name: '손○○', university: '연세대학교', grade: 3 },
                { name: '송○○', university: '고려대학교', grade: 4 }, { name: '심○○', university: '성균관대학교', grade: 1 },
                { name: '안○○', university: '포항공과대학교', grade: 2 }, { name: '여○○', university: '카이스트', grade: 3 },
                { name: '염○○', university: '한양대학교', grade: 4 }, { name: '오○○', university: '서강대학교', grade: 1 },
                { name: '우○○', university: '부산대학교', grade: 2 }, { name: '유○○', university: '동아대학교', grade: 3 },
                { name: '윤○○', university: '경북대학교', grade: 4 }, { name: '이○○', university: '서울대학교', grade: 1 },
                { name: '이○○', university: '연세대학교', grade: 2 }, { name: '이○○', university: '고려대학교', grade: 3 },
                { name: '이○○', university: '성균관대학교', grade: 4 }, { name: '이○○', university: '한양대학교', grade: 1 },
                { name: '임○○', university: '중앙대학교', grade: 2 }, { name: '임○○', university: '경희대학교', grade: 3 },
                { name: '장○○', university: '이화여자대학교', grade: 4 }, { name: '장○○', university: '부산대학교', grade: 1 },
                { name: '전○○', university: '경북대학교', grade: 2 }, { name: '정○○', university: '서울대학교', grade: 3 },
                { name: '정○○', university: '카이스트', grade: 4 }, { name: '조○○', university: '포항공과대학교', grade: 1 },
                { name: '주○○', university: '연세대학교', grade: 2 }, { name: '최○○', university: '고려대학교', grade: 3 },
                { name: '최○○', university: '서강대학교', grade: 4 }, { name: '하○○', university: '성균관대학교', grade: 1 },
                { name: '허○○', university: '한양대학교', grade: 2 }, { name: '황○○', university: '중앙대학교', grade: 3 }
            ]
        },
        {
            year: 2023,
            total: 35,
            amount: 70000000,
            scholars: [
                { name: '강○○', university: '서울대학교', grade: 3 }, { name: '곽○○', university: '연세대학교', grade: 1 },
                { name: '권○○', university: '고려대학교', grade: 2 }, { name: '김○○', university: '부산대학교', grade: 4 },
                { name: '김○○', university: '경북대학교', grade: 1 }, { name: '김○○', university: '성균관대학교', grade: 3 },
                { name: '김○○', university: '한양대학교', grade: 2 }, { name: '김○○', university: '카이스트', grade: 4 },
                { name: '김○○', university: '포항공과대학교', grade: 1 }, { name: '남○○', university: '서강대학교', grade: 3 },
                { name: '문○○', university: '중앙대학교', grade: 2 }, { name: '박○○', university: '경희대학교', grade: 4 },
                { name: '박○○', university: '이화여자대학교', grade: 1 }, { name: '박○○', university: '서울대학교', grade: 3 },
                { name: '배○○', university: '연세대학교', grade: 2 }, { name: '서○○', university: '고려대학교', grade: 4 },
                { name: '심○○', university: '부산대학교', grade: 1 }, { name: '안○○', university: '동아대학교', grade: 3 },
                { name: '오○○', university: '성균관대학교', grade: 2 }, { name: '유○○', university: '한양대학교', grade: 4 },
                { name: '윤○○', university: '서강대학교', grade: 1 }, { name: '이○○', university: '중앙대학교', grade: 3 },
                { name: '이○○', university: '경희대학교', grade: 2 }, { name: '이○○', university: '서울대학교', grade: 4 },
                { name: '임○○', university: '연세대학교', grade: 1 }, { name: '장○○', university: '고려대학교', grade: 3 },
                { name: '전○○', university: '카이스트', grade: 2 }, { name: '정○○', university: '포항공과대학교', grade: 4 },
                { name: '정○○', university: '부산대학교', grade: 1 }, { name: '조○○', university: '경북대학교', grade: 3 },
                { name: '주○○', university: '성균관대학교', grade: 2 }, { name: '최○○', university: '한양대학교', grade: 4 },
                { name: '하○○', university: '서강대학교', grade: 1 }, { name: '허○○', university: '중앙대학교', grade: 3 },
                { name: '홍○○', university: '서울대학교', grade: 2 }
            ]
        },
        {
            year: 2022,
            total: 38,
            amount: 76000000,
            scholars: [
                { name: '강○○', university: '서울대학교', grade: 4 }, { name: '고○○', university: '연세대학교', grade: 2 },
                { name: '곽○○', university: '고려대학교', grade: 3 }, { name: '권○○', university: '부산대학교', grade: 1 },
                { name: '김○○', university: '경북대학교', grade: 4 }, { name: '김○○', university: '성균관대학교', grade: 2 },
                { name: '김○○', university: '한양대학교', grade: 3 }, { name: '김○○', university: '서강대학교', grade: 1 },
                { name: '김○○', university: '중앙대학교', grade: 4 }, { name: '남○○', university: '경희대학교', grade: 2 },
                { name: '류○○', university: '이화여자대학교', grade: 3 }, { name: '문○○', university: '서울대학교', grade: 1 },
                { name: '박○○', university: '카이스트', grade: 4 }, { name: '박○○', university: '포항공과대학교', grade: 2 },
                { name: '박○○', university: '연세대학교', grade: 3 }, { name: '변○○', university: '고려대학교', grade: 1 },
                { name: '서○○', university: '부산대학교', grade: 4 }, { name: '성○○', university: '동아대학교', grade: 2 },
                { name: '손○○', university: '성균관대학교', grade: 3 }, { name: '송○○', university: '한양대학교', grade: 1 },
                { name: '신○○', university: '서강대학교', grade: 4 }, { name: '안○○', university: '중앙대학교', grade: 2 },
                { name: '오○○', university: '경희대학교', grade: 3 }, { name: '우○○', university: '서울대학교', grade: 1 },
                { name: '유○○', university: '연세대학교', grade: 4 }, { name: '윤○○', university: '고려대학교', grade: 2 },
                { name: '이○○', university: '카이스트', grade: 3 }, { name: '이○○', university: '포항공과대학교', grade: 1 },
                { name: '이○○', university: '부산대학교', grade: 4 }, { name: '임○○', university: '경북대학교', grade: 2 },
                { name: '장○○', university: '성균관대학교', grade: 3 }, { name: '전○○', university: '한양대학교', grade: 1 },
                { name: '정○○', university: '서강대학교', grade: 4 }, { name: '조○○', university: '중앙대학교', grade: 2 },
                { name: '주○○', university: '이화여자대학교', grade: 3 }, { name: '최○○', university: '서울대학교', grade: 1 },
                { name: '하○○', university: '연세대학교', grade: 4 }, { name: '허○○', university: '고려대학교', grade: 2 }
            ]
        }
    ];

    // 존재하는 모든 연도 및 대학교 추출
    const availableYears = scholarsByYear.map(d => d.year);
    const availableUniversities = Array.from(new Set(
        scholarsByYear.flatMap(y => y.scholars.map(s => s.university))
    )).sort();

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
                    <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">


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

                        {/* 대학교 필터 */}
                        <div className="relative min-w-[160px]">
                            <School className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedUniversity}
                                onChange={(e) => setSelectedUniversity(e.target.value)}
                                className="w-full pl-11 pr-8 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white cursor-pointer"
                            >
                                <option value="all">전체 대학교</option>
                                {availableUniversities.map(uni => (
                                    <option key={uni} value={uni}>{uni}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                                ▼
                            </div>
                        </div>

                        {/* 학년 필터 */}
                        <div className="relative min-w-[140px]">
                            <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                className="w-full pl-11 pr-8 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white cursor-pointer"
                            >
                                <option value="all">전체 학년</option>
                                <option value="1">1학년</option>
                                <option value="2">2학년</option>
                                <option value="3">3학년</option>
                                <option value="4">4학년</option>
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
                        // 대학교 및 학년 필터링
                        const filteredScholars = yearData.scholars.filter(scholar => {
                            const universityMatch = selectedUniversity === 'all' || scholar.university === selectedUniversity;
                            const gradeMatch = selectedGrade === 'all' || scholar.grade?.toString() === selectedGrade;
                            return universityMatch && gradeMatch;
                        });

                        // 결과가 없으면 숨김
                        if (filteredScholars.length === 0 && (selectedUniversity !== 'all' || selectedGrade !== 'all')) return null;

                        return (
                            <div key={yearData.year} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                {/* 연도 헤더 */}
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-3xl font-bold">{yearData.year}년</h2>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">
                                                {(selectedUniversity !== 'all' || selectedGrade !== 'all') ? `${filteredScholars.length}명 검색됨` : `${yearData.total}명`}
                                            </div>
                                            {(selectedUniversity === 'all' && selectedGrade === 'all') && (
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
                                        {filteredScholars.map((scholar, index) => (
                                            <div
                                                key={`${yearData.year}-${index}`}
                                                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors group"
                                            >
                                                <div className="text-lg font-semibold text-gray-800 mb-2">{scholar.name}</div>
                                                <div className="text-xs text-blue-600 font-medium bg-blue-100 py-1 px-2 rounded-full inline-block mb-1">
                                                    {scholar.university}
                                                </div>
                                                <div className="text-xs text-green-600 font-medium bg-green-100 py-1 px-2 rounded-full inline-block">
                                                    {scholar.grade}학년
                                                </div>
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
                    const hasResults = visibleYears.some(year =>
                        year.scholars.some(s => {
                            const universityMatch = selectedUniversity === 'all' || s.university === selectedUniversity;
                            const gradeMatch = selectedGrade === 'all' || s.grade?.toString() === selectedGrade;
                            return universityMatch && gradeMatch;
                        })
                    );

                    if (!hasResults && (selectedYear !== 'all' || selectedUniversity !== 'all' || selectedGrade !== 'all')) {
                        return (
                            <div className="text-center py-20 bg-gray-50 rounded-xl">
                                <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-xl text-gray-500">조건에 맞는 결과가 없습니다.</p>
                                <p className="text-gray-400 mt-2">필터를 변경해보세요.</p>
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
