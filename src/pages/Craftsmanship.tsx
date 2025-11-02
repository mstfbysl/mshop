import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Craftsmanship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">CRAFTSMANSHIP</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Artisan Partners</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                We collaborate with skilled artisans who have dedicated their lives to mastering 
                traditional crafts. Each maker brings decades of experience and a deep respect 
                for their materials.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                From ceramicists in Japan to woodworkers in Scandinavia, our partners share our 
                commitment to creating objects that honor both tradition and innovation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Traditional Techniques</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Our products are made using time-honored techniques passed down through generations. 
                Hand-throwing ceramics, hand-carving wood, and hand-finishing stone—each process 
                requires patience, skill, and attention to detail.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                These traditional methods result in pieces with subtle variations and unique 
                character that machine production cannot replicate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Quality Materials</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                We source only the finest natural materials—solid oak, hand-selected stones, 
                premium clay, and authentic linen. Each material is chosen for its inherent 
                beauty and durability.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Our commitment to quality means every piece is built to last for generations, 
                developing a rich patina and character over time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Small Batch Production</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Each item is produced in small batches to maintain the highest standards of 
                quality control. This approach allows our artisans to give proper attention 
                to every detail and ensures consistent excellence across all pieces.
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

export default Craftsmanship;
