import { FC } from "react";
import styles from "./Logo.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Логотип Books" className={styles.image} />
    </Link>
  );
};

export default Logo;
