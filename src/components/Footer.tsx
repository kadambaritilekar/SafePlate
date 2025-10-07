import { Link } from 'react-router-dom';
import { ShieldCheck, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#629460] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-8 h-8" />
              <span className="font-['Poppins',sans-serif] text-xl">Safe Plate</span>
            </Link>
            <p className="text-sm text-white/80">
              Ensuring what you eat is safe and pure. Your trusted source for food safety information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#aceda1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/adulterants" className="text-sm hover:text-[#aceda1] transition-colors">
                  Common Adulterants
                </Link>
              </li>
              <li>
                <Link to="/health-risks" className="text-sm hover:text-[#aceda1] transition-colors">
                  Health Risks
                </Link>
              </li>
              <li>
                <Link to="/prevention" className="text-sm hover:text-[#aceda1] transition-colors">
                  Prevention Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-[#aceda1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#aceda1] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm hover:text-[#aceda1] transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm hover:text-[#aceda1] transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aceda1] hover:text-[#243119] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aceda1] hover:text-[#243119] transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aceda1] hover:text-[#243119] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#aceda1] hover:text-[#243119] transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2025 Safe Plate. All rights reserved. Empowering consumers through food safety awareness.</p>
        </div>
      </div>
    </footer>
  );
}
