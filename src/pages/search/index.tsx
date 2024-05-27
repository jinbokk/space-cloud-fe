import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <div>SearchPage</div>
      <div>q : {q}</div>
    </div>
  );
}
