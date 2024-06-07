import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Login from '@/components/apps/pages/login/Login';

export default function HomePage() {
  return (
    <>
      <DesktopLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Login />
      </DesktopLayout>

      <MobileLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Login />
      </MobileLayout>
    </>
  );
}
