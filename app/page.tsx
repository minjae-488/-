'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "젊은 인재가 우리나라의 미래다",
      subtitle: "학생 여러분들의 청춘의 꿈과 희망을 응원합니다. 신주장학재단은 늘 함께합니다."
    },
    {
      title: "꿈을 향한 열정을 응원합니다",
      subtitle: "경제적 어려움 없이 학업에 전념할 수 있도록 신주장학재단이 함께합니다."
    },
    {
      title: "미래를 이끌 인재를 키웁니다",
      subtitle: "투명하고 공정한 장학 사업으로 대한민국의 미래를 밝힙니다."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">신주장학재단</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">재단소개</a>
            <a href="#scholarship" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">장학사업</a>
            <a href="#notice" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">알림마당</a>
            <a href="#support" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">후원안내</a>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-[600px] mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-500">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Three Column Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Notice Box - Orange */}
          <div className="bg-[#D6872D] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
              </svg>
              <h3 className="text-2xl font-bold">공지사항</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm opacity-90">신주장학재단의</p>
              <p className="text-base font-medium">새로운 소식을 전해드립니다.</p>
            </div>
          </div>

          {/* Middle Column - Two Teal Boxes */}
          <div className="flex flex-col gap-6">
            {/* Scholarship Status Box */}
            <div className="bg-[#5FA8B0] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold mb-2">장학금 지급현황</h3>
                <p className="text-sm opacity-90">119명 / 2억 3,800만원 (총 누적)</p>
              </div>
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>

            {/* Chairman Message Box */}
            <div className="bg-[#386F78] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold">이사장 인사말</h3>
              </div>
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* Image Box */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg overflow-hidden h-full min-h-[300px] flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-24 h-24 mx-auto text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <p className="text-blue-800 font-semibold text-lg">신주장학재단</p>
              <p className="text-blue-600 text-sm mt-2">미래를 향한 투자</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">공익법인 재무</h4>
            </a>

            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">서울복지사회적</h4>
            </a>

            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">국세청</h4>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B4B4B] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">신주장학재단</h3>
              </div>
              <p className="text-sm text-gray-300">Shinjoo Scholarship Foundation</p>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p className="font-semibold text-white mb-2">재단법인 신주장학재단</p>
              <p>서울특별시 강남구 언주로 120 (도곡동, 인스토피아) 1012호 (우)06295</p>
              <p>전화번호 : 02-3463-5656 | 팩스 : 02-3463-5657</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
            <p>© Copyright 2022 신주장학재단 All Rights Reserved.</p>
            <p className="mt-1">Designed by Wizmob</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
