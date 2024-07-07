////////////////////////////////////////////////////////////////
// Auth 토큰 재발행 API
////////////////////////////////////////////////////////////////
export interface AuthRefreshTokenParamsType {
  refreshToken: string;
}
export interface AuthRefreshTokenResultType {
  accessToken: string;
  accessTokenExpired: string;
  refreshToken: string;
  refreshTokenExpired: string;
}

////////////////////////////////////////////////////////////////
// Auth 회원가입 API
////////////////////////////////////////////////////////////////
export interface AuthSignupParamsType {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  captchaToken: string;
}
/**
 * Auth 회원가입 응답 타입
 * - 204	로그인 성공
 * - P1 401, 파라미터가 비어 있거나 NULL인 경우
 * - U4 401, 이메일이 중복된 경우
 * - U5 401, 패스워드가 일치하지 않는 경우
 * - U6 401, 패스워드가 4자리 미만인 경우
 */
export interface AuthSignupResultType {
  code: string;
  msg: string;
}

////////////////////////////////////////////////////////////////
// Auth 로그인 API
////////////////////////////////////////////////////////////////
export interface AuthLoginParamsType {
  email: string;
  password: string;
}
export interface AuthLoginResultType {
  accessToken: string;
  accessTokenExpired: string;
  refreshToken: string;
  refreshTokenExpired: string;
}

////////////////////////////////////////////////////////////////
// Auth 이메일 인증코드 발급 API
////////////////////////////////////////////////////////////////
export interface AuthEmailVerificationParamsType {
  email: string;
}
export interface AuthEmailVerificationResultType {
  code: string;
  msg: string;
}

////////////////////////////////////////////////////////////////
// Auth 이메일 인증코드 인증 API
////////////////////////////////////////////////////////////////
export interface AuthEmailVerificationVerifyParamsType {
  email: string;
  code: 'string';
}
export interface AuthEmailVerificationVerifyResultType {
  code: string;
  msg: string;
}
