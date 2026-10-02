import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">
            The Tiger Preservation Center of Nevada
          </p>
          <p>
            A 501(c)(3) nonprofit, non-breeding big cat rescue center.
            <br />
            EIN 83-0883398 &middot; Not open to the public.
          </p>
        </div>
        <div className="footer-col">
          <p className="col-head">Contact</p>
          <a href="tel:+15412512287">(541) 251-2287</a>
          <a className="email" href="mailto:info@tigerpreservationcenter.org">
            info@tigerpreservationcenter.org
          </a>
          <p className="addr">92 McDaniel Way, Crescent Valley, NV</p>
        </div>
        <div className="footer-col">
          <p className="col-head">Pages</p>
          <Link href="/about">About</Link>
          <Link href="/animals">Animals</Link>
          <Link href="/donate">Donate</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="wrap">
          &copy; 2026 The Tiger Preservation Center of Nevada
        </p>
      </div>
    </footer>
  );
}
