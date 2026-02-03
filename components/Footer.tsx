import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h4 className="text-white font-bold text-lg mb-4">GlobalExport</h4>
                <p className="text-slate-500 text-sm">
                    대한민국 No.1 중고차 수출 플랫폼.<br/>
                    전 세계 40개국 바이어 네트워크 보유.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Service</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                    <li>내 차 견적 조회</li>
                    <li>수출 가능 모델</li>
                    <li>실시간 수출 시세</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                    <li>회사 소개</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <p className="text-slate-500 text-sm">
                    1544-0000<br/>
                    support@globalexport.com<br/>
                    인천광역시 연수구 송도동
                </p>
            </div>
        </div>
        <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
            © 2024 GlobalExport Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};