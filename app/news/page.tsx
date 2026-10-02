import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "News, updates, and upcoming events from the Tiger Preservation Center of Nevada — fundraisers and stories from our big cat rescue sanctuary.",
  alternates: { canonical: "/news" },
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
        <p>
          No news posts yet &mdash; updates from the center will appear here.
        </p>
      </section>
    </div>
  );
}
