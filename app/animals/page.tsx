import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ogFor } from "@/lib/og";

const description =
  "Meet the rescued big cats who live at the Tiger Preservation Center of Nevada, including Shoka the white tiger. Every resident has a lifetime home at our sanctuary.";

export const metadata: Metadata = {
  title: "The Animals",
  description,
  alternates: { canonical: "/animals" },
  openGraph: ogFor("The Animals", description, "/animals"),
};

export default function AnimalsPage() {
  return (
    <div id="page-animals">
      <section className="wrap page-hero section-pad">
        <p className="kicker">The Animals</p>
        <h1>Meet the residents</h1>
        <p className="lede">
          Every tiger, lion, and timber wolf at our Nevada sanctuary has a
          story. More residents will be introduced as the center shares their
          photos and stories.
        </p>
        <div className="animal-grid">
          <div className="animal-card reveal">
            <div className="animal-media">
              <Image
                src="/assets/shoka.jpg"
                alt="Shoka, a white tiger, resting in his enclosure"
                fill
                sizes="(min-width: 1120px) 339px, (min-width: 884px) calc(33vw - 35px), (min-width: 596px) calc(50vw - 38px), calc(100vw - 48px)"
              />
            </div>
            <h2>Shoka</h2>
            <p>
              White tiger &mdash; a permanent resident of the center. Like
              every animal here, Shoka has a home for life, with the food,
              space, and veterinary care he needs.
            </p>
          </div>
        </div>
        <div className="sponsor-band reveal">
          <p>
            Your support helps provide food and veterinary care for our
            residents.
          </p>
          <Link href="/donate" className="btn btn-gold">
            Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
