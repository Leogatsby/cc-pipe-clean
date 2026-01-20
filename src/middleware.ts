import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;

    const pathname = url.pathname;

    // 1. 루트(/) 접속 시 -> /home (기본값) Rewrite
    if (pathname === '/') {
        url.pathname = '/home';
        return NextResponse.rewrite(url);
    }

    // 2. 주요 페이지들(/Reviews, /Portfolio, /Info)이 루트(지역 접두사 없음)로 들어오면 -> /home/... 으로 Rewrite
    // 예: /Reviews -> /home/Reviews
    // 이렇게 하면 사용자 주소창은 /Reviews 유지, Next.js는 /home/Reviews 처리
    const commonPaths = ['/Reviews', '/Portfolio', '/Info'];
    // 경로가 정확히 일치하거나, 해당 경로로 시작하는 하위 경로인 경우 (예: /Reviews/slug-id)
    if (commonPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
        url.pathname = `/home${pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * 모든 경로에 대해 미들웨어를 실행하되,
         * 정적 파일(static), 이미지(_next/image), API 등은 제외
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
