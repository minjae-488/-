export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              재단법인 신주장학재단
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 sm:text-2xl">
              학생 여러분들의 청춘의 꿈과 희망을 응원합니다
            </p>
            <p className="mt-4 text-lg text-blue-200">
              젊은 인재가 우리나라의 미래입니다
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#about"
                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:scale-105"
              >
                재단 소개
              </a>
              <a
                href="#scholarship"
                className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                장학사업 안내
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              장학금 지급 현황
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              투명하고 지속가능한 장학 사업을 위해
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-5xl font-bold text-blue-600">119</div>
              <div className="mt-2 text-sm font-semibold text-gray-600">명</div>
              <div className="mt-3 text-center text-base font-medium text-gray-900">
                누적 장학생 수
              </div>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-5xl font-bold text-green-600">2.38</div>
              <div className="mt-2 text-sm font-semibold text-gray-600">억원</div>
              <div className="mt-3 text-center text-base font-medium text-gray-900">
                누적 지급액
              </div>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-5xl font-bold text-orange-600">+15</div>
              <div className="mt-2 text-sm font-semibold text-gray-600">%</div>
              <div className="mt-3 text-center text-base font-medium text-gray-900">
                전년 대비 증가율
              </div>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-5xl font-bold text-purple-600">24</div>
              <div className="mt-2 text-sm font-semibold text-gray-600">개교</div>
              <div className="mt-3 text-center text-base font-medium text-gray-900">
                수혜 학교 수
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              재단 소개
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              신주장학재단은
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              경제적 어려움으로 학업을 중단하는 학생이 없도록,
              우수한 인재들이 꿈을 펼칠 수 있도록 지원하는 공익 장학재단입니다.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  투명한 운영
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    모든 장학금 지급 현황과 재정 운영을 투명하게 공개하여 신뢰받는 재단을 만들어갑니다.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  지속적인 지원
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    일회성이 아닌 지속적인 장학금 지원으로 학생들이 안정적으로 학업에 전념할 수 있도록 돕습니다.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  공정한 선발
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    명확한 기준과 공정한 절차를 통해 장학생을 선발하여 진정으로 도움이 필요한 학생을 지원합니다.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="scholarship" className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              장학금 신청 안내
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              신주장학재단은 여러분의 꿈을 응원합니다.
              장학금 신청 자격과 절차를 확인하고 지원해보세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/scholarship"
                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:scale-105"
              >
                장학사업 자세히 보기
              </a>
              <a
                href="/support"
                className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                후원하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">재단법인 신주장학재단</h3>
              <p className="mt-4 text-sm text-gray-400">
                Shinjoo Scholarship Foundation
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">주소</h4>
              <p className="mt-4 text-sm text-gray-400">
                서울특별시 강남구 언주로 120 (도곡동, 인스토피아) 1012호<br />
                (우)06295
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">연락처</h4>
              <p className="mt-4 text-sm text-gray-400">
                전화번호: 02-3463-5656<br />
                팩스: 02-3463-5657
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 신주장학재단. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
