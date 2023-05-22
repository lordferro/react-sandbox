import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from './Layout.module.css'
export const Layout = () => {
  return (
    <div className= {styles.wrapper}>
      <Navigation/>
      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
