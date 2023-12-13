import { FC } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { TbBooks, TbHeadphones } from "react-icons/tb";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import { IMenu } from "../../interfaces/interface";

const headerMenu: IMenu[] = [
  {
    id: 1,
    icon: TbBooks,
    title: "Books",
    link: "/books",
  },
  {
    id: 2,
    icon: TbHeadphones,
    title: "AudioBooks",
    link: "/audio-books",
  },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation menu={headerMenu} />
      <HeaderProfile />
    </header>
  );
};

export default Header;
