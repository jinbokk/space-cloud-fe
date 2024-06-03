import dynamic from 'next/dynamic';
import React from 'react';

import IsDesktop from './IsDesktop';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));
const Header = dynamic(() => import('./Header'));

type Props = {
  hideMenu?: boolean;
  children: React.ReactNode;
};

export default function DesktopLayout({ children, ...props }: Props) {
  return (
    <IsDesktop>
      <Header />
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsDesktop>
  );
}
