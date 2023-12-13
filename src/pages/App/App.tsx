import { FC } from "react";
import Header from "../../components/Header/Header";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
