import {  Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home";

import ButtonSandbox from "./components/Button/ButtonSandbox";
import ButtonGroupSandbox from "./components/ButtonGroup/ButtonGroupSandBox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonSandbox />} />
        <Route path="button-group" element={<ButtonGroupSandbox />} />
      </Route>
    </Routes>
  );
}

export default App;
