import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-light tracking-wider mb-6">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          
            <div>
              <h3 className="text-sm font-light tracking-wider mb-6">ABOUT</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/craftsmanship" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-light tracking-wider mb-6">SUPPORT</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          
          <div>
            <h3 className="text-sm font-light tracking-wider mb-6">FOLLOW</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-sm font-light text-muted-foreground text-center">
            © 2025 MINIMAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
