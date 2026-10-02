"use client";

import { useRef, useState } from "react";

/**
 * PayPal checkout configuration. Set ONE of the two fields:
 *  - hostedButtonId: from a PayPal Donate button (paypal.com/buttons),
 *    e.g. { hostedButtonId: "ABCD1234EFGH" }
 *  - business: the PayPal account email, e.g. { business: "pay@example.org" }
 * While null, the widget shows a "coming soon" notice instead of checkout.
 */
const PAYPAL: { hostedButtonId?: string; business?: string } | null = null;

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

type Freq = "one-time" | "monthly";

function paypalUrl(amount: number) {
  if (!PAYPAL) return null;
  if (PAYPAL.hostedButtonId) {
    return `https://www.paypal.com/donate/?hosted_button_id=${encodeURIComponent(
      PAYPAL.hostedButtonId
    )}`;
  }
  if (PAYPAL.business) {
    const params = new URLSearchParams({
      business: PAYPAL.business,
      amount: String(amount),
      currency_code: "USD",
      item_name: "Donation to The Tiger Preservation Center of Nevada",
    });
    return `https://www.paypal.com/donate/?${params.toString()}`;
  }
  return null;
}

export default function DonateWidget() {
  const [freq, setFreq] = useState<Freq>("one-time");
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [notice, setNotice] = useState(false);
  const noticeHeadRef = useRef<HTMLHeadingElement>(null);
  const freqOnceRef = useRef<HTMLButtonElement>(null);

  const effectiveAmount =
    custom !== "" ? parseInt(custom, 10) || 0 : amount;

  function onCustomInput(value: string) {
    // drop any decimal part before stripping, so "12.50" reads as 12, not 1250
    setCustom(value.replace(/\..*$/, "").replace(/[^0-9]/g, "").slice(0, 6));
  }

  function donate() {
    if (effectiveAmount <= 0) return;
    const url = paypalUrl(effectiveAmount);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    setNotice(true);
    requestAnimationFrame(() => noticeHeadRef.current?.focus());
  }

  function back() {
    setNotice(false);
    requestAnimationFrame(() => freqOnceRef.current?.focus());
  }

  return (
    <div className="donate-widget">
      {!notice ? (
        <div>
          <h2>Make a gift</h2>
          <div className="freq-toggle" role="group" aria-label="Donation frequency">
            <button
              type="button"
              ref={freqOnceRef}
              aria-pressed={freq === "one-time"}
              onClick={() => setFreq("one-time")}
            >
              One-time
            </button>
            <button
              type="button"
              aria-pressed={freq === "monthly"}
              onClick={() => setFreq("monthly")}
            >
              Monthly
            </button>
          </div>
          <div className="amount-grid" role="group" aria-label="Donation amount">
            {AMOUNTS.map((v) => (
              <button
                type="button"
                key={v}
                aria-pressed={custom === "" && amount === v}
                onClick={() => {
                  setAmount(v);
                  setCustom("");
                }}
              >
                ${v}
              </button>
            ))}
          </div>
          <div className="custom-row">
            <span className="sign" aria-hidden="true">
              $
            </span>
            <input
              inputMode="numeric"
              placeholder="Other amount"
              aria-label="Other amount in dollars"
              value={custom}
              onChange={(e) => onCustomInput(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="donate-cta"
            disabled={effectiveAmount <= 0}
            onClick={donate}
          >
            {effectiveAmount > 0
              ? `Donate $${effectiveAmount}${freq === "monthly" ? " / month" : ""}`
              : "Enter an amount"}
          </button>
          <p className="widget-note">
            {PAYPAL
              ? "Secure checkout by PayPal."
              : "Online donations are almost ready — PayPal checkout is being connected."}
          </p>
        </div>
      ) : (
        <div className="widget-thanks" role="status">
          <h2 ref={noticeHeadRef} tabIndex={-1}>
            Almost ready
          </h2>
          <p>
            We&rsquo;re connecting secure PayPal checkout right now. To give
            today, call <a href="tel:+15412512287">(541) 251-2287</a> &mdash;
            thank you for supporting the animals.
          </p>
          <button type="button" className="btn-ghost" onClick={back}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
