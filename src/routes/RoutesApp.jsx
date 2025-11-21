import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import List from "../components/list/List";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
