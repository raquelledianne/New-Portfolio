"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setShowSuccess(true);

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Let’s Connect</h2>

      <div className="glass contactCard">
        <form onSubmit={handleSubmit} className="contactForm">

          <input
            className="input"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="input"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && !showSuccess && (
            <p className="successText">Message sent successfully ✔</p>
          )}

          {status === "error" && (
            <p className="errorText">Something went wrong. Try again.</p>
          )}
        </form>
      </div>

      {/* SUCCESS OVERLAY */}
      {showSuccess && (
        <div className="successOverlay">
          <div className="successCard">
            <div className="checkmark">✔</div>
            <h3>Message Sent!</h3>
            <p>I’ll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}