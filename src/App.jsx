
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"
import Menu from "./components/Menu"
import Review from "./components/Review"
function App() {
  return (
    <>
      <Navbar />
      <main>
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
        <div id="review">
          <Review />
        </div>
      </main>
    </>
  )
}

export default App
