"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section contactSection">
      <h2>Let’s Connect</h2>

      <div className="contactCard glass">
        <form ref={formRef} onSubmit={sendEmail} className="contactForm">
          <input
            className="input"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />

          <button
            type="submit"
            className="btn btn-primary contactBtn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {error && <p className="errorText">{error}</p>}
        </form>
      </div>

      {/* SUCCESS OVERLAY */}
      {success && (
        <div className="successOverlay">
          <div className="successCard">
            <div className="checkmark">✓</div>
            <h3>Message Sent!</h3>
            <p>I’ll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}