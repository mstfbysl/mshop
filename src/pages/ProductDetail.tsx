import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import { useState } from "react";
import vaseImage from "@/assets/product-vase.jpg";
import sphereImage from "@/assets/product-sphere.jpg";
import trayImage from "@/assets/product-tray.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import standImage from "@/assets/product-stand.jpg";
import planterImage from "@/assets/product-planter.jpg";
import cushionImage from "@/assets/product-cushion.jpg";
import mirrorImage from "@/assets/product-mirror.jpg";

const productData: Record<number, { 
  name: string; 
  price: number; 
  description: string; 
  details: string[]; 
  image: string;
  technicalDetails: { label: string; value: string }[];
  reviews: { name: string; rating: number; comment: string; date: string }[];
}> = {
  1: {
    name: "Ceramic Vase",
    price: 120,
    description: "A handcrafted ceramic vase with a minimalist design that embodies the essence of contemporary elegance. Each piece is meticulously shaped by skilled artisans, resulting in subtle variations that make every vase truly unique. The smooth matte finish creates a tactile experience that invites touch, while the carefully proportioned silhouette ensures it becomes a focal point in any space. Perfect for displaying fresh flowers or as a standalone sculptural piece that speaks to refined taste and appreciation for authentic craftsmanship.",
    details: ["Handmade ceramic", "Height: 25cm", "Diameter: 15cm", "Matte finish"],
    image: vaseImage,
    technicalDetails: [
      { label: "Material", value: "High-fired stoneware ceramic" },
      { label: "Dimensions", value: "H: 25cm x D: 15cm" },
      { label: "Weight", value: "850g" },
      { label: "Finish", value: "Matte glazed exterior, unglazed base" },
      { label: "Care", value: "Hand wash recommended, not dishwasher safe" },
      { label: "Origin", value: "Handcrafted in Japan" }
    ],
    reviews: [
      { name: "Sarah M.", rating: 5, comment: "Absolutely beautiful vase. The quality is exceptional and it looks stunning in my living room.", date: "2025-01-15" },
      { name: "John D.", rating: 5, comment: "Perfect minimalist design. Exactly what I was looking for.", date: "2025-01-10" },
      { name: "Emma R.", rating: 4, comment: "Love the matte finish. Very elegant piece.", date: "2025-01-05" }
    ]
  },
  2: {
    name: "Glass Sphere",
    price: 85,
    description: "A contemporary glass sphere that captures light and imagination in equal measure. Hand-blown by master glassmakers using traditional techniques passed down through generations, each sphere displays subtle imperfections and organic variations that celebrate the human touch behind its creation. The crystal-clear glass reveals tiny air bubbles and natural flow patterns within, transforming ordinary light into dancing refractions throughout your space. Complete with an elegant display base, this piece serves as both a meditation on form and a testament to timeless artisanal skill.",
    details: ["Hand-blown glass", "Diameter: 12cm", "Clear finish", "Display base included"],
    image: sphereImage,
    technicalDetails: [
      { label: "Material", value: "Hand-blown borosilicate glass" },
      { label: "Dimensions", value: "Diameter: 12cm" },
      { label: "Weight", value: "320g" },
      { label: "Finish", value: "Clear glass with natural variations" },
      { label: "Care", value: "Wipe clean with soft cloth" },
      { label: "Origin", value: "Handcrafted in Sweden" }
    ],
    reviews: [
      { name: "Michael P.", rating: 5, comment: "Beautiful decorative piece. The imperfections make it unique.", date: "2025-01-18" },
      { name: "Lisa K.", rating: 5, comment: "Elegant and timeless. Highly recommend.", date: "2025-01-12" }
    ]
  },
  3: {
    name: "Wooden Tray",
    price: 95,
    description: "Crafted from premium European oak, this solid wood tray showcases the raw beauty of natural grain patterns that tell the story of years of growth. Each piece is carefully selected for its distinctive character, then expertly shaped and finished with food-safe natural oils that enhance the wood's inherent warmth and depth. The substantial weight and smooth edges speak to quality construction, while the generous dimensions make it equally suited for elegant breakfast service, artful object display, or as a sophisticated catchall for daily essentials. With proper care, this tray will develop a rich patina that only improves with age.",
    details: ["Solid oak wood", "40cm x 25cm", "Natural oil finish", "Food safe"],
    image: trayImage,
    technicalDetails: [
      { label: "Material", value: "Solid European oak" },
      { label: "Dimensions", value: "L: 40cm x W: 25cm x H: 2cm" },
      { label: "Weight", value: "680g" },
      { label: "Finish", value: "Natural oil treatment" },
      { label: "Care", value: "Wipe clean, re-oil annually" },
      { label: "Origin", value: "Handcrafted in Denmark" }
    ],
    reviews: [
      { name: "Anna L.", rating: 5, comment: "Beautiful grain pattern. Perfect size for breakfast in bed.", date: "2025-01-20" },
      { name: "David H.", rating: 5, comment: "Excellent craftsmanship. Very sturdy.", date: "2025-01-14" }
    ]
  },
  4: {
    name: "Stone Bowl",
    price: 140,
    description: "Hand-carved from solid limestone, this bowl represents the meeting point of ancient geological processes and contemporary design sensibility. Each piece bears unique fossil impressions, mineral veining, and natural color variations formed over millions of years, ensuring no two bowls are ever identical. The hand-polished surface reveals the stone's inherent beauty while maintaining a tactile quality that grounds any space. Substantial yet refined, this bowl serves as a powerful reminder of nature's artistry, whether displayed empty as a sculptural statement or filled with carefully curated objects.",
    details: ["Natural stone", "Diameter: 20cm", "Polished finish", "Each piece unique"],
    image: bowlImage,
    technicalDetails: [
      { label: "Material", value: "Natural limestone" },
      { label: "Dimensions", value: "Diameter: 20cm x H: 8cm" },
      { label: "Weight", value: "1.2kg" },
      { label: "Finish", value: "Hand-polished surface" },
      { label: "Care", value: "Wipe with damp cloth, seal periodically" },
      { label: "Origin", value: "Hand-carved in Portugal" }
    ],
    reviews: [
      { name: "Rachel T.", rating: 5, comment: "Stunning piece. The natural stone patterns are gorgeous.", date: "2025-01-16" },
      { name: "Mark W.", rating: 4, comment: "Heavy and solid. Exactly as described.", date: "2025-01-08" }
    ]
  },
  5: {
    name: "Metal Stand",
    price: 110,
    description: "An exercise in essential form, this minimalist stand elevates objects to art through pure geometric precision. Fabricated from cold-rolled steel and finished with a durable powder-coat in deep matte black, the design strips away all excess to reveal only what is necessary. The carefully calculated proportions and weighted base ensure absolute stability, while the clean lines complement rather than compete with whatever you choose to display. Perfect for showcasing small sculptures, ceramics, or botanical arrangements, this stand transforms any object into a gallery-worthy presentation.",
    details: ["Powder-coated steel", "Height: 30cm", "Matte black finish", "Stable base"],
    image: standImage,
    technicalDetails: [
      { label: "Material", value: "Cold-rolled steel" },
      { label: "Dimensions", value: "H: 30cm x Base: 15cm diameter" },
      { label: "Weight", value: "950g" },
      { label: "Finish", value: "Powder-coated matte black" },
      { label: "Care", value: "Wipe with soft cloth" },
      { label: "Origin", value: "Manufactured in Germany" }
    ],
    reviews: [
      { name: "Sophie M.", rating: 5, comment: "Perfect for displaying small sculptures. Very stable.", date: "2025-01-22" },
      { name: "Tom B.", rating: 5, comment: "Sleek and minimal. Great quality.", date: "2025-01-11" }
    ]
  },
  6: {
    name: "Concrete Planter",
    price: 75,
    description: "This hand-poured concrete planter embraces the raw, industrial aesthetic of modern design while providing the perfect home for your botanical companions. Each planter is individually cast, resulting in subtle surface variations and unique air pockets that add organic character to the structured material. The natural grey tones of the concrete develop a beautiful patina over time, especially when used outdoors. With a thoughtfully integrated drainage hole and suitable for both indoor and outdoor environments, this planter is ideal for succulents, cacti, or small leafy plants that thrive in well-draining conditions.",
    details: ["Cast concrete", "Diameter: 15cm", "Drainage included", "Indoor/outdoor use"],
    image: planterImage,
    technicalDetails: [
      { label: "Material", value: "High-grade concrete mix" },
      { label: "Dimensions", value: "Diameter: 15cm x H: 12cm" },
      { label: "Weight", value: "1.5kg" },
      { label: "Finish", value: "Natural sealed concrete" },
      { label: "Care", value: "Wipe clean, suitable for indoor/outdoor" },
      { label: "Origin", value: "Hand-poured in USA" }
    ],
    reviews: [
      { name: "Julia K.", rating: 5, comment: "Love this planter! Perfect weight and size.", date: "2025-01-19" },
      { name: "Chris P.", rating: 4, comment: "Good drainage. Plants are thriving.", date: "2025-01-13" }
    ]
  },
  7: {
    name: "Linen Cushion",
    price: 65,
    description: "Woven from 100% European linen, this cushion cover embodies the understated luxury of natural materials. The fabric's characteristic slubs and slight irregularities create an organic texture that adds depth and visual interest while remaining supremely soft to the touch. Pre-washed for a relaxed, lived-in feel from the first day, the linen only improves with age, becoming softer and more supple with each wash. The envelope-style closure eliminates hardware for clean lines, while the generous dimensions ensure comfortable support. Available in timeless natural tones that complement any interior palette.",
    details: ["100% linen", "45cm x 45cm", "Natural color", "Machine washable"],
    image: cushionImage,
    technicalDetails: [
      { label: "Material", value: "100% European linen" },
      { label: "Dimensions", value: "45cm x 45cm" },
      { label: "Weight", value: "180g" },
      { label: "Finish", value: "Pre-washed natural linen" },
      { label: "Care", value: "Machine wash cold, line dry" },
      { label: "Origin", value: "Woven in Belgium" }
    ],
    reviews: [
      { name: "Emily R.", rating: 5, comment: "Beautiful texture. Gets softer with each wash.", date: "2025-01-17" },
      { name: "Alex S.", rating: 5, comment: "Perfect neutral color. High quality linen.", date: "2025-01-09" }
    ]
  },
  8: {
    name: "Oak Mirror",
    price: 180,
    description: "This circular mirror marries functional necessity with sculptural beauty through the honest expression of natural materials. The solid oak frame is carefully shaped to highlight the wood's grain patterns, then treated with natural oils that bring out its warm honey tones while protecting against moisture. The generous 60cm diameter makes it suitable for entryways, bedrooms, or above console tables, while the circular form softens angular spaces and creates visual harmony. Each frame is unique, bearing the distinctive growth patterns of its source tree. Complete with discreet wall-mounting hardware for secure installation.",
    details: ["Solid oak frame", "Diameter: 60cm", "Natural oil finish", "Wall-mounted"],
    image: mirrorImage,
    technicalDetails: [
      { label: "Material", value: "Solid oak frame with glass mirror" },
      { label: "Dimensions", value: "Diameter: 60cm x Depth: 3cm" },
      { label: "Weight", value: "2.8kg" },
      { label: "Finish", value: "Natural oil on oak, clear mirror" },
      { label: "Care", value: "Clean mirror with glass cleaner, dust frame" },
      { label: "Origin", value: "Handcrafted in Norway" }
    ],
    reviews: [
      { name: "Victoria L.", rating: 5, comment: "Stunning mirror. The oak frame is beautiful.", date: "2025-01-21" },
      { name: "James M.", rating: 5, comment: "Perfect size for entryway. Very elegant.", date: "2025-01-07" }
    ]
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[Number(id)] || productData[1];
  const [showCampaign, setShowCampaign] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Dialog open={showCampaign} onOpenChange={setShowCampaign}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light tracking-wider">SPECIAL OFFER</DialogTitle>
            <DialogDescription className="text-base font-light leading-relaxed pt-4">
              Get 15% off your first purchase when you sign up for our newsletter. 
              Plus, enjoy free shipping on orders over $200.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              onClick={() => setShowCampaign(false)}
              className="border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all duration-300"
            >
              CLAIM OFFER
            </Button>
            <Button 
              variant="outline"
              onClick={() => setShowCampaign(false)}
              className="border-border hover:bg-secondary transition-all duration-300"
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="aspect-square bg-secondary overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-light mb-4 tracking-wider">{product.name}</h1>
            <p className="text-2xl font-light mb-8">${product.price}</p>
            
            <p className="text-base font-light text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <Button 
                className="w-full border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all duration-300"
              >
                PAY NOW
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-border hover:bg-secondary transition-all duration-300"
              >
                PAY WITH PAYPAL
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-light mb-4 tracking-wider">REVIEWS</h2>
          <p className="text-base font-light text-muted-foreground mb-8">
            See what our customers are saying about this product and discover why they love it.
          </p>
          
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-light">{review.name}</span>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-base font-light text-muted-foreground mb-3 leading-relaxed">
                  {review.comment}
                </p>
                <span className="text-sm font-light text-muted-foreground">
                  {new Date(review.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ProductDetail;
