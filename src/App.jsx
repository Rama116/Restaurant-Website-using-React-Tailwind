
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"
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
      </main>
    </>
  )
}

export default App
