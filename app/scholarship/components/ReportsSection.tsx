'use client';

import { FileText, Download } from 'lucide-react';
import { annualReports } from '../data';

export default function ReportsSection() {
    return (
        <section className="py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">연차 보고서</h3>
                    <p className="text-gray-500">재단의 활동과 성과를 투명하게 공개합니다.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100">
                {annualReports.map((report) => (
                    <div key={report.year} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="bg-gray-100 p-3 rounded-xl flex-shrink-0">
                                <FileText className="text-gray-600" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">{report.title}</h4>
                                <div className="text-sm text-gray-500 flex gap-3 mt-1">
                                    <span>{report.publishedDate} 발행</span>
                                    <span>•</span>
                                    <span>{report.pageCount} Pages</span>
                                    <span>•</span>
                                    <span>{report.fileSize}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
                            <Download size={18} />
                            다운로드
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
