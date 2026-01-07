import { Building2, Phone, Printer } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Foundation Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">재단법인 신주장학재단</h3>
                        <p className="text-sm mb-2">Shinjoo Scholarship Foundation</p>

                        <div className="space-y-2 mt-4">
                            <div className="flex items-start space-x-2">
                                <Building2 size={18} className="mt-1 flex-shrink-0" />
                                <p className="text-sm">
                                    서울특별시 강남구 언주로 120 (도곡동, 인스토피아) 1012호 (우)06295
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone size={18} className="flex-shrink-0" />
                                <p className="text-sm">02-3463-5656</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Printer size={18} className="flex-shrink-0" />
                                <p className="text-sm">02-3463-5657</p>
                            </div>
                        </div>
                    </div>

                    {/* External Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">관련 링크</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href="https://www.publicbenefit.go.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:text-white transition-colors"
                            >
                                공익법인 재무
                            </a>
                            <a
                                href="https://www.seoulwelfare.or.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:text-white transition-colors"
                            >
                                서울복지사회적
                            </a>
                            <a
                                href="https://www.nts.go.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:text-white transition-colors"
                            >
                                국세청
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm">
                        © Copyright 2022 신주장학재단 All Rights Reserved.
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                        Designed by Wixweb
                    </p>
                </div>
            </div>
        </footer>
    );
}
