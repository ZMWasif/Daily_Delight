import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./pages/Shared/Navbar";
import Login from "./pages/Login/Login";
import MenuItem from "./pages/home/MenuItem/MenuItem";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/menu" element={<MenuItem></MenuItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
