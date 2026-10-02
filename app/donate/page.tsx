import type { Metadata } from "next";
import DonateWidget from "@/components/DonateWidget";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support rescued tigers, lions, and timber wolves. Your tax-deductible gift to the Tiger Preservation Center of Nevada (501(c)(3), EIN 83-0883398) funds food, veterinary care, and enclosures.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <div id="page-donate">
      <section className="wrap page-hero section-pad">
        <div className="donate-grid">
          <div className="donate-copy">
            <p className="kicker">Donate</p>
            <h1>Your gift keeps them fed, healthy, and safe.</h1>
            <p className="lede">
              A big cat eats up to 15 pounds of meat a day, and every resident
              needs regular veterinary care and a secure enclosure. Every
              dollar goes directly to the animals.
            </p>
            <div className="impact">
              <div className="impact-row">
                <span className="amt">$25</span>
                <p>feeds a big cat for a day</p>
              </div>
              <div className="impact-row">
                <span className="amt">$100</span>
                <p>covers a veterinary checkup</p>
              </div>
              <div className="impact-row">
                <span className="amt">$500</span>
                <p>helps maintain and improve enclosures</p>
              </div>
            </div>
            <p className="donate-fine">
              The Tiger Preservation Center of Nevada is a 501(c)(3) nonprofit
              (EIN 83-0883398). Donations are tax-deductible to the extent
              allowed by law. Prefer to give directly? Call{" "}
              <a href="tel:+15412512287">(541) 251-2287</a> or email{" "}
              <a href="mailto:info@tigerpreservationcenter.org">
                info@tigerpreservationcenter.org
              </a>
              .
            </p>
          </div>
          <DonateWidget />
        </div>
      </section>
    </div>
  );
}
