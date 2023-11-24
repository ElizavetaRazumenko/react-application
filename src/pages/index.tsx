import router from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    router.push('/main/?page=1&items_count=12&value=', undefined, {
      shallow: true,
    });
  }, []);

  return <></>;
}
