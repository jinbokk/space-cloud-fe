import Link from 'next/link';
import { css, styled } from 'twin.macro';

import CheckboxForm from '../../form/CheckboxForm';
import InputForm from '../../form/InputForm';
import ContentWrapper from '../../layout/ContentWrapper';
import SocialLogin from './SocialLogin';

export default function Login() {
  return (
    <LoginContainer>
      <ContentWrapper>
        <LoginHeader>게스트 로그인</LoginHeader>
        <LoginFormContainer>
          <SocailLoginWrapper>
            <SocialLogin href="/" icon={<NaverIcon />}>
              네이버로 로그인
            </SocialLogin>
            <SocialLogin href="/" icon={<KakaoIcon />}>
              카카오로 로그인
            </SocialLogin>
            <SocialLogin href="/" icon={<AppleIcon />}>
              Apple로 로그인
            </SocialLogin>
          </SocailLoginWrapper>

          <Or>
            <div></div>
            <span>또는</span>
            <div></div>
          </Or>

          <InputFormWrapper>
            <InputForm type="email" placeholder="이메일" />
            <InputForm type="password" placeholder="비밀번호" />
          </InputFormWrapper>

          <ContentsWrapper>
            <CheckboxFormWrapper>
              <CheckboxForm id="remember" name="remember">
                {/* TODO : 로그인 기억하기 기능 추가 */}
                <Text>로그인 기억하기</Text>
              </CheckboxForm>
            </CheckboxFormWrapper>
            <Link href="/account/find-password">
              <Text>비밀번호 찾기</Text>
            </Link>
          </ContentsWrapper>
          <LoginButton>이메일로 로그인</LoginButton>

          <LoginFormFooter>
            <Text>
              아직 스페이스클라우드 회원이 아니신가요?
              <Link href="/account/register">회원가입</Link>
            </Text>
          </LoginFormFooter>
        </LoginFormContainer>
      </ContentWrapper>
    </LoginContainer>
  );
}

const commonIconStyle = css`
  display: inline-block;
  margin-right: 16px;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

const LoginContainer = styled.div`
  background-color: #f6f6f6;
  height: 100%;
  font-family: 'Pretendard';
`;

const LoginHeader = styled.h1`
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.5px;
  line-height: 1.2;
  padding: 40px 0 20px;
  padding-top: 120px;
  padding-bottom: 40px;
  font-size: 34px;
`;

const LoginFormContainer = styled.div`
  width: 648px;
  padding: 32px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
`;

const SocailLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NaverIcon = styled.span`
  ${commonIconStyle}
  background: url(/images/icons/login/login_naver_kakao.png) no-repeat 0 0;
  background-size: auto 100%;
`;

const KakaoIcon = styled.span`
  ${commonIconStyle}
  background: url(/images/icons/login/login_naver_kakao.png) no-repeat 0 0;
  background-size: auto 100%;
  background-position: 100% 0;
`;

const AppleIcon = styled.span`
  ${commonIconStyle}
  background: url(/images/icons/login/login_apple.svg) no-repeat 0 0;
  background-size: auto 100%;
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  & div {
    flex: 1;
    height: 1px;
    border-bottom: 1px solid lightgray;
    opacity: 0.5;
  }
  & span {
    margin: 0 16px;
    font-size: 14px;
  }
`;

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

const CheckboxFormWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  margin-top: 24px;
  background: #ffd014;
  font-size: 14px;
  line-height: 48px;
`;

const LoginFormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & p {
    opacity: 0.8;
  }
  & a {
    color: black;
    font-weight: 600;
    margin-left: 10px;
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
