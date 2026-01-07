'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { Phone, Printer, MapPin, Building2, ExternalLink } from 'lucide-react';

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="후원안내"
                subtitle="Support Us"
                description="학생들의 꿈을 응원하는 신주장학재단의 든든한 후원자가 되어주세요."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">후원 문의</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            후원금 기부 및 관련 사항들은 재단법인 신주장학재단으로 문의해 주시기 바랍니다.<br />
                            보내주신 후원금은 장학사업을 통해 투명하게 사용됩니다.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">전화번호</h3>
                                    <p className="text-gray-600 text-lg">02-3463-5656</p>
                                </div>
                            </div>

                            <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                    <Printer size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">팩스</h3>
                                    <p className="text-gray-600 text-lg">02-3463-5657</p>
                                </div>
                            </div>

                            <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">주소</h3>
                                    <p className="text-gray-600">
                                        서울특별시 강남구 언주로 120 (도곡동, 인스토피아) 1012호 (우)06295
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 h-[500px] bg-gray-200 rounded-2xl overflow-hidden relative"
                    >
                        {/* Simple Map Placeholder - In production, use Google Maps or Naver Maps API */}
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                                <p>지도 API 연동 영역</p>
                                <p className="text-sm">강남구 언주로 120 (도곡동, 인스토피아)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* External Links */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">관련 기관</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="https://www.publicbenefit.go.kr" target="_blank" rel="noopener noreferrer" className="group p-6 border rounded-xl hover:shadow-md transition-shadow flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <span className="font-bold text-gray-700 group-hover:text-indigo-900">공익법인 재무</span>
                            </div>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-indigo-500" />
                        </a>
                        <a href="https://www.seoulwelfare.or.kr" target="_blank" rel="noopener noreferrer" className="group p-6 border rounded-xl hover:shadow-md transition-shadow flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <span className="font-bold text-gray-700 group-hover:text-indigo-900">서울복지사회적</span>
                            </div>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-indigo-500" />
                        </a>
                        <a href="https://www.nts.go.kr" target="_blank" rel="noopener noreferrer" className="group p-6 border rounded-xl hover:shadow-md transition-shadow flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <span className="font-bold text-gray-700 group-hover:text-indigo-900">국세청</span>
                            </div>
                            <ExternalLink size={18} className="text-gray-400 group-hover:text-indigo-500" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
