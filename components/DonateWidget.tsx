"use client";

import { useRef, useState } from "react";

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

type Freq = "one-time" | "monthly";

export default function DonateWidget() {
  const [freq, setFreq] = useState<Freq>("one-time");
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [thanks, setThanks] = useState<{ freq: Freq; amount: number } | null>(
    null
  );
  const thanksHeadRef = useRef<HTMLHeadingElement>(null);
  const freqOnceRef = useRef<HTMLButtonElement>(null);

  const effectiveAmount =
    custom !== "" ? parseInt(custom, 10) || 0 : amount;

  function onCustomInput(value: string) {
    // drop any decimal part before stripping, so "12.50" reads as 12, not 1250
    setCustom(value.replace(/\..*$/, "").replace(/[^0-9]/g, "").slice(0, 6));
  }

  function donate() {
    if (effectiveAmount <= 0) return;
    setThanks({ freq, amount: effectiveAmount });
    requestAnimationFrame(() => thanksHeadRef.current?.focus());
  }

  function again() {
    setCustom("");
    setThanks(null);
    requestAnimationFrame(() => freqOnceRef.current?.focus());
  }

  return (
    <div className="donate-widget">
      {thanks === null ? (
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
            Secure checkout (PayPal / Stripe) connects here in the live site.
          </p>
        </div>
      ) : (
        <div className="widget-thanks" role="status">
          <h2 ref={thanksHeadRef} tabIndex={-1}>
            Thank you!
          </h2>
          <p>
            Your {thanks.freq === "monthly" ? "monthly" : "one-time"} gift of $
            {thanks.amount} means the world to the animals.
          </p>
          <button type="button" className="btn-ghost" onClick={again}>
            Make another gift
          </button>
        </div>
      )}
    </div>
  );
}
