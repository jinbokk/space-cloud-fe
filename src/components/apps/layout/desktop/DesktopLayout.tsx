import dynamic from 'next/dynamic';
import React from 'react';

import IsDesktop from './IsDesktop';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

type Props = {
  hideMenu?: boolean;
  children: React.ReactNode;
};

export default function DesktopLayout({ children, ...props }: Props) {
  return (
    <IsDesktop>
      <DefaultLayout {...props}>{children}</DefaultLayout>
    </IsDesktop>
  );
}
