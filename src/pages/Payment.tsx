import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const Payment = () => {
  return (
    <main className="pt-20">
      <section className="section-padding" aria-labelledby="payment-heading">
        <div className="container-custom max-w-3xl">
          <ScrollReveal>
            <span className="text-primary font-semibold tracking-wide">Payment Information</span>
            <h1 id="payment-heading" className="mt-2 mb-6">Payment & Bank Details</h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-muted-foreground mb-6">
              For payments and transfers, please use the bank details below. For invoices or online payment links, contact our team and we'll provide a secure payment gateway link.
            </p>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <dl className="grid grid-cols-1 gap-4">
                <div>
                  <dt className="font-heading font-bold">Account Number</dt>
                  <dd className="text-muted-foreground">10106848185</dd>
                </div>
                <div>
                  <dt className="font-heading font-bold">IFSC</dt>
                  <dd className="text-muted-foreground">IDFB0041264</dd>
                </div>
                <div>
                  <dt className="font-heading font-bold">SWIFT</dt>
                  <dd className="text-muted-foreground">IDFBINBBMUM</dd>
                </div>
                <div>
                  <dt className="font-heading font-bold">Bank</dt>
                  <dd className="text-muted-foreground">IDFC FIRST - Indore Branch</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/contact">Contact for Invoice</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Payment;
