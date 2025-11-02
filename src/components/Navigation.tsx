import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/monoshop-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];
  
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="hover:opacity-60 transition-opacity duration-300"
          >
            <img 
              src={logo} 
              alt="Monoshop" 
              className="h-8"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`text-sm font-light tracking-wider hover:opacity-60 transition-opacity duration-300 ${
                  isActive(link.to) ? "opacity-100" : "opacity-60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-light tracking-wider hover:opacity-60 transition-opacity duration-300 ${
                      isActive(link.to) ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
