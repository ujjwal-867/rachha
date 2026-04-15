import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componenta/header/NevBar"
import Homepage from "./componenta/pages/HomePage"
import Services from "./componenta/pages/Services"
import Gallery from "./componenta/pages/Gallery"
import About from "./componenta/pages/About"
import Contact from "./componenta/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
