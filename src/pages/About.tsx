import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">ABOUT</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Our Philosophy</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We believe in the power of simplicity. Each object in our collection is chosen for its 
                timeless design, quality craftsmanship, and ability to enhance everyday living through 
                thoughtful minimalism.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Craftsmanship</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We work with artisans who share our commitment to quality and sustainability. 
                Every piece is made with care, using traditional techniques and natural materials 
                that will stand the test of time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Sustainability</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Our commitment to sustainability extends beyond our products. We carefully select 
                materials, minimize waste, and work with suppliers who share our environmental values.
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

export default About;
