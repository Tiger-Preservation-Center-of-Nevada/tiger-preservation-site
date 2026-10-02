import type { Metadata } from "next";
import { ogFor } from "@/lib/og";

const description =
  "A 501(c)(3), federally licensed, non-breeding sanctuary in Crescent Valley, NV providing lifetime care to rescued tigers, lions, big cats, and timber wolves.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: ogFor("About", description, "/about"),
};

export default function AboutPage() {
  return (
    <div id="page-about">
      <section className="wrap page-hero about-intro">
        <p className="kicker">About Us</p>
        <h1>A federally licensed sanctuary for animals who had nowhere else to go.</h1>
        <div className="about-cols">
          <div className="copy reveal">
            <p>
              The Tiger Preservation Center of Nevada is a 501(c)(3) nonprofit,
              federally licensed rehabilitation facility for endangered
              species, registered in Nevada.
            </p>
            <p>
              Our mission is to provide sanctuary and care for injured, abused,
              and orphaned exotic wildlife, with an emphasis on big cats. We
              care for lions, tigers, other large cats, and timber wolves
              &mdash; animals rescued from abuse and neglect who now have a
              safe, permanent home.
            </p>
            <p>
              We are a non-breeding facility. We do not buy, sell, breed, or
              exhibit animals. The animals who come here stay for life, and our
              only job is their wellbeing.
            </p>
            <p>
              At this time the center is not open to the public. This keeps
              stress low for animals recovering from difficult pasts and keeps
              our focus where it belongs &mdash; on their care.
            </p>
          </div>
          <div className="reveal">
            <div className="about-media">
              <img
                src="/assets/lion.jpg"
                alt="Close-up of one of the center's rescued lions"
                loading="lazy"
              />
            </div>
            <p className="media-caption">One of the center&rsquo;s rescued lions.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap facts">
          <h2>The facts</h2>
          <div className="card-grid">
            <div className="fact-card reveal">
              <p className="fact">501(c)(3)</p>
              <p>Federally recognized nonprofit, EIN 83-0883398</p>
            </div>
            <div className="fact-card reveal">
              <p className="fact">Registered in Nevada</p>
              <p>Located at 92 McDaniel Way, Crescent Valley, NV</p>
            </div>
            <div className="fact-card reveal">
              <p className="fact">Non-breeding</p>
              <p>Rescue and lifetime care only &mdash; no breeding, no shows</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap founders">
        <h2>The people behind the center</h2>
        <p className="lede">
          Founders Bob and Bonnie have dedicated their lives to the care and
          support of endangered species &mdash; especially big cats &mdash; for
          more than 40 years.
        </p>
        <div className="founders-grid">
          <div className="reveal">
            <div className="founder-media">
              <img
                src="/assets/bonnie-serval.jpg"
                alt="Bonnie holding a serval kitten to her cheek"
                loading="lazy"
              />
            </div>
            <p className="founder-caption">Bonnie with a serval kitten.</p>
          </div>
          <div className="reveal">
            <div className="founder-media">
              <img
                src="/assets/bob-joey.jpg"
                alt="Bob holding a young joey in a denim pouch"
                loading="lazy"
              />
            </div>
            <p className="founder-caption">Bob with a young joey.</p>
          </div>
        </div>
        <blockquote className="reveal">
          &ldquo;I have been involved with exotic animals since 1973. Many of
          the cats at the center were saved from abusive situations &mdash;
          cages so small they could not even turn around, with severe untreated
          health problems. They have found a loving home here at the center
          with us.&rdquo;
          <footer>&mdash; Bonnie, co-founder</footer>
        </blockquote>
      </section>

      <section className="wrap contact-note-section">
        <div className="callout reveal">
          <h2>A note on our contact information</h2>
          <p>
            An incorrect phone number (with a 775 area code) and an old Sparks,
            NV address were previously published for the center. They do not
            belong to us, and the person reached at that number has no
            connection to this organization. Our only official contact details
            are <a href="tel:+15412512287">(541) 251-2287</a>,{" "}
            <a href="mailto:info@tigerpreservationcenter.org">
              info@tigerpreservationcenter.org
            </a>
            , and 92 McDaniel Way, Crescent Valley, Nevada.
          </p>
        </div>
      </section>
    </div>
  );
}
