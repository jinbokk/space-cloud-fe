import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Home from '@/components/apps/pages/home/Home';

export default function HomePage() {
  return (
    <>
      <DesktopLayout>
        <Home />
      </DesktopLayout>

      <MobileLayout>
        <Home />
      </MobileLayout>
    </>
  );
}
