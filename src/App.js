import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const ButtonSandbox = lazy(() => import("./components/Button/ButtonSandbox"));
const ButtonGroupSandbox = lazy(() =>
  import("./components/ButtonGroup/ButtonGroupSandBox")
);
const IconSandBox = lazy(() => import("./components/Icon/IconSandBox"));
const ImageSandBox = lazy(() => import("./components/image/ImageSandbox"));
const ChipSandbox = lazy(() => import("./components/Chip/Sandbox"));
const BadgeSandbox = lazy(() => import("./components/Badge/Sandbox"));
const ListGroupSandbox = lazy(() =>
  import("./components/ListGroup/Sandbox.jsx")
);
const InputSandbox = lazy(() => import("./components/Input/Sandbox"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonSandbox />} />
        <Route path="button-group" element={<ButtonGroupSandbox />} />
        <Route path="icon" element={<IconSandBox />} />
        <Route path="image" element={<ImageSandBox />} />
        <Route path="chip" element={<ChipSandbox />} />
        <Route path="badge" element={<BadgeSandbox />} />
        <Route path="list-group" element={<ListGroupSandbox />} />
        <Route path="input" element={<InputSandbox />} />
      </Route>
    </Routes>
  );
}

export default App;
