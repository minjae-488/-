import { MapPin, Phone, Mail, Clock, Bus, Train, Car } from 'lucide-react';

export default function DirectionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">찾아오시는 길</h1>
          <p className="text-xl text-blue-100">
            신주장학재단을 방문해주셔서 감사합니다
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* 주소 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">주소</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              서울특별시 강남구 테헤란로 123<br />
              신주빌딩 5층
            </p>
          </div>

          {/* 전화 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">연락처</h3>
            </div>
            <p className="text-gray-600">
              <strong>전화:</strong> 02-1234-5678<br />
              <strong>팩스:</strong> 02-1234-5679
            </p>
          </div>

          {/* 이메일 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">이메일</h3>
            </div>
            <p className="text-gray-600">
              <strong>일반문의:</strong><br />
              info@sjsf.or.kr<br />
              <strong>장학사업:</strong><br />
              scholarship@sjsf.or.kr
            </p>
          </div>
        </div>

        {/* 운영시간 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 mb-12 text-white">
          <div className="flex items-center mb-4">
            <Clock className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">운영시간</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg mb-2"><strong>평일</strong></p>
              <p className="text-blue-100">오전 9시 ~ 오후 6시</p>
              <p className="text-sm text-blue-200 mt-1">(점심시간: 12:00 ~ 13:00)</p>
            </div>
            <div>
              <p className="text-lg mb-2"><strong>주말 및 공휴일</strong></p>
              <p className="text-blue-100">휴무</p>
            </div>
          </div>
        </div>

        {/* 지도 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h3 className="text-2xl font-bold">오시는 길</h3>
          </div>

          {/* 카카오맵 임베드 */}
          <div className="w-full h-96 bg-gray-200 relative">
            <iframe
              src="https://map.kakao.com/"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="신주장학재단 위치"
            ></iframe>
            {/* 실제 구현시 카카오맵 API 키로 정확한 주소 표시 */}
          </div>
        </div>

        {/* 교통편 안내 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 지하철 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4 pb-4 border-b-2 border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Train className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">지하철</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-green-500 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
                <div>
                  <p className="font-semibold">2호선 강남역</p>
                  <p className="text-sm text-gray-600">3번 출구에서 도보 5분</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
                <div>
                  <p className="font-semibold">3호선 신사역</p>
                  <p className="text-sm text-gray-600">8번 출구에서 도보 7분</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 버스 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4 pb-4 border-b-2 border-green-100">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Bus className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">버스</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-green-600 mb-2">간선버스</p>
                <p className="text-gray-600">145, 146, 148, 241</p>
              </div>
              <div>
                <p className="font-semibold text-blue-600 mb-2">지선버스</p>
                <p className="text-gray-600">3412, 4412, 4419</p>
              </div>
              <div>
                <p className="font-semibold text-red-600 mb-2">광역버스</p>
                <p className="text-gray-600">9403, 9404</p>
              </div>
            </div>
          </div>

          {/* 자가용 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4 pb-4 border-b-2 border-purple-100">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <Car className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">자가용</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>강남대로 방면에서 진입 시<br />테헤란로 우회전</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>건물 지하 주차장 이용 가능<br />(2시간 무료)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>방문 전 주차 공간 문의 바랍니다</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 방문 안내 */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
            <span className="mr-2">ℹ️</span>
            방문 전 확인사항
          </h4>
          <ul className="text-yellow-700 space-y-1 ml-6">
            <li>• 주요 업무 상담은 사전 예약을 권장합니다</li>
            <li>• 점심시간(12:00-13:00)에는 대기 시간이 발생할 수 있습니다</li>
            <li>• 장학금 신청 관련 방문 시 필요 서류를 미리 준비해 주세요</li>
            <li>• 건물 출입 시 방문증 작성이 필요합니다</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
