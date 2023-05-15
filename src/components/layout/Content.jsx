import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import UseState from "../../views/examples/UseState";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseCallback from "../../views/examples/UseCallback";
import UseMemo from "../../views/examples/UseMemo";
import UseContext from "../../views/examples/UseContext";
import UseReducer from "../../views/examples/UseReducer";
import UseCustom from "../../views/examples/UseCustom";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/useState" exact element={<UseState />}></Route>
      <Route path="/UseEffect" exact element={<UseEffect />}></Route>
      <Route path="/UseRef" exact element={<UseRef />}></Route>
      <Route path="/UseCallback" exact element={<UseCallback />}></Route>
      <Route path="/UseMemo" exact element={<UseMemo />}></Route>
      <Route path="/UseContext" exact element={<UseContext />}></Route>
      <Route path="/UseReducer" exact element={<UseReducer/>}></Route>
      <Route path="/UseCustom" exact element={<UseCustom />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
