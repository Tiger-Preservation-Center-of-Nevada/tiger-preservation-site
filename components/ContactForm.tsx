"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<"message" | "reach" | null>(null);
  const [sent, setSent] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const thanksHeadRef = useRef<HTMLHeadingElement>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      setError("message");
      messageRef.current?.focus();
      return;
    }
    if (!name.trim() && !email.trim()) {
      setError("reach");
      nameRef.current?.focus();
      return;
    }
    setError(null);
    setSent(true);
    requestAnimationFrame(() => thanksHeadRef.current?.focus());
  }

  function again() {
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
    setSent(false);
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  return (
    <div className="contact-form-card">
      {!sent ? (
        <div>
          <h2>Send a message</h2>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="cName">Your name</label>
              <input
                id="cName"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="cEmail">Your email or phone</label>
              <input
                id="cEmail"
                name="email"
                placeholder="Your email or phone"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="cMessage">How can we help?</label>
              <textarea
                id="cMessage"
                name="message"
                rows={5}
                placeholder="How can we help?"
                required
                ref={messageRef}
                aria-invalid={error === "message" || undefined}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {error !== null && (
              <p className="form-error" role="alert">
                {error === "message"
                  ? "Please add a message."
                  : "Please add your name or a way to reach you."}
              </p>
            )}
            <button type="submit">Send message</button>
          </form>
        </div>
      ) : (
        <div className="form-thanks" role="status">
          <h2 ref={thanksHeadRef} tabIndex={-1}>
            Message sent
          </h2>
          <p>Thank you &mdash; we will get back to you as soon as we can.</p>
          <button type="button" className="btn-ghost" onClick={again}>
            Send another
          </button>
        </div>
      )}
    </div>
  );
}
