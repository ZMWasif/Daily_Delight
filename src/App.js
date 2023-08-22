import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./pages/Shared/Navbar";
import Login from "./pages/Login/Login";
import MenuItem from "./pages/home/MenuItem/MenuItem";
import Menu from "./pages/Menu/Menu";
import Footer from "./pages/Shared/Footer";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import HappyFood from "./pages/Menu/HappyFood";
import DessertMenu from "./pages/Menu/DessertMenu";
import KidsMenu from "./pages/Menu/KidsMenu";
import PizzaMenu from "./pages/Menu/PizzaMenu";
import SignUp from "./pages/SignUp/SignUp";
import RequireAuth from "./pages/home/RequireAuth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyBookings from "./pages/Dashboard/MyBookings";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route
          path="/book"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route index element={<MyBookings></MyBookings>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/happyfood" element={<HappyFood></HappyFood>}></Route>
        <Route path="/desserts" element={<DessertMenu></DessertMenu>}></Route>
        <Route path="/kidsmenu" element={<KidsMenu></KidsMenu>}></Route>
        <Route path="/pizzas" element={<PizzaMenu></PizzaMenu>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
