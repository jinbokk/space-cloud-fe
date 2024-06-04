import dynamic from 'next/dynamic';
import React from 'react';

import IsDesktop from './IsDesktop';
import { paddingProps } from './Main';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
};

export default function DesktopLayout({ children, ...props }: Props) {
  return (
    <IsDesktop>
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsDesktop>
  );
}
