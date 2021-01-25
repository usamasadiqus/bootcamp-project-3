import { Link } from "react-router-dom";
import MenImage from './../../images/men.jpg'
import WomenImage from './../../images/women.jpg'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to my shoe store</h1>

      <div className={styles.cards}>
        <Link to="/menshoes">
          <div className={styles.men}>
            <img src={MenImage} alt="Men Shoe" />
          </div>
        </Link>
        <Link to="/womenshoes">
          <div className={styles.women}>
            <img src={WomenImage} alt="Women Shoe" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
