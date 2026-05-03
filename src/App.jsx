import { BrowserRouter, Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"

import AboutPage from "./Pages/AboutPage"

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}