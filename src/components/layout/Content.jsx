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
      <Route path="/useEffect" exact element={<useEffect />}></Route>
      <Route path="/useRef" exact element={<useRef />}></Route>
      <Route path="/useCallback" exact element={<useCallback />}></Route>
      <Route path="/useMemo" exact element={<useMemo />}></Route>
      <Route path="/useContext" exact element={<useContext />}></Route>
      <Route path="/useReducer" exact element={<useReducer />}></Route>
      <Route path="/useCustom" exact element={<useCustom />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
