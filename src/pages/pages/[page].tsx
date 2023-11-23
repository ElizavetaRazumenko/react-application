import styles from '../../styles/page.module.css';

const MainPage = () => {
  //   const location = useLocation();
  //   const { page } = useParams();
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     navigate(`/pages/${page}`);
  //   }, []);

  //   const closeTheDetailsPage = () => {
  //     if (location.pathname.split('/').length === 5) {
  //       dispatch(setIsDetailsOpen(false));
  //       navigate(`/pages/${page}`);
  //     }
  //   };

  return (
    <div className={styles.main}></div>

    // <main className={s.main} onClick={closeTheDetailsPage} data-testid="main">
    //   <p className={s.title}>Art Institute of Chicago</p>
    //   <ErrorButton />
    //   <SearchBar />
    //   <PaginationBlock />
    //   <ItemRangeChanger />
    //   <SearchResults />
    // </main>
  );
};

export default MainPage;
