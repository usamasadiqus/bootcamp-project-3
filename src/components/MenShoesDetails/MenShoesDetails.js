import { useParams } from "react-router-dom";
import MENShoes from "./../../menshoes.json";
import styles from "./MenShoesDetails.module.css";

const MenShoesDetails = () => {
  const { id } = useParams();
  const shoe = MENShoes[id];

  return (
    <div className={styles.container}>
      <h2>Men Shoe Details</h2>
      <div className={styles.product_details}>
        <div className={styles.product_image}>
          <img src={shoe.img} alt="Men Shoe Image" />
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

export default MenShoesDetails;
