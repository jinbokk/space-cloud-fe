import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';

import { postAuthRefreshToken } from '@/apis/auth';

type Props = { children: React.ReactNode };

export default function PrivateRoute({ children }: Props): JSX.Element | null {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const isLoggedIn = Boolean(cookies.accessToken);
  const hasMounted = useRef(false); // 마운트 여부를 추적

  const setToken = async () => {
    const res = await postAuthRefreshToken({
      refreshToken: cookies.refreshToken,
    });

    removeCookie('accessToken');
    removeCookie('refreshToken');

    // TODO : 서버에서 만료시간 응답값 수정 필요
    // 서버에서 받은 UTC 시간 값
    const accessTokenExpiresUTC = new Date(res.accessTokenExpired);
    const refreshTokenExpiresUTC = new Date(res.refreshTokenExpired);

    // 12시간 추가
    accessTokenExpiresUTC.setHours(accessTokenExpiresUTC.getHours() + 12);
    refreshTokenExpiresUTC.setHours(refreshTokenExpiresUTC.getHours() + 12);
    // 로컬 시간으로 변환
    const accessTokenExpiresLocal = new Date(
      // eslint-disable-next-line prettier/prettier
      accessTokenExpiresUTC.getTime() -
        accessTokenExpiresUTC.getTimezoneOffset() * 60000,
    );
    const refreshTokenExpiresLocal = new Date(
      // eslint-disable-next-line prettier/prettier
      refreshTokenExpiresUTC.getTime() -
        refreshTokenExpiresUTC.getTimezoneOffset() * 60000,
    );

    setCookie('accessToken', res?.accessToken, {
      path: '/',
      expires: accessTokenExpiresLocal,
    });
    setCookie('refreshToken', res?.refreshToken, {
      path: '/',
      expires: refreshTokenExpiresLocal,
    });
  };

  // 쿠키에 accressToken 없으면 로그인 페이지로 이동
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true; // 첫 번째 마운트에서만 실행
      if (!isLoggedIn) {
        router.replace('/login');
      } else if (cookies.accessToken) {
        setToken();
      } else {
        router.replace('/login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
