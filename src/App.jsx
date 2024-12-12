import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
