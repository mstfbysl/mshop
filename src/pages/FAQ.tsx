import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">FAQ</h1>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-light tracking-wider">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Standard shipping typically takes 5-7 business days within the continental US. 
                International orders may take 10-14 business days. You'll receive tracking 
                information once your order ships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-light tracking-wider">
                What is your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                We offer a 30-day return policy for unused items in their original condition. 
                Please contact us to initiate a return. Due to the handmade nature of our products, 
                slight variations are not grounds for return.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-light tracking-wider">
                Are your products handmade?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Yes, all our products are handcrafted by skilled artisans using traditional 
                techniques. This means each piece has unique characteristics and slight variations 
                that make it one-of-a-kind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-light tracking-wider">
                Do you ship internationally?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Yes, we ship to most countries worldwide. Shipping costs and delivery times vary 
                by location. Import duties and taxes are the responsibility of the customer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-light tracking-wider">
                How do I care for my products?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Each product comes with specific care instructions. Generally, wood items should 
                be cleaned with a damp cloth and occasionally treated with natural oil. Ceramics 
                can be hand-washed with mild soap. Stone pieces should be sealed periodically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-light tracking-wider">
                Can I place a custom order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                We occasionally accept custom orders for certain items. Please contact us with 
                your requirements, and we'll let you know if we can accommodate your request. 
                Custom orders typically require 6-8 weeks for completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-light tracking-wider">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, 
                and Apple Pay. All payments are processed securely through our encrypted payment gateway.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-light tracking-wider">
                Are items in stock?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                Most items are made to order in small batches. If an item is listed on our website, 
                it's available for purchase. Production typically takes 2-3 weeks before shipping.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default FAQ;
