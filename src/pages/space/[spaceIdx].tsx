import { useRouter } from 'next/router';

export default function SpaceDetailPage() {
  const router = useRouter();
  const { spaceIdx } = router.query;
  return <div>IDX : {spaceIdx} Space Detail Page</div>;
}
