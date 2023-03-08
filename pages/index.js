import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <h3>At Game Vault, we provide a wide variety of computer games for all types of gamers, from action-packed shooters to immersive role-playing games. We believe that everyone should have access to the latest and greatest games, which is why we offer our products at affordable prices.</h3>    
      <div className="w-full ">
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />

      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
      </div>
    </main>
  );
};

export default HomePage;
