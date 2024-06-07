import dynamic from 'next/dynamic';
import React from 'react';

import IsDesktop from './IsDesktop';
import { paddingProps } from './Main';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
  hideFooter?: boolean;
};

export default function DesktopLayout({
  children,
  hideFooter = false,
  ...props
}: Props) {
  return (
    <IsDesktop>
      <DefaultLayout {...props} hideFooter={hideFooter}>
        {children}
      </DefaultLayout>
    </IsDesktop>
  );
}
