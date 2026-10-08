"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const QGIV_ORIGIN = "https://secure.qgiv.com";
const EMBED_ID = "95954";
const EMBED_URL = `${QGIV_ORIGIN}/for/rzfesk/embed/${EMBED_ID}/`;
/** Qgiv's hosted donation page: the fallback when the embed can't load. */
const FORM_URL = `${QGIV_ORIGIN}/for/rzfesk/`;
/** How long to wait for the embedded form before offering the hosted page. */
const LOAD_TIMEOUT_MS = 15000;

declare global {
  interface Window {
    QGIV?: { Embed?: { initializeEmbeds?: () => void } };
  }
}

type Status = "loading" | "ready" | "failed";

const ANNOUNCE: Record<Status, string> = {
  loading: "Loading the secure donation form",
  ready: "Secure donation form loaded",
  failed:
    "The donation form didn't load. You can give on our secure Qgiv page or call (541) 251-2287.",
};

// next/script never re-runs onError for a script that already failed, so
// remember the failure for later client-side visits to this page
let scriptFailed = false;

/**
 * Qgiv's embedded donation form. Qgiv's embed.js fills the
 * [data-qgiv-embed] container with an iframe and resizes it through
 * postMessage. The container must stay empty in React: embed.js skips any
 * container that already has children.
 */
export default function QgivForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const refocusRef = useRef(false);
  const [status, setStatus] = useState<Status>(() =>
    scriptFailed ? "failed" : "loading"
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let readyTimer: number | undefined;
    const frame = () => container.querySelector("iframe");

    function markReady() {
      // a late load replaces the fallback: don't strand keyboard focus in it
      if (overlayRef.current?.contains(document.activeElement)) {
        refocusRef.current = true;
      }
      setStatus("ready");
    }
    // embed.js sizes the iframe from the form's "resize" messages; the first
    // one means the form has rendered at its real height.
    function onMessage(e: MessageEvent) {
      const iframe = frame();
      if (e.origin !== QGIV_ORIGIN || !iframe || e.source !== iframe.contentWindow) return;
      try {
        if (JSON.parse(e.data).event === "resize") markReady();
      } catch {
        // not one of Qgiv's JSON messages
      }
    }
    // Backstop for when no sizing message arrives. Qgiv only posts them to
    // the site address saved in its embed settings
    // (https://www.tigerpreservationcenter.org), so on localhost and preview
    // deployments the form keeps embed.js's fixed 1000px height. The form
    // draws a moment after the iframe's load event, hence the delay.
    function onFrameLoad() {
      readyTimer = window.setTimeout(markReady, 3000);
    }
    function watchFrame(iframe: HTMLIFrameElement) {
      iframe.addEventListener("load", onFrameLoad, { once: true });
    }

    window.addEventListener("message", onMessage);
    const observer = new MutationObserver(() => {
      const iframe = frame();
      if (iframe) {
        observer.disconnect();
        watchFrame(iframe);
      }
    });
    observer.observe(container, { childList: true });

    // embed.js scans for containers once, when it first loads. After a
    // client-side navigation back to this page the script is already
    // loaded, so ask it to fill the new container (a no-op if it's filled).
    window.QGIV?.Embed?.initializeEmbeds?.();
    const existing = frame();
    if (existing) {
      observer.disconnect();
      watchFrame(existing);
    }

    const timeout = scriptFailed
      ? undefined
      : window.setTimeout(
          () => setStatus((s) => (s === "loading" ? "failed" : s)),
          LOAD_TIMEOUT_MS
        );

    return () => {
      window.removeEventListener("message", onMessage);
      observer.disconnect();
      frame()?.removeEventListener("load", onFrameLoad);
      window.clearTimeout(readyTimer);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (status === "ready" && refocusRef.current) {
      refocusRef.current = false;
      headRef.current?.focus();
    }
  }, [status]);

  return (
    <div className="give-panel">
      <div className="give-head">
        <h2 ref={headRef} tabIndex={-1}>
          Make a gift
        </h2>
        <p className="give-secure">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12 6h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z"
            />
          </svg>
          Secure checkout
        </p>
      </div>

      <p className="sr-only" role="status">
        {ANNOUNCE[status]}
      </p>

      <div className="give-frame" data-status={status} aria-busy={status === "loading"}>
        <div className="give-embed" inert={status !== "ready"}>
          <div
            ref={containerRef}
            className="qgiv-embed-container"
            data-qgiv-embed="true"
            data-embed-id={EMBED_ID}
            data-embed={EMBED_URL}
            data-width="630"
            data-aria-title="Donation form"
          />
        </div>

        {status !== "ready" && (
          <div className="give-overlay" ref={overlayRef}>
            {status === "loading" ? (
              <div className="give-skeleton" aria-hidden="true">
                <div className="sk-steps">
                  <span /> <span /> <span /> <span />
                </div>
                <div className="sk-bar sk-title" />
                <div className="sk-tabs">
                  <div className="sk-bar" />
                  <div className="sk-bar" />
                </div>
                <div className="sk-amounts">
                  <div /> <div /> <div /> <div />
                  <div className="sk-other" />
                </div>
                <div className="sk-bar sk-banner" />
                <div className="sk-bar sk-button" />
              </div>
            ) : (
              <div className="give-fallback">
                <h3>The donation form didn&rsquo;t load</h3>
                <p>
                  A browser extension or a slow connection may be blocking it.
                  You can still give on our secure Qgiv donation page.
                </p>
                <a
                  className="btn btn-primary"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the donation form
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="give-fallback-call">
                  Or call <a href="tel:+15412512287">(541) 251-2287</a>
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="give-alt">
        Form not loading?{" "}
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
          Give on our secure Qgiv page
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>

      <Script
        id="qgiv-embedjs"
        src={`${QGIV_ORIGIN}/resources/core/js/embed.js`}
        onError={() => {
          scriptFailed = true;
          setStatus("failed");
        }}
      />
    </div>
  );
}
