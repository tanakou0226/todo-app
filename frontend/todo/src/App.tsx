import { useRef } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./components/home"
import Detail from "./components/detail"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;