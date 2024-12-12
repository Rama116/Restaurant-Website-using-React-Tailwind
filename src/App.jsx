import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Dishes from "./components/Dishes"
import About from "./components/About"
import Menu from "./components/Menu"

function App() {
  return (
    <Router>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="dishes">
        <Dishes />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
