import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-light text-foreground mb-2">
            We use cookies to enhance your experience
          </p>
          <p className="text-xs font-light text-muted-foreground">
            We use cookies to improve your browsing experience and analyze site traffic. 
            By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            variant="outline"
            onClick={declineCookies}
            className="text-sm font-light tracking-wider"
          >
            DECLINE
          </Button>
          <Button
            onClick={acceptCookies}
            className="text-sm font-light tracking-wider bg-primary text-primary-foreground hover:bg-foreground"
          >
            ACCEPT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
