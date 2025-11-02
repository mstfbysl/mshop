import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ProductCard from "@/components/ProductCard";
import vaseImage from "@/assets/product-vase.jpg";
import sphereImage from "@/assets/product-sphere.jpg";
import trayImage from "@/assets/product-tray.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import standImage from "@/assets/product-stand.jpg";
import planterImage from "@/assets/product-planter.jpg";
import cushionImage from "@/assets/product-cushion.jpg";
import mirrorImage from "@/assets/product-mirror.jpg";

const products = [
  { id: 1, name: "Ceramic Vase", price: 120, image: vaseImage },
  { id: 2, name: "Glass Sphere", price: 85, image: sphereImage },
  { id: 3, name: "Wooden Tray", price: 95, image: trayImage },
  { id: 4, name: "Stone Bowl", price: 140, image: bowlImage },
  { id: 5, name: "Metal Stand", price: 110, image: standImage },
  { id: 6, name: "Concrete Planter", price: 75, image: planterImage },
  { id: 7, name: "Linen Cushion", price: 65, image: cushionImage },
  { id: 8, name: "Oak Mirror", price: 180, image: mirrorImage },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-light mb-16 tracking-wider">ALL PRODUCTS</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Products;
