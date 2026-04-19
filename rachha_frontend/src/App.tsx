import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componenta/header/NevBar"
import Footer from "./componenta/footer/Footer"
import Homepage from "./componenta/pages/HomePage"
import Services from "./componenta/pages/Services"
import Gallery from "./componenta/pages/Gallery"
import About from "./componenta/pages/About"
import Contact from "./componenta/pages/Contact"
import BirthdayCelebration from "./componenta/pages/services/BirthdayCelebration"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/birthday-celebration" element={<BirthdayCelebration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
