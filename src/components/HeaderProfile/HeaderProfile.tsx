import { FC } from "react";
import styles from "./HeaderProfile.module.scss";
import { CiBookmark } from "react-icons/ci";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";

const HeaderProfile: FC = () => {
  return (
    <div className={styles.profile}>
      <button type="button" className={styles.button}>
        <CiBookmark className={styles.icon} />
      </button>
      <button type="button" className={styles.button}>
        <span className={styles.counter}>5</span>
        <CgWorkAlt className={styles.icon} />
      </button>
      <div className={styles.block}>
        <a href="/profile" className={styles.avatar}>
          <img
            src="https://i.artfile.ru/1920x1200_493309_[www.ArtFile.ru].jpg"
            alt="Аватарка"
            className={styles.image}
          />
        </a>
        <button type="button" className={styles.button}>
          <HiOutlineDotsVertical className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default HeaderProfile;
