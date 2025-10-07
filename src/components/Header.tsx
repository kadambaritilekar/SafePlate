import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Adulterants', path: '/adulterants' },
    { name: 'Health Risks', path: '/health-risks' },
    { name: 'Prevention', path: '/prevention' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#629460] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <ShieldCheck className="w-8 h-8" />
            <span className="font-['Poppins',sans-serif] text-xl">Safe Plate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-[#aceda1] relative ${
                  isActive(item.path) ? 'text-[#aceda1]' : ''
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#aceda1]"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-[#629460] rounded-lg transition-all hover:bg-[#aceda1] hover:text-[#243119] hover:scale-105"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 transition-transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-[#96be8c]">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors hover:text-[#aceda1] ${
                      isActive(item.path) ? 'text-[#aceda1]' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 bg-white text-[#629460] rounded-lg text-center transition-all hover:bg-[#aceda1] hover:text-[#243119]"
                >
                  Login
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
