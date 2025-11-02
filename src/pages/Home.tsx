import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { Sparkles, Hammer, Package } from "lucide-react";
import heroImage from "@/assets/hero-minimal.jpg";
import vaseImage from "@/assets/product-vase.jpg";
import sphereImage from "@/assets/product-sphere.jpg";
import trayImage from "@/assets/product-tray.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import qualityImage from "@/assets/quality-craftsmanship.jpg";
import materialsImage from "@/assets/natural-materials.jpg";

const featuredProducts = [
  { id: 1, name: "Ceramic Vase", price: 120, image: vaseImage },
  { id: 2, name: "Glass Sphere", price: 85, image: sphereImage },
  { id: 3, name: "Wooden Tray", price: 95, image: trayImage },
  { id: 4, name: "Stone Bowl", price: 140, image: bowlImage },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight leading-tight">
              Curated Design Objects
            </h1>
            <p className="text-lg font-light text-muted-foreground mb-8 leading-relaxed">
              Discover our collection of minimalist design pieces, carefully selected for modern living.
            </p>
            <a 
              href="/products"
              className="inline-block border border-primary px-8 py-3 text-sm font-light tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              EXPLORE COLLECTION
            </a>
          </div>
          <div className="aspect-square bg-secondary">
            <img 
              src={heroImage} 
              alt="Minimalist design objects"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-12 tracking-wider">FEATURED</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 tracking-wider">OUR PHILOSOPHY</h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed">
            We believe that less is more. Each piece in our collection is thoughtfully selected 
            for its timeless design, exceptional quality, and ability to enhance your space through 
            the principles of minimalism.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-16 tracking-wider text-center">OUR PROCESS</h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sparkles size={32} strokeWidth={1} className="text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wider">01. SELECT</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              We carefully curate each object, choosing only pieces that embody minimalist principles 
              and exceptional craftsmanship.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Hammer size={32} strokeWidth={1} className="text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wider">02. CRAFT</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Working with skilled artisans who share our values, each piece is made with care 
              using traditional techniques.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Package size={32} strokeWidth={1} className="text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wider">03. DELIVER</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Your order is carefully packaged and delivered with attention to sustainability 
              and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-secondary overflow-hidden">
            <img 
              src={qualityImage} 
              alt="Quality craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light mb-6 tracking-wider">TIMELESS QUALITY</h2>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-6">
              Every piece is designed to last, crafted from the finest materials by artisans who 
              have honed their craft over decades. We believe in creating objects that transcend 
              trends and become cherished parts of your daily life.
            </p>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              Our commitment to quality means selecting natural materials, traditional techniques, 
              and designs that age beautifully over time.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-light mb-6 tracking-wider">NATURAL MATERIALS</h2>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-6">
              We work exclusively with natural materials—ceramic, wood, stone, linen, and glass. 
              Each material is chosen for its inherent beauty, durability, and environmental credentials.
            </p>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              From sustainably sourced oak to hand-carved stone, every material tells a story 
              of craftsmanship and care for our planet.
            </p>
          </div>
          <div className="aspect-[4/3] bg-secondary order-1 md:order-2 overflow-hidden">
            <img 
              src={materialsImage} 
              alt="Natural materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wider">STAY UPDATED</h2>
          <p className="text-sm font-light text-muted-foreground mb-8">
            Subscribe to receive updates on new arrivals and exclusive offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-border bg-background text-sm font-light focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button 
              type="submit"
              className="px-8 py-3 border border-primary bg-primary text-primary-foreground text-sm font-light tracking-wider hover:bg-background hover:text-foreground transition-all duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Home;
