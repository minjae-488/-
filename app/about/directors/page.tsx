import { Users, Award, Building2, Briefcase } from 'lucide-react';
import Image from 'next/image';

interface Director {
    id: number;
    name: string;
    position: string;
    role: string;
    career: string[];
    education?: string[];
    photo?: string;
}

const directors: Director[] = [
    {
        id: 1,
        name: '김철수',
        position: '이사장',
        role: '재단 총괄 운영',
        career: [
            '現 신주장학재단 이사장',
            '前 대한상공회의소 부회장',
            '前 ㈜신주그룹 대표이사',
            '한국경영자총협회 이사'
        ],
        education: [
            '서울대학교 경영학과 졸업',
            '하버드대학교 경영대학원 MBA'
        ]
    },
    {
        id: 2,
        name: '이영희',
        position: '이사',
        role: '장학사업 총괄',
        career: [
            '現 신주장학재단 이사',
            '前 교육부 차관',
            '前 서울대학교 교육학과 교수',
            '한국교육학회 회장'
        ],
        education: [
            '서울대학교 교육학과 졸업',
            '컬럼비아대학교 교육학 박사'
        ]
    },
    {
        id: 3,
        name: '박민준',
        position: '이사',
        role: '재정 관리',
        career: [
            '現 신주장학재단 이사',
            '現 대한회계법인 대표',
            '前 금융감독원 감사국장',
            '한국공인회계사회 이사'
        ],
        education: [
            '연세대학교 경영학과 졸업',
            '공인회계사 (CPA)'
        ]
    },
    {
        id: 4,
        name: '최지은',
        position: '이사',
        role: '복지사업 총괄',
        career: [
            '現 신주장학재단 이사',
            '現 사회복지법인 나눔 이사장',
            '前 보건복지부 사회복지정책실장',
            '한국사회복지협의회 부회장'
        ],
        education: [
            '이화여자대학교 사회복지학과 졸업',
            '미시간대학교 사회복지학 석사'
        ]
    },
    {
        id: 5,
        name: '정호석',
        position: '감사',
        role: '재단 감사',
        career: [
            '現 신주장학재단 감사',
            '現 법무법인 정의 대표변호사',
            '前 서울중앙지방법원 부장판사',
            '대한변호사협회 이사'
        ],
        education: [
            '서울대학교 법학과 졸업',
            '사법시험 합격 (제32회)'
        ]
    }
];

export default function DirectorsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center mb-4">
                        <Users className="w-12 h-12 mr-4" />
                        <h1 className="text-5xl font-bold">이사진</h1>
                    </div>
                    <p className="text-xl text-blue-100 text-center">
                        신주장학재단을 이끌어가는 전문가들
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* 소개 */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        투명하고 책임감 있는 운영
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        신주장학재단은 각 분야의 전문가들로 구성된 이사진을 통해
                        투명하고 책임감 있는 재단 운영을 실천하고 있습니다.
                        교육, 재정, 복지 등 다양한 전문성을 바탕으로 더 나은 장학 사업을 위해 노력하고 있습니다.
                    </p>
                </div>

                {/* 이사장 */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-t-xl">
                        <h3 className="text-2xl font-bold flex items-center">
                            <Award className="w-6 h-6 mr-2" />
                            이사장
                        </h3>
                    </div>
                    <div className="bg-white rounded-b-xl shadow-xl p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            {/* 사진 */}
                            <div className="flex-shrink-0">
                                <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                                    <Users className="w-20 h-20 text-blue-600" />
                                </div>
                            </div>

                            {/* 정보 */}
                            <div className="flex-1">
                                <div className="mb-4">
                                    <h4 className="text-3xl font-bold text-gray-800 mb-2">{directors[0].name}</h4>
                                    <p className="text-xl text-blue-600 font-semibold">{directors[0].position}</p>
                                    <p className="text-gray-600 mt-1">{directors[0].role}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* 주요 경력 */}
                                    <div>
                                        <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                                            <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                                            주요 경력
                                        </h5>
                                        <ul className="space-y-2">
                                            {directors[0].career.map((item, index) => (
                                                <li key={index} className="text-gray-600 text-sm flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 학력 */}
                                    {directors[0].education && (
                                        <div>
                                            <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                                                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                                                학력
                                            </h5>
                                            <ul className="space-y-2">
                                                {directors[0].education.map((item, index) => (
                                                    <li key={index} className="text-gray-600 text-sm flex items-start">
                                                        <span className="text-blue-600 mr-2">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 이사 및 감사 */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-t-xl">
                        <h3 className="text-2xl font-bold flex items-center">
                            <Users className="w-6 h-6 mr-2" />
                            이사 및 감사
                        </h3>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {directors.slice(1).map((director) => (
                        <div key={director.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start gap-6 mb-6">
                                    {/* 사진 */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-md">
                                            <Users className="w-12 h-12 text-gray-500" />
                                        </div>
                                    </div>

                                    {/* 기본 정보 */}
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-bold text-gray-800 mb-1">{director.name}</h4>
                                        <p className="text-lg text-blue-600 font-semibold">{director.position}</p>
                                        <p className="text-gray-600 text-sm mt-1">{director.role}</p>
                                    </div>
                                </div>

                                {/* 주요 경력 */}
                                <div className="mb-4">
                                    <h5 className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                                        <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                                        주요 경력
                                    </h5>
                                    <ul className="space-y-1.5">
                                        {director.career.map((item, index) => (
                                            <li key={index} className="text-gray-600 text-sm flex items-start">
                                                <span className="text-blue-600 mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 학력 */}
                                {director.education && (
                                    <div>
                                        <h5 className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                                            <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                                            학력
                                        </h5>
                                        <ul className="space-y-1.5">
                                            {director.education.map((item, index) => (
                                                <li key={index} className="text-gray-600 text-sm flex items-start">
                                                    <span className="text-blue-600 mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 조직 운영 원칙 */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">1</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">투명성</h4>
                        <p className="text-gray-700">
                            모든 재정 운영과 의사결정 과정을 투명하게 공개하여 신뢰를 구축합니다.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                        <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">2</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">전문성</h4>
                        <p className="text-gray-700">
                            각 분야 전문가들의 경험과 지식을 바탕으로 최선의 결정을 내립니다.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                        <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">3</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">책임감</h4>
                        <p className="text-gray-700">
                            장학생과 후원자에 대한 책임을 다하며 지속가능한 장학 사업을 실현합니다.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
