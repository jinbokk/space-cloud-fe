import dynamic from 'next/dynamic';
import React from 'react';

import IsMobile from './IsMobile';
import { paddingProps } from './Main';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
  hideFooter?: boolean;
};

export default function MobileLayout({
  children,
  hideFooter,
  ...props
}: Props) {
  return (
    <IsMobile>
      <DefaultLayout {...props} hideFooter={hideFooter}>
        {children}
      </DefaultLayout>
    </IsMobile>
  );
}
