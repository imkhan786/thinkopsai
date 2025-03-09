import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-slate-900/80 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold text-white">
              ThinkOps<span className="text-blue-400">AI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-white/80 hover:text-primary transition-colors font-medium"
            >
              Login
            </a>
            <Button className="rounded-full px-6 bg-white text-slate-900 hover:bg-white/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-border/40">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <a
              href="#"
              className="block text-white hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-white/80 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="block text-white/80 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="block text-white/80 hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-border/40 flex flex-col space-y-4">
              <a
                href="#"
                className="block text-white/80 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
              <Button className="w-full rounded-full bg-white text-slate-900 hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
