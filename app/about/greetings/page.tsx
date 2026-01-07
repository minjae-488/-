'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';

export default function GreetingsPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="이사장 인사말"
                subtitle="Cheirman's Message"
                description="젊은 인재가 우리나라의 미래다. 신주장학재단은 학생들의 꿈을 응원합니다."
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* 제2대 이사장 인사말 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                                제 2대 이사장 인사말
                            </h2>
                            <div className="prose prose-lg text-gray-600 leading-loose">
                                <p className="mb-4 text-xl text-gray-800 font-medium">
                                    반갑습니다. 재단법인 신주장학재단 제2대 이사장 강혜승입니다.
                                </p>
                                <p className="mb-4">
                                    재단법인 신주장학재단은 故 강신주 설립자님의 '젊은 인재가 우리나라의 미래다.'라는 숭고한 신념을 받들어 지난 2022년 설립되었습니다.
                                </p>
                                <p className="mb-4">
                                    신주장학재단은 설립이래로 우리나라의 젊은 학생들이 나름의 재능과 소질을 계발하여 저마다의 꿈들을 실현시키는데 작은 버팀목이 되고자 하는 장학재단으로서의 소임을 다해 오고 있습니다.
                                </p>
                                <p className="mb-4">
                                    앞으로도 신주장학재단은 <strong>"사랑은 기댈 곳을 찾는 것이 아니라 기대어 줄 곳을 만들어 주는 것"</strong>이라는 사랑과 나눔의 정신으로 우리나라의 미래의 주역이 될 학생 여러분들께 지속적이고 체계적인 지원을 아끼지 않을 것입니다.
                                </p>
                                <p className="mb-8">
                                    존재만으로도 소중하고 아름다운 젊은 인재들이 역량을 마음껏 발휘하며 만들어 나갈 더 좋은 우리나라의 미래를 상상해 보는 것은 교육자의 한사람으로서도 가슴 뛰는 일이 아닐 수 없습니다.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500 italic">
                                    "무한한 가능성을 지닌 이 땅의 젊은 학생들이 더 큰 청춘의 꿈과 희망을 키우는 데 밑거름이 될 수 있도록 신주장학재단의 이사장으로서 최선을 노력을 경주할 것을 약속드립니다."
                                </div>
                            </div>
                            <div className="mt-8 text-right">
                                <p className="text-lg font-bold text-gray-900">재단법인 신주장학재단 이사장 강 혜 승</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-72 h-80 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                            {/* Placeholder for Chairman Image if available */}
                            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-300">
                                <span className="text-sm">이사장 사진</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 설립자 인사말 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-3xl p-8 md:p-12"
                >
                    <div className="prose prose-lg text-gray-600 leading-loose">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">설립자 인사말</h3>
                        <p className="text-sm text-gray-500 mb-4">재단법인 신주장학재단 설립자 故 강 신 주</p>

                        <p className="mb-4">
                            반갑습니다. 재단법인 신주장학재단 초대 이사장 강신주입니다.
                        </p>
                        <p className="mb-4">
                            개인적으로 교육인을 꿈꾸며 서울대학교 사범대학 졸업 이후 고등학교에서 짧은 교편 생활을 했었던 젊은 날의 기억들이 떠오릅니다. 이후 기업인으로 한평생을 보내면서도 우리나라 교육 환경 개선을 통한 교육 발전에 나름의 관심과 노력을 기울여 왔으며 그 최종 결실로 재단법인 신주장학재단을 설립하게 되었습니다.
                        </p>
                        <p className="mb-4">
                            <strong>'젊은 인재가 우리나라의 미래다.'</strong>라는 신념으로 설립된 신주장학재단은 우리나라의 젊은 학생들이 재능과 소질을 계발하여 저마다의 꿈들을 실현시키는데 작은 버팀목이 되고자 합니다.
                        </p>
                        <p className="mb-4">
                            청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.'라는 수필 '청춘예찬'의 첫 구절처럼 무한한 가치를 지닌 젊은 학생 여러분들의 청춘의 꿈과 희망을 신주장학재단은 응원하겠습니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
