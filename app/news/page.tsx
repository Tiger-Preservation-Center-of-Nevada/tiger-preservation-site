import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Events",
};

export default function NewsPage() {
  return (
    <div id="page-news">
      <section className="wrap page-hero section-pad news-section">
        <p className="kicker">News &amp; Events</p>
        <h1>From the center</h1>

        <h2>Upcoming events</h2>
        <p>
          No upcoming events are scheduled right now &mdash; check back soon.
        </p>

        <div className="news-gap" />

        <h2>Latest news</h2>
        <div className="news-grid">
          <article className="news-card reveal">
            <div className="news-media">
              <div className="ph-tile">
                <span>Post photo</span>
              </div>
            </div>
            <div className="news-body">
              <p className="date">September 2026</p>
              <h3>Settling in at Crescent Valley</h3>
              <p>
                An update on the center&rsquo;s relocation and how the
                residents are adjusting to their new home.
              </p>
              <Link href="/news" className="more">
                Read more &rarr;
              </Link>
            </div>
          </article>
          <article className="news-card reveal">
            <div className="news-media">
              <img
                src="/assets/shoka.jpg"
                alt="Shoka the white tiger"
                loading="lazy"
              />
            </div>
            <div className="news-body">
              <p className="date">August 2026</p>
              <h3>Shoka&rsquo;s story</h3>
              <p>
                How one white tiger found his way to a permanent, peaceful
                home.
              </p>
              <Link href="/news" className="more">
                Read more &rarr;
              </Link>
            </div>
          </article>
          <article className="news-card reveal">
            <div className="news-media">
              <div className="ph-tile">
                <span>Post photo</span>
              </div>
            </div>
            <div className="news-body">
              <p className="date">July 2026</p>
              <h3>What it takes to feed a big cat</h3>
              <p>
                A look at the daily routine of feeding and caring for rescued
                big cats.
              </p>
              <Link href="/news" className="more">
                Read more &rarr;
              </Link>
            </div>
          </article>
        </div>
        <p className="fine-note" style={{ marginTop: 20 }}>
          Sample posts &mdash; the blog fills in as the center shares updates.
        </p>
      </section>
    </div>
  );
}
