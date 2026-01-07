'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, ChevronRight, ArrowRightCircle, ArrowUp } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "젊은 인재가 우리나라의 미래다",
      subtitle: "학생 여러분들의 청춘의 꿈과 희망을 신주장학재단은 응원하겠습니다.",
      image: "/hero-bg.jpg" // Placeholder, will use a color/gradient if image missing
    },
    // Add more slides if needed
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Hero Section */}
      <section className="relative h-[560px] bg-gray-800 overflow-hidden group">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight">
            {slides[0].title}
          </h2>
          <p className="text-lg md:text-xl font-light opacity-90 drop-shadow-md">
            {slides[0].subtitle}
          </p>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">

        {/* Sub Link */}
        <div className="flex justify-end mb-4">
          <Link href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-800 gap-1">
            포토갤러리 <div className="bg-gray-400 rounded-full p-0.5"><ChevronRight size={12} className="text-white" /></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[420px]">

          {/* Box 1: Notice (Orange) */}
          <Link href="#notice" className="bg-[#CD853F] h-full p-10 flex flex-col justify-center text-white relative hover:bg-[#C27933] transition-colors group">
            <div className="absolute top-10 right-10 opacity-80">
              <MessageSquare size={40} strokeWidth={1.5} className="fill-white/20" />
            </div>
            <div className="mt-8 text-center flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-4">공지사항</h3>
              <div className="w-10 h-0.5 bg-white/40 mb-6"></div>
              <p className="text-white/90 leading-relaxed text-center font-light">
                신주장학재단의<br />
                새로운 소식을 전해드립니다.
              </p>
            </div>
          </Link>

          {/* Box 2: Middle Column (Stacked) */}
          <div className="flex flex-col gap-6 h-full">
            {/* Status (Teal) */}
            <Link href="/scholarship" className="flex-1 bg-[#6DA598] p-8 flex flex-col justify-center text-white relative hover:bg-[#5E9487] transition-colors group">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">장학금 지급현황</h3>
                  <p className="text-white/90 font-light text-sm">119명 / 238,000,000원 (현재 누적)</p>
                </div>
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ChevronRight className="text-white" size={24} />
                </div>
              </div>
            </Link>

            {/* Message (Slate) */}
            <div className="flex-1 bg-[#4E6C7C] p-8 flex flex-col justify-center text-white relative hover:bg-[#425E6E] transition-colors group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">이사장 인사말</h3>
                </div>
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ChevronRight className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Image (Right) */}
          <div className="h-full relative overflow-hidden bg-gray-100 group">
            {/* Placeholder for the auditorium image */}
            <img
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Auditorium"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>

        </div>
      </section>

      {/* Footer / Scroll Top */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#6DA598] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#5E9487] transition-all"
        >
          <ArrowUp size={24} />
        </button>
      </div>

      {/* RStudio Fake Badge (from image) - Optional but matching image */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        {/* Intentionally left out or kept minimal as it looks like a dev tool badge in the screenshot */}
      </div>

    </div>
  );
}
