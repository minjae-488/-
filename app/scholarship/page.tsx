'use client';

import PageTitle from '@/components/PageTitle';

export default function ScholarshipPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="장학사업"
                description="신주장학재단의 장학사업 현황을 안내해 드립니다."
            />

            <div className="max-w-4xl mx-auto px-6 py-16">

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-900 pb-3 mb-6">
                        신주장학재단 장학사업
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        연간 1회 국내 대학생들에게 장학금 지급
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">지급 내역</h3>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2023년</span>
                                <span>(11월 장학금 지급 완료): 대학생 35명 / 7,000만원</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2024년</span>
                                <span>(12월 장학금 지급 완료): 대학생 46명 / 9,200만원</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold w-24">2025년</span>
                                <span>(12월 장학금 지급 완료): 대학생 38명 / 7,600만원</span>
                            </li>
                            <li className="pt-4 mt-2 border-t border-gray-300 font-bold text-lg text-blue-900">
                                총계: 119명 / 2억 3,800만원
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">선발 기준</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                        <li>성적 우수 학생</li>
                        <li>성적 향상 학생</li>
                        <li>취약 경제 학생</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
