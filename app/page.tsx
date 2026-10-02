import Link from "next/link";

export default function Home() {
  return (
    <div id="page-home">
      <section className="wrap hero">
        <div className="reveal">
          <h1>They were abused and abandoned. Here, they are home.</h1>
          <p className="lede">
            The Tiger Preservation Center of Nevada is a non-breeding rescue
            center that gives lifetime homes to abused and neglected exotic
            animals &mdash; tigers, lions, big cats, and timber wolves.
          </p>
          <div className="hero-actions">
            <Link href="/donate" className="btn btn-primary">
              Donate now
            </Link>
            <Link href="/animals" className="btn btn-outline">
              Meet the animals
            </Link>
          </div>
        </div>
        <div className="reveal">
          <div className="hero-media">
            <img
              src="/assets/shoka.jpg"
              alt="Shoka, a white tiger, resting in his enclosure at the center"
              loading="eager"
            />
          </div>
          <p className="media-caption">Shoka, one of the center&rsquo;s residents.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap mission">
          <h2 className="sr-only">What we do</h2>
          <div className="card-grid">
            <div className="info-card reveal">
              <h3>Rescue</h3>
              <p>
                We take in exotic animals that have been abused, neglected, or
                abandoned &mdash; animals with nowhere else to go.
              </p>
            </div>
            <div className="info-card reveal">
              <h3>Lifetime care</h3>
              <p>
                Every animal that arrives has a home for life, with the food,
                space, and veterinary care it needs.
              </p>
            </div>
            <div className="info-card reveal">
              <h3>No breeding, no shows</h3>
              <p>
                We are a non-breeding facility and do not exhibit animals.
                Sanctuary means rest, not performance.
              </p>
            </div>
          </div>
          <p className="mission-more">
            <Link href="/about">More about our mission &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="wrap video-section">
        <p className="kicker">Video</p>
        <h2>See life at the sanctuary</h2>
        <p className="lede">
          &ldquo;Lions and Tigers&rdquo; &mdash; a short film created for the
          center.
        </p>
        <div className="video-frame reveal">
          <iframe
            src="https://www.youtube-nocookie.com/embed/EtvALFg2etQ"
            title="Lions and Tigers — a short film made for the Tiger Preservation Center"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="dark-band">
        <div className="wrap dark-grid">
          <div>
            <h2>Your gift keeps them fed, healthy, and safe.</h2>
            <p>
              A big cat eats up to 15 pounds of meat a day. Every dollar goes
              directly to the animals&rsquo; food, veterinary care, and
              enclosures.
            </p>
          </div>
          <div className="dark-actions">
            <Link href="/donate" className="btn btn-gold">
              Donate
            </Link>
            <Link href="/contact" className="btn btn-dark-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
