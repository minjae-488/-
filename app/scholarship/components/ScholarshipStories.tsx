'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { studentStories } from '../data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ScholarshipStories() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl my-12 overflow-hidden px-4 md:px-12 relative">

            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">장학생들의 이야기</h3>
                <p className="text-gray-600">신주장학재단과 함께 꿈을 키워가는 학생들의 목소리를 들어보세요.</p>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="pb-16"
            >
                {studentStories.map((story) => (
                    <SwiperSlide key={story.id}>
                        <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col relative mt-4 mx-2 border border-blue-100">
                            <div className="absolute -top-4 left-8 bg-blue-500 text-white p-2 rounded-lg shadow-lg">
                                <Quote size={20} />
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 mt-4 flex-grow italic">
                                &quot;{story.message}&quot;
                            </p>

                            <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-gray-900">{story.name}</div>
                                    <div className="text-sm text-gray-500">{story.school}</div>
                                </div>
                                <div className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-500">
                                    {story.year}년 수혜
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-pagination-bullet-active {
                    background: #2563EB !important;
                }
                .swiper-button-next, .swiper-button-prev {
                    color: #2563EB !important;
                }
            `}</style>
        </section>
    );
}
