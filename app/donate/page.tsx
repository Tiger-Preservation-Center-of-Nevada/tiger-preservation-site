import type { Metadata } from "next";
import Image from "next/image";
import QgivForm from "@/components/QgivForm";
import { ogFor } from "@/lib/og";

const description =
  "Your tax-deductible gift to the Tiger Preservation Center of Nevada funds food, veterinary care, and enclosures for rescued tigers, lions, and timber wolves.";

export const metadata: Metadata = {
  title: "Donate",
  description,
  alternates: { canonical: "/donate" },
  openGraph: ogFor("Donate", description, "/donate"),
};

export default function DonatePage() {
  return (
    <div id="page-donate">
      <section className="wrap page-hero section-pad">
        <div className="donate-layout">
          <div className="donate-intro">
            <p className="kicker">Donate</p>
            <h1>Your support helps keep them fed, healthy, and safe.</h1>
            <p className="lede">
              A big cat eats up to 15 pounds of meat a day, and every resident
              needs regular veterinary care and a secure enclosure.
            </p>
          </div>

          <div className="donate-form">
            <QgivForm />
          </div>

          <div className="donate-details">
            <h2>What your gift could provide</h2>
            <ul className="impact" role="list">
              <li>
                <span className="amt">$25</span>
                <span>Could feed a big cat for a day</span>
              </li>
              <li>
                <span className="amt">$100</span>
                <span>Could partially cover a veterinary checkup</span>
              </li>
              <li>
                <span className="amt">$500</span>
                <span>Could help us maintain and improve our property</span>
              </li>
            </ul>
            <ul className="donate-trust" role="list">
              <li>501(c)(3) nonprofit</li>
              <li>Tax-deductible</li>
              <li>Secure card processing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap donate-direct">
          <div className="reveal">
            <div className="donate-direct-media">
              <Image
                src="/assets/lion.jpg"
                alt="Close-up of one of the center's rescued lions"
                fill
                sizes="(min-width: 1120px) 512px, (min-width: 696px) calc(50vw - 48px), calc(100vw - 48px)"
              />
            </div>
          </div>
          <div className="reveal">
            <h2>Prefer to give directly?</h2>
            <p className="donate-direct-lede">
              Call or email us and we&rsquo;ll gladly take your gift directly
              or answer any questions about giving.
            </p>
            <div className="donate-direct-cards">
              <div className="contact-card">
                <p className="label">Call</p>
                <a href="tel:+15412512287">(541) 251-2287</a>
              </div>
              <div className="contact-card">
                <p className="label">Email</p>
                <a className="email" href="mailto:info@tigerpreservationcenter.org">
                  info@tigerpreservationcenter.org
                </a>
              </div>
            </div>
            <p className="donate-fine">
              The Tiger Preservation Center of Nevada is a 501(c)(3) nonprofit
              (EIN 83-0883398). Donations are tax-deductible to the extent
              allowed by law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
