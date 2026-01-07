'use client';

import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Scale } from 'lucide-react';

export default function PurposePage() {
    const values = [
        {
            title: '교육 평등',
            description: '인간은 누구나 평등하고 교육을 받을 권리가 있습니다. 특히 청년 학생들은 어떠한 이유로도 차별받아서는 안 됩니다.',
            icon: Scale,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            title: '희망 나눔',
            description: '경제적 어려움으로 교육의 기회에서 소외되지 않도록 장학금을 지원하여 재능을 개발할 수 있도록 돕습니다.',
            icon: Heart,
            color: 'bg-red-100 text-red-600',
        },
        {
            title: '미래 인재',
            description: '노력하고 재능 있는 학생들을 발굴하여 국가 사회와 산업 발전에 기여할 미래의 주역으로 키웁니다.',
            icon: CheckCircle2,
            color: 'bg-green-100 text-green-600',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageTitle
                title="설립취지"
                subtitle="Foundation Purpose"
                description="누구나 평등하게 교육받을 권리를 보장하는 것이 신주장학재단의 설립 이념입니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Main Purpose Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
                        "교육을 받을 권리는<br />
                        <span className="text-indigo-600">누구에게나 평등해야 합니다</span>"
                    </h2>
                    <p className="text-lg text-gray-600 leading-loose mb-6">
                        오늘날 과중한 교육비 부담에 억눌려 교육을 받을 권리에서 소외되어 아까운 재능과 소질을 개발하지 못하는 불행한 일이 생기는 것은 참으로 안타까운 일입니다. 이는 더 나아가 국가와 사회 그리고 산업 발전에도 크나큰 손해라 할 것입니다.
                    </p>
                    <p className="text-lg text-gray-600 leading-loose">
                        이에 본 장학재단을 설립하여 우리나라 미래의 주역이 될 성적 우수 학생들, 성적 향상 학생들 및 경제적 어려움을 겪고 있는 학생들에게 장학금을 지급함으로써 노력하고 재능있는 학생들의 교육 받을 권리를 조금이나마 보장해주고 국가사회와 산업발전에 봉사할 기회를 마련해주고자 합니다.
                    </p>
                </motion.div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6 mx-auto`}>
                                <value.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
