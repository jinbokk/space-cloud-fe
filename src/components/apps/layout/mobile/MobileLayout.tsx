import dynamic from 'next/dynamic';
import React from 'react';

import IsMobile from './IsMobile';
import { paddingProps } from './Main';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
};

export default function MobileLayout({ children, ...props }: Props) {
  return (
    <IsMobile>
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsMobile>
  );
}
