import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ogFor } from "@/lib/og";

const description =
  "Contact the Tiger Preservation Center of Nevada: (541) 251-2287, info@tigerpreservationcenter.org, or 92 McDaniel Way, Crescent Valley, NV.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: ogFor("Contact", description, "/contact"),
};

export default function ContactPage() {
  return (
    <div id="page-contact">
      <section className="wrap page-hero section-pad">
        <p className="kicker">Contact</p>
        <h1>Get in touch</h1>
        <p className="lede">
          Questions about the center, donations, or an animal in need? Call or
          email &mdash; we answer personally.
        </p>

        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-card reveal">
              <p className="label">Phone</p>
              <a href="tel:+15412512287">(541) 251-2287</a>
            </div>
            <div className="contact-card reveal">
              <p className="label">Email</p>
              <a className="email" href="mailto:info@tigerpreservationcenter.org">
                info@tigerpreservationcenter.org
              </a>
            </div>
            <div className="contact-card reveal">
              <p className="label">Mail</p>
              <address>
                92 McDaniel Way
                <br />
                Crescent Valley, NV
              </address>
            </div>
            <p className="contact-fine">
              These are the center&rsquo;s only official contact details. A
              previously published 775 phone number and Sparks address do not
              belong to us.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
