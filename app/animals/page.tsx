import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Animals",
};

export default function AnimalsPage() {
  return (
    <div id="page-animals">
      <section className="wrap page-hero section-pad">
        <p className="kicker">The Animals</p>
        <h1>Meet the residents</h1>
        <p className="lede">
          Each animal here has a story. More residents will be introduced as
          the center shares their photos and stories.
        </p>
        <div className="animal-grid">
          <div className="animal-card reveal">
            <div className="animal-media">
              <img
                src="/assets/shoka.jpg"
                alt="Shoka, a white tiger, resting in his enclosure"
                loading="lazy"
              />
            </div>
            <h2>Shoka</h2>
            <p>White tiger &mdash; a permanent resident of the center.</p>
          </div>
          <div className="animal-card reveal">
            <div className="animal-media">
              <img
                src="/assets/lion.jpg"
                alt="Close-up of one of the center's rescued lions"
                loading="lazy"
              />
            </div>
            <h2>One of the lions</h2>
            <p>
              One of the center&rsquo;s rescued lions &mdash; name and story
              coming soon.
            </p>
          </div>
          <div className="animal-card reveal">
            <div className="animal-media">
              <div className="ph-tile">
                <span>Photo coming soon</span>
              </div>
            </div>
            <h2>Resident name</h2>
            <p>Photo and story coming soon.</p>
          </div>
          <div className="animal-card reveal">
            <div className="animal-media">
              <div className="ph-tile">
                <span>Photo coming soon</span>
              </div>
            </div>
            <h2>Resident name</h2>
            <p>Photo and story coming soon.</p>
          </div>
          <div className="animal-card reveal">
            <div className="animal-media">
              <div className="ph-tile">
                <span>Photo coming soon</span>
              </div>
            </div>
            <h2>Resident name</h2>
            <p>Photo and story coming soon.</p>
          </div>
          <div className="animal-card reveal">
            <div className="animal-media">
              <div className="ph-tile">
                <span>Photo coming soon</span>
              </div>
            </div>
            <h2>Resident name</h2>
            <p>Photo and story coming soon.</p>
          </div>
        </div>
        <div className="sponsor-band reveal">
          <p>
            Sponsor a resident&rsquo;s food and care &mdash; every gift goes
            directly to the animals.
          </p>
          <Link href="/donate" className="btn btn-gold">
            Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
