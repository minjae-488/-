import { GraduationCap } from 'lucide-react';

export default function ScholarListPage() {
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

    const totalScholars = 119;
    const totalAmount = 238000000;

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
                {/* 누적 통계 */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-2">
                                {totalScholars}명
                            </div>
                            <div className="text-gray-600 text-lg">누적 장학생 수</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-600 mb-2">
                                {(totalAmount / 100000000).toFixed(2)}억원
                            </div>
                            <div className="text-gray-600 text-lg">누적 지급액</div>
                        </div>
                    </div>
                </div>

                {/* 연도별 장학생 명단 */}
                {scholarsByYear.map((yearData) => (
                    <div key={yearData.year} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                        {/* 연도 헤더 */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-bold">{yearData.year}년</h2>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">{yearData.total}명</div>
                                    <div className="text-blue-100 text-sm">
                                        {(yearData.amount / 10000).toLocaleString()}만원
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 장학생 명단 */}
                        <div className="p-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {yearData.scholars.map((name, index) => (
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
                ))}

                {/* 안내사항 */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
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
