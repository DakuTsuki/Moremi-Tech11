import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Donate = () => {
  const accountDetails = {
    accountNumber: "0124785331",
    bank: "Wema Bank",
    name: "Moremi Techstars Foundation",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate-fade-in-up"
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              [ Support Us ]
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              Make a <span className="text-gradient">difference today.</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Your support helps us empower young African girls with the skills,
              mentorship, and opportunities they need to thrive in tech.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate-scale-in"
            className="max-w-xl mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                Donate via Bank Transfer
              </h2>

              <p className="text-muted-foreground text-sm mb-6">
                Kindly use the details below to make your donation.
              </p>

              <div className="space-y-4 text-left text-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Account Number</span>
                  <span className="font-semibold">
                    {accountDetails.accountNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Bank</span>
                  <span className="font-semibold">
                    {accountDetails.bank}
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-semibold">
                    {accountDetails.name}
                  </span>
                </div>
              </div>

              {/* Optional Copy Button */}
              <Button
                className="mt-6 w-full rounded-full"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${accountDetails.name} - ${accountDetails.accountNumber} (${accountDetails.bank})`
                  );
                }}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Details
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                After making your donation, you may contact us with proof of payment.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
