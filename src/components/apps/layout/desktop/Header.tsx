import Image from 'next/image';
import Link from 'next/link';
import { styled, theme } from 'twin.macro';

import Search from '../../ui/Search';

export default function Header() {
  return (
    <HeaderContainer>
      <LeftMenu />
      <LogoWrapper href="/">
        <Logo src="/images/logo.svg" alt="logo" fill />
      </LogoWrapper>
      {/* TODO : Search 컴포넌트로 변경 필요 */}
      <Search />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${theme`variables.apps.pc-header-height`};
  padding: 24px 0;
  z-index: 10000;
  background-color: white;
`;

const LeftMenu = styled.div``;

const LogoWrapper = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 32px;
`;

const Logo = styled(Image)``;
