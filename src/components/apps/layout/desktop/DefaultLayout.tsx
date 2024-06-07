import dynamic from 'next/dynamic';
import React from 'react';
import { styled, theme } from 'twin.macro';

import Main, { paddingProps } from './Main';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
  hideFooter?: boolean;
};

export default function DefaultLayout({
  padding = { top: '0', bottom: '0' },
  children,
  hideFooter = false,
}: Props) {
  return (
    <LayoutContainer>
      <Header />
      <Main padding={padding}>{children}</Main>
      {!hideFooter && <Footer />}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${theme`variables.apps.pc-header-height`};
`;
