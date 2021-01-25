import { useParams } from "react-router-dom";
import WOMENShoes from "./../../womenshoes.json";
import styles from "./WomenShoesDetails.module.css";

const WomenShoesDetails = () => {
  const { id } = useParams();
  const shoe = WOMENShoes[id];

  return (
    <div className={styles.container}>
      <h2>Women Shoe Details</h2>
      <div className={styles.product_details}>
        <div className={styles.product_image}>
          <img src={shoe.img} alt={`${shoe.name} Image`} />
        </div>
        <div className={styles.name_price_and_button}>
          <h2 className={styles.product_name}>{shoe.name}</h2>
          <h3>Price: {shoe.price}</h3>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default WomenShoesDetails;
