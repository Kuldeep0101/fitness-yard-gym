import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';
import Facilities from './pages/Facilities';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="classes" element={<Schedule />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="gallery" element={<Facilities />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy" element={<FAQ />} />
            <Route path="terms" element={<FAQ />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
