import { css, styled } from 'twin.macro';

import ContentWrapper from '../layout/ContentWrapper';
import SocialLogin from '../pages/login/SocialLogin';

const baseOAuthUrl = 'https://spacestory.duckdns.org';
const naverOAuthUrl = `${baseOAuthUrl}/oauth2/authorization/naver`;
const googleOAuthUrl = `${baseOAuthUrl}/oauth2/authorization/google`;
const kakaoOAuthUrl = `${baseOAuthUrl}/oauth2/authorization/kakao`;

type Props = {
  title: string;
  contents: React.ReactNode;
};

export default function CommonLogin({ title, contents }: Props) {
  return (
    <CommonLoginContainer>
      <ContentWrapper>
        <LoginHeader>{title}</LoginHeader>
        <LoginFormContainer>
          <SocailLoginWrapper>
            <SocialLogin href={googleOAuthUrl} icon={<GoogleIcon />}>
              Google 로그인
            </SocialLogin>
            <SocialLogin href={naverOAuthUrl} icon={<NaverIcon />}>
              Naver 로그인
            </SocialLogin>
            <SocialLogin href={kakaoOAuthUrl} icon={<KakaoIcon />}>
              Kakao 로그인
            </SocialLogin>
          </SocailLoginWrapper>

          <Or>
            <div></div>
            <span>또는</span>
            <div></div>
          </Or>
          {contents}
        </LoginFormContainer>
      </ContentWrapper>
    </CommonLoginContainer>
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

const CommonLoginContainer = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  background-color: #f6f6f6;
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

const GoogleIcon = styled.span`
  ${commonIconStyle}
  background: url(/images/icons/login/login_google.png) no-repeat 0 0;
  background-size: auto 90%;
  margin-left: 5px;
  margin-right: 10px;
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  & div {
    flex: 1;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  & span {
    margin: 0 16px;
    font-size: 14px;
  }
`;
