import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">SHIPPING</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Shipping Methods</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-6">
                We offer several shipping options to meet your needs:
              </p>
              
              <div className="space-y-4">
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light tracking-wider">Standard Shipping</h3>
                    <span className="text-sm font-light">$12</span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">
                    5-7 business days • United States only
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light tracking-wider">Express Shipping</h3>
                    <span className="text-sm font-light">$28</span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">
                    2-3 business days • United States only
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light tracking-wider">International Standard</h3>
                    <span className="text-sm font-light">$45</span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">
                    10-14 business days • Worldwide
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light tracking-wider">Free Shipping</h3>
                    <span className="text-sm font-light">Free</span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">
                    Orders over $200 • United States only • 5-7 business days
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Processing Time</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Most items are made to order in small batches. Production typically takes 2-3 weeks 
                before your order ships. You'll receive an email notification when your order 
                is ready to ship.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                During peak seasons (holidays, special promotions), processing times may be slightly 
                longer. Any delays will be communicated via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Tracking Your Order</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                Once your order ships, you'll receive a tracking number via email. You can use 
                this number to monitor your package's progress.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                If you have any questions about your shipment, please contact us at 
                hello@monoshop.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">International Shipping</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                We ship to most countries worldwide. International customers are responsible 
                for any customs duties, taxes, or fees imposed by their country.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Delivery times vary by location and are affected by customs processing. We cannot 
                guarantee delivery dates for international orders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Packaging</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                All items are carefully packaged to ensure safe delivery. We use minimal, 
                recyclable packaging materials to reduce environmental impact.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Each package includes care instructions for your product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Shipping Issues</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                If your package is lost or damaged during shipping, please contact us within 
                7 days of the expected delivery date. We'll work with the carrier to resolve 
                the issue and arrange a replacement or refund.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                For packages marked as delivered but not received, we recommend checking with 
                neighbors and your building management before contacting us.
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

export default Shipping;
