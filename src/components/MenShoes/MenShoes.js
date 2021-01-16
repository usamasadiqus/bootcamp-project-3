import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MENShoes from "./../../menshoes.json";
import styles from "./MenShoes.module.css";

const MenShoes = () => {
  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = MENShoes;
      setShoeData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Men Sneakers</h1>

      <div className={styles.products}>
        {Object.keys(shoeData).map((keyName) => {
          const shoe = MENShoes[keyName];

          return (
            <Link
              to={`/menshoes/${keyName}`}
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
