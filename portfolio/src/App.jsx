import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects" // 👈 AQUI
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects /> 
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App