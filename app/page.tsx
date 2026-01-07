'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">신주장학재단</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              재단소개
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#scholarship" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              장학사업
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#notice" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              알림마당
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#support" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              후원안내
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>재단소개</a>
              <a href="#scholarship" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>장학사업</a>
              <a href="#notice" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>알림마당</a>
              <a href="#support" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>후원안내</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[600px] mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-500 animate-fade-in-up">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-3'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Three Column Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Notice Box - Orange */}
          <div className="bg-gradient-to-br from-[#E89A3C] to-[#D6872D] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
              </svg>
              <h3 className="text-2xl font-bold">공지사항</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm opacity-90">신주장학재단의</p>
              <p className="text-base font-medium">새로운 소식을 전해드립니다.</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  자세히 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Two Teal Boxes */}
          <div className="flex flex-col gap-6">
            {/* Scholarship Status Box */}
            <div className="bg-gradient-to-br from-[#6BB8C0] to-[#5FA8B0] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold mb-2">장학금 지급현황</h3>
                <p className="text-sm opacity-90">119명 / 2억 3,800만원</p>
                <p className="text-xs opacity-75 mt-1">(총 누적)</p>
              </div>
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>

            {/* Chairman Message Box */}
            <div className="bg-gradient-to-br from-[#4A8088] to-[#386F78] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-between group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold">이사장 인사말</h3>
                <p className="text-sm opacity-90 mt-1">제2대 이사장 강혜승</p>
              </div>
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* Image Box */}
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 rounded-2xl shadow-xl overflow-hidden h-full min-h-[300px] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all"></div>
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <p className="text-blue-900 font-bold text-lg">신주장학재단</p>
              <p className="text-blue-700 text-sm mt-2">미래를 향한 투자</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">재단소개</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">설립취지</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                인간은 누구나 평등하고, 교육을 받을 권리가 있습니다. 특히 청년 학생들은 빈부격차, 남녀성별 등 그 어떠한 이유로도 차별을 받아서는 안될 것입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                본 장학재단은 우리나라 미래의 주역이 될 성적 우수 학생들, 성적 향상 학생들 및 경제적 어려움을 겪고 있는 학생들에게 장학금을 지급함으로써 교육 받을 권리를 보장하고 국가사회와 산업발전에 봉사할 기회를 마련하고자 합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">연혁</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 font-bold text-blue-600">2021</div>
                  <div className="text-gray-700">
                    <p>• 06월: 장학재단 설립 논의</p>
                    <p>• 10월: 장학재단 설립계획 확정</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 font-bold text-blue-600">2022</div>
                  <div className="text-gray-700">
                    <p>• 03월: 장학재단 설립 및 운영 조례 제정</p>
                    <p>• 08월: 장학재단 설립 준비위원회 운영</p>
                    <p>• 11월: 설립 발기인 총회 개최</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 font-bold text-blue-600">2023</div>
                  <div className="text-gray-700">
                    <p>• 01월: 재단법인 신주장학재단 설립</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section id="scholarship" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">장학사업</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">신주장학재단 장학사업</h3>
            <p className="text-center text-gray-700 mb-8 text-lg">연간 1회 국내 대학생들에게 장학금 지급</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">35명</div>
                <div className="text-gray-600 mb-1">2023년</div>
                <div className="text-2xl font-semibold text-gray-900">7,000만원</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">46명</div>
                <div className="text-gray-600 mb-1">2024년</div>
                <div className="text-2xl font-semibold text-gray-900">9,200만원</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">38명</div>
                <div className="text-gray-600 mb-1">2025년</div>
                <div className="text-2xl font-semibold text-gray-900">7,600만원</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center">
              <div className="text-5xl font-bold mb-2">119명</div>
              <div className="text-xl mb-4">총 누적 장학생</div>
              <div className="text-3xl font-bold">2억 3,800만원</div>
              <div className="text-sm opacity-90 mt-2">총 누적 지급액</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              선발기준
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">성적 우수 학생</h5>
                  <p className="text-sm text-gray-600">뛰어난 학업 성취도를 보이는 학생</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">성적 향상 학생</h5>
                  <p className="text-sm text-gray-600">지속적인 성적 향상을 이룬 학생</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">취약 경제 학생</h5>
                  <p className="text-sm text-gray-600">경제적 어려움을 겪고 있는 학생</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section id="notice" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">알림마당</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <h3 className="text-2xl font-bold">공지사항</h3>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { title: "2025년 장학금 지급 완료 안내", date: "2025.12.15", badge: "완료" },
                  { title: "2026년 장학생 모집 공고", date: "2026.01.05", badge: "진행중" },
                  { title: "재단 운영 투명성 보고서 공개", date: "2025.11.20", badge: "공개" }
                ].map((notice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${notice.badge === "진행중" ? "bg-green-100 text-green-700" :
                          notice.badge === "완료" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-700"
                        }`}>
                        {notice.badge}
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{notice.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{notice.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">후원안내</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">여러분의 따뜻한 마음이 학생들의 미래를 밝힙니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">후원 방법</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>정기 후원: 매월 일정 금액을 자동 이체</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>일시 후원: 원하는 시기에 원하는 금액 후원</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>기부금 영수증 발급 가능 (세액 공제 혜택)</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">후원 계좌</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 mb-2">예금주</p>
                <p className="text-xl font-bold text-gray-900 mb-4">재단법인 신주장학재단</p>
                <p className="text-gray-600 mb-2">계좌번호</p>
                <p className="text-2xl font-bold text-blue-600">문의 필요</p>
                <p className="text-sm text-gray-500 mt-4">* 후원 문의: 02-3463-5656</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">공익법인 재무</h4>
            </a>

            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900">서울복지사회적</h4>
            </a>

            <a href="#" className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
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
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">신주장학재단</h3>
              </div>
              <p className="text-sm text-gray-300">Shinjoo Scholarship Foundation</p>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p className="font-semibold text-white mb-2">재단법인 신주장학재단</p>
              <p>서울특별시 강남구 언주로 120 (도곡동, 인스토피아) 1012호</p>
              <p>(우)06295</p>
              <p className="mt-2">전화번호 : 02-3463-5656</p>
              <p>팩스 : 02-3463-5657</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
            <p>© Copyright 2022 신주장학재단 All Rights Reserved.</p>
            <p className="mt-1">Designed by Wizmob</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="맨 위로"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
