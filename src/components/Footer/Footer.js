import { NavLink } from "react-router-dom";
import Logo from "./../../images/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.logo_and_title}>
        <img src={Logo} alt="Logo" />
        <h3>Shoe Store</h3>
      </NavLink>
      <p>&copy; copyright {new Date().getFullYear()}. All rights reserved</p>
    </div>
  );
}
