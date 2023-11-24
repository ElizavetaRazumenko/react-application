import Artworks from '@/components/artworks/artworks';
import ErrorButton from '@/components/error-button/error-button';
import ItemChanger from '@/components/items-changer/item-changer';
import Pagination from '@/components/pagination/pagination';
import SearchBar from '@/components/search-bar/search-bar';
import styles from '../../styles/page.module.scss';

function Main() {
  return (
    <main className={styles.main} data-testid="main">
      <p className={styles.title}>Art Institute of Chicago</p>
      <ErrorButton />
      <SearchBar />
      <Pagination />
      <ItemChanger />
      <Artworks />
    </main>
  );
}
export default Main;
