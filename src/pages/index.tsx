import router from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    router.push('/main/?page=1&items_count=12&value=', undefined, {
      shallow: true,
    });
  }, []);

  return <></>;
};

export default Home;
