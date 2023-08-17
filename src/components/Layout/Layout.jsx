import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <div style={{ padding: 15 }}>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
