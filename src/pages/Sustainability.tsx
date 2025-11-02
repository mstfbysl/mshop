import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">SUSTAINABILITY</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Our Environmental Commitment</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Sustainability is at the core of everything we do. From material selection to 
                production methods and packaging, we constantly evaluate our environmental impact 
                and seek ways to minimize it.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We believe that creating beautiful objects should not come at the expense of 
                our planet's health.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Responsible Sourcing</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                All wood used in our products comes from sustainably managed forests with proper 
                certifications. Our ceramics use locally sourced clay to reduce transportation 
                emissions. Stone is quarried using environmentally responsible methods.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We prioritize working with suppliers who share our commitment to environmental 
                stewardship and ethical practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Minimal Waste</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Our production processes are designed to minimize waste. Offcuts from wood products 
                are used for smaller items or composted. Clay scraps are reclaimed and reused. 
                Packaging materials are recyclable or compostable.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We use minimal packaging—just what's necessary to protect the product during 
                shipping—and avoid plastic whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Built to Last</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Perhaps our greatest contribution to sustainability is creating products designed 
                to last for decades. By choosing quality over quantity and timeless design over 
                trends, we reduce consumption and waste.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Each piece is an investment in enduring quality, meant to be used daily and 
                passed down through generations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Carbon Neutral Shipping</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We offset 100% of our shipping emissions through verified carbon reduction projects. 
                Whenever possible, we consolidate shipments and use ground transportation to 
                minimize environmental impact.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Sustainability;
