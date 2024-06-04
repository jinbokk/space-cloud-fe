import dynamic from 'next/dynamic';
import React from 'react';
import { styled, theme } from 'twin.macro';

import Main from './Main';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

// TODO: 페이지별로 파악해서 타입 추가하기
export type paddingProps = {
  top: '0';
  bottom: '0';
};

type Props = {
  padding?: paddingProps;
  hideMenu?: boolean;
  hideFooter?: boolean;
  headerSubComponent?: JSX.Element | null;
  children: React.ReactNode;
};

export default function DefaultLayout({
  padding = { top: '0', bottom: '0' },
  children,
}: Props) {
  return (
    <LayoutContainer>
      <Header />
      <Main padding={padding}>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: ${theme`variables.apps.pc-header-height`};
`;
