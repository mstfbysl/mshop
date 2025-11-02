import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider">CONTACT</h1>
          
          <div className="mb-12">
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-8">
              Have a question or want to learn more about our products? 
              We'd love to hear from you.
            </p>
            
            <div className="space-y-4 text-sm font-light">
              <p>Email: hello@minimal.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Monday - Friday, 9AM - 6PM EST</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-light mb-2 tracking-wider">NAME</label>
              <Input 
                type="text" 
                className="w-full border-border bg-background font-light"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light mb-2 tracking-wider">EMAIL</label>
              <Input 
                type="email" 
                className="w-full border-border bg-background font-light"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light mb-2 tracking-wider">MESSAGE</label>
              <Textarea 
                className="w-full border-border bg-background font-light min-h-[150px]"
                placeholder="Your message"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full border border-primary bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all duration-300"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Contact;
