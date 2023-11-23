import { useParams } from 'next/navigation';
import Artworks from '../../../components/artworks/artworks';
import ErrorButton from '../../../components/error-button/error-button';
import ItemChanger from '../../../components/items-changer/item-changer';
import Pagination from '../../../components/pagination/pagination';
import SearchBar from '../../../components/search-bar/search-bar';
import styles from '../../styles/page.module.css';
import router from 'next/router';

const MainPage = () => {
  //   const location = useLocation();
  //   const { page } = useParams();
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     navigate(`/pages/${page}`);
  //   }, []);

  const { page, id } = useParams();

  const closeTheDetailsPage = () => {
    if (id) {
      router.push(`/page/${page}`);
    }
  };

  return (
    <main
      className={styles.main}
      onClick={closeTheDetailsPage}
      data-testid="main"
    >
      <p className={styles.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar />
      <Pagination />
      <ItemChanger />
      <Artworks />
    </main>
  );
};

export default MainPage;
