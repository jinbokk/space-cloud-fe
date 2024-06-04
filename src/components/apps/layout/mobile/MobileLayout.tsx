import dynamic from 'next/dynamic';
import React from 'react';

import IsMobile from './IsMobile';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  hideFooter?: boolean;
  children: React.ReactNode;
};

export default function MobileLayout({ children, ...props }: Props) {
  return (
    <IsMobile>
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsMobile>
  );
}
