import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WOMENShoes from "./../../womenshoes.json";
import styles from "./WomenShoes.module.css";

const MenShoes = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = WOMENShoes;
      setShoeData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Women Sneakers</h1>

      <div className={styles.products}>
        {Object.keys(shoeData).map((keyName) => {
          const shoe = WOMENShoes[keyName];

          return (
            <Link
              to={`/womenshoes/${keyName}`}
              className={styles.card}
              key={keyName}
            >
              <div className={styles.image}>
                <img src={shoe.img} alt={shoe.name} />
              </div>
              <div className={styles.data}>
                <div className={styles.name}>
                  <h4>{shoe.name}</h4>
                </div>
                <div className={styles.price}>{shoe.price}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenShoes;
