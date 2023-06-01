import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import IconSandBox from "./components/Icon/IconSandBox";

const Home = lazy(() => import("./components/Home"));
const ButtonSandbox = lazy(() => import("./components/Button/ButtonSandbox"));
const ButtonGroupSandbox = lazy(() =>
  import("./components/ButtonGroup/ButtonGroupSandBox")
);

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonSandbox />} />
        <Route path="button-group" element={<ButtonGroupSandbox />} />
        <Route path="icon" element={<IconSandBox />} />
      </Route>
    </Routes>
  );
}

export default App;
