import type { Metadata } from "next";
import Link from "next/link";
import { ogFor } from "@/lib/og";

const description =
  "News, updates, and upcoming events from the Tiger Preservation Center of Nevada — fundraisers and stories from our big cat rescue sanctuary.";

export const metadata: Metadata = {
  title: "News & Events",
  description,
  alternates: { canonical: "/news" },
  openGraph: ogFor("News & Events", description, "/news"),
};

export default function NewsPage() {
  return (
    <div id="page-news">
      <section className="wrap page-hero section-pad news-section">
        <p className="kicker">News &amp; Events</p>
        <h1>From the center</h1>
        <p className="lede">
          Updates from the Tiger Preservation Center of Nevada &mdash; a
          non-breeding big cat sanctuary in Crescent Valley. New residents,
          rescue updates, and fundraising events will be posted here.
        </p>

        <h2>Upcoming events</h2>
        <p>
          No upcoming events are scheduled right now &mdash; check back soon,
          or <Link href="/donate">support the animals</Link> in the meantime.
        </p>

        <div className="news-gap" />

        <h2>Latest news</h2>
        <p>
          No news posts yet &mdash;{" "}
          <Link href="/animals">meet the residents</Link> while we prepare our
          first updates.
        </p>
      </section>
    </div>
  );
}
