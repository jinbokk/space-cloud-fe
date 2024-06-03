import dynamic from 'next/dynamic';
import React from 'react';

import IsMobile from './IsMobile';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));
const Header = dynamic(() => import('./Header'));

type Props = {
  hideFooter?: boolean;
  children: React.ReactNode;
};

export default function MobileLayout({ children, ...props }: Props) {
  return (
    <IsMobile>
      <Header />
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsMobile>
  );
}
