import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">RETURNS</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">30-Day Return Policy</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                We want you to love your purchase. If you're not completely satisfied, you may 
                return unused items in their original condition within 30 days of delivery for 
                a full refund.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Due to the handcrafted nature of our products, slight variations in color, 
                texture, and finish are natural and not considered defects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">How to Return</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-light mb-2 tracking-wider">1. Contact Us</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Email hello@monoshop.com with your order number and reason for return. 
                    We'll respond within 24 hours with instructions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2 tracking-wider">2. Pack Carefully</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Use the original packaging if possible. Ensure items are well-protected 
                    during shipping. You are responsible for return shipping costs unless 
                    the item is defective.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2 tracking-wider">3. Ship</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Send to the address provided in our email. We recommend using a trackable 
                    shipping method. Items lost in return transit are not our responsibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2 tracking-wider">4. Refund</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Once we receive and inspect your return, we'll process your refund within 
                    5-7 business days to your original payment method.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Non-Returnable Items</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                The following items cannot be returned:
              </p>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>• Custom or personalized orders</li>
                <li>• Items that have been used or show signs of wear</li>
                <li>• Items without original packaging</li>
                <li>• Final sale or clearance items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Damaged or Defective Items</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
                If your item arrives damaged or defective, please contact us immediately with 
                photos. We'll arrange for a replacement or full refund at no cost to you.
              </p>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                Claims must be made within 7 days of delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-6 tracking-wider">Exchanges</h2>
              <p className="text-base font-light text-muted-foreground leading-relaxed">
                We currently do not offer direct exchanges. If you need a different item, 
                please return your original purchase and place a new order.
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

export default Returns;
