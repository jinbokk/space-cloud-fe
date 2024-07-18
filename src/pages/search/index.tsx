import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Search from '@/components/apps/pages/search/Search';

export default function SearchPage() {
  return (
    <>
      <DesktopLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Search />
      </DesktopLayout>

      <MobileLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Search />
      </MobileLayout>
    </>
  );
}

SearchPage.authenticationRequired = false;
