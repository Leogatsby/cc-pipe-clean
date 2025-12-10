import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';
import './globals.scss';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '청정배관 - 전문 하수구 뚫기 서비스',
  description: '관악구 변기막힘 , 하수구 막힘 , 하수구 뚫기 ,확실하고 깨끗한 하수구 뚫기, 배관 청소 전문 서비스. 24시간 상담 가능.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>{children}</body>
    </html>
  );
}
