import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Home } from './pages/Home';
import { Adulterants } from './pages/Adulterants';
import { HealthRisks } from './pages/HealthRisks';
import { Prevention } from './pages/Prevention';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#c9f2c7] text-[#243119]">
        <CustomCursor />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adulterants" element={<Adulterants />} />
            <Route path="/health-risks" element={<HealthRisks />} />
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
