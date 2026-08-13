import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { MessageCircle } from "lucide-react"
import Navbar from "./componenta/header/NevBar"
import Footer from "./componenta/footer/Footer"
import Homepage from "./componenta/pages/HomePage"
import Services from "./componenta/pages/Services"
import Gallery from "./componenta/pages/Gallery"
import About from "./componenta/pages/About"
import Contact from "./componenta/pages/Contact"
import EventPage from "./componenta/pages/services/EventPage"
import Button from "./componenta/ui/button/Button"
import FloatingSocialBar from "./componenta/ui/social/FloatingSocialBar"
import { EVENTS } from "./data/eventData"

function AppContent() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        {EVENTS.map((event) => (
          <Route
            key={event.slug}
            path={`/services/${event.slug}`}
            element={<EventPage eventSlug={event.slug} />}
          />
        ))}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <div className="hidden lg:block">
        <FloatingSocialBar />
      </div>

      <div className="fixed bottom-6 right-6 z-50 glow-pulse hidden lg:block">
        <Button
          text="Request Quote"
          variant="primary"
          startIcon={<MessageCircle className="w-5 h-5" />}
          onClick={() => navigate("/contact")}
        />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
