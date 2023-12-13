import { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { INavigation, IMenu } from "../../interfaces/interface";

const Navigation: FC<INavigation> = ({ menu }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {menu.map((item: IMenu) => (
          <li className={styles.item} key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <item.icon className={styles.icon} />
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
