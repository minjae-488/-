'use client';

import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
    const cards = [
        {
            title: '이사장 인사말',
            description: '신주장학재단 이사장님의 환영 인사와 재단의 비전을 전합니다.',
            icon: HeartHandshake,
            href: '/about/greetings',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            title: '설립취지',
            description: '교육 받을 권리를 보장하고 미래 인재를 양성하기 위한 설립 목적입니다.',
            icon: BookOpen,
            href: '/about/purpose',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            title: '연혁/조직도',
            description: '재단의 발자취와 투명한 운영을 위한 조직 구성을 소개합니다.',
            icon: Clock,
            href: '/about/history',
            color: 'bg-indigo-50 text-indigo-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageTitle
                title="재단소개"
                subtitle="About Foundation"
                description="신주장학재단은 젊은 인재들의 꿈과 희망을 응원하며 더 나은 미래를 함께 만들어갑니다."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <Link key={card.title} href={card.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300 h-full border border-gray-100"
                            >
                                <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-6`}>
                                    <card.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                                    {card.title}
                                    <ArrowRight size={20} className="text-gray-400" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
