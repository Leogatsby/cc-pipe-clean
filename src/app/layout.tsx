import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import 'material-icons/iconfont/material-icons.css';
import './globals.scss';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

// 기본 메타데이터 (fallback용) - 실제로는 [region]/layout.tsx가 덮어씀
export const metadata: Metadata = {
  title: '청정배관',
  description: '전문 하수구 뚫기 서비스',
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
