import React, { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import { SOCIALS } from "../data/portfolioData";
import { Reveal, Magnetic } from "./Navbar";

/* ------------------------------------------------------------------ */
/*  Contact Visual — Animated Neural Network                          */
/* ------------------------------------------------------------------ */

function ContactVisual() {
  const nodes = [
    { x: 18, y: 35, delay: "0s", size: 5 },
    { x: 31, y: 20, delay: "1.2s", size: 4 },
    { x: 45, y: 42, delay: "0.5s", size: 6 },
    { x: 58, y: 25, delay: "1.8s", size: 4 },
    { x: 72, y: 40, delay: "0.8s", size: 5 },
    { x: 83, y: 23, delay: "2s", size: 4 },
    { x: 27, y: 65, delay: "1.5s", size: 4 },
    { x: 42, y: 78, delay: "0.3s", size: 5 },
    { x: 57, y: 62, delay: "1.1s", size: 6 },
    { x: 70, y: 76, delay: "2.2s", size: 4 },
    { x: 84, y: 61, delay: "0.7s", size: 5 },
  ];

  return (
    <div className="contact-visual" aria-hidden="true">
      <style>{`
        .contact-visual {
          position: relative;
          width: 100%;
          height: 250px;
          margin-top: 28px;
          overflow: hidden;
          border-radius: 18px;
          isolation: isolate;
        }

        /* ---------------------------------------------------------- */
        /* Ambient glow                                                */
        /* ---------------------------------------------------------- */

        .cv-ambient {
          position: absolute;
          width: 180px;
          height: 180px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(240, 103, 156, 0.12),
            rgba(54, 217, 208, 0.07) 40%,
            transparent 72%
          );
          filter: blur(18px);
          animation: cv-breathe 5s ease-in-out infinite;
        }

        /* ---------------------------------------------------------- */
        /* Network container                                            */
        /* ---------------------------------------------------------- */

        .cv-network {
          position: absolute;
          inset: 20px;
          transform-origin: center;
          animation: cv-drift 8s ease-in-out infinite;
        }

        /* ---------------------------------------------------------- */
        /* Connecting lines                                             */
        /* ---------------------------------------------------------- */

        .cv-line {
          position: absolute;
          height: 1px;
          transform-origin: left center;
          background: linear-gradient(
            90deg,
            rgba(240, 103, 156, 0),
            rgba(240, 103, 156, 0.4),
            rgba(54, 217, 208, 0.32),
            rgba(54, 217, 208, 0)
          );
          opacity: 0.65;
        }

        .cv-line-1 {
          width: 150px;
          left: 18%;
          top: 35%;
          transform: rotate(-23deg);
        }

        .cv-line-2 {
          width: 150px;
          left: 31%;
          top: 24%;
          transform: rotate(25deg);
        }

        .cv-line-3 {
          width: 155px;
          left: 45%;
          top: 42%;
          transform: rotate(-18deg);
        }

        .cv-line-4 {
          width: 130px;
          left: 57%;
          top: 27%;
          transform: rotate(28deg);
        }

        .cv-line-5 {
          width: 145px;
          left: 27%;
          top: 65%;
          transform: rotate(20deg);
        }

        .cv-line-6 {
          width: 145px;
          left: 42%;
          top: 77%;
          transform: rotate(-32deg);
        }

        .cv-line-7 {
          width: 125px;
          left: 57%;
          top: 63%;
          transform: rotate(22deg);
        }

        .cv-line-8 {
          width: 120px;
          left: 70%;
          top: 75%;
          transform: rotate(-28deg);
        }

        .cv-line-9 {
          width: 115px;
          left: 44%;
          top: 43%;
          transform: rotate(67deg);
        }

        /* ---------------------------------------------------------- */
        /* Nodes                                                       */
        /* ---------------------------------------------------------- */

        .cv-node {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: cv-node-pulse 3s ease-in-out infinite;
        }

        .cv-node::before {
          content: "";
          position: absolute;
          inset: -8px;
          border: 1px solid rgba(240, 103, 156, 0.12);
          border-radius: 50%;
          animation: cv-node-ring 3s ease-in-out infinite;
        }

        .cv-node::after {
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: currentColor;
          box-shadow:
            0 0 10px currentColor,
            0 0 24px currentColor;
        }

        .cv-node:nth-child(2n)::after {
          background: #f0679c;
        }

        .cv-node:nth-child(2n + 1)::after {
          background: #36d9d0;
        }

        /* ---------------------------------------------------------- */
        /* Central structure                                            */
        /* ---------------------------------------------------------- */

        .cv-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 48px;
          height: 48px;
          transform: translate(-50%, -50%) rotate(45deg);
          border: 1px solid rgba(240, 103, 156, 0.65);
          background: rgba(240, 103, 156, 0.035);
          box-shadow:
            0 0 25px rgba(240, 103, 156, 0.16),
            inset 0 0 25px rgba(54, 217, 208, 0.08);
          animation: cv-core-rotate 10s linear infinite;
        }

        .cv-core::before {
          content: "";
          position: absolute;
          inset: 9px;
          border: 1px solid rgba(54, 217, 208, 0.55);
        }

        .cv-core::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: #f0679c;
          box-shadow:
            0 0 10px #f0679c,
            0 0 22px rgba(240, 103, 156, 0.7);
        }

        /* ---------------------------------------------------------- */
        /* Floating signal                                               */
        /* ---------------------------------------------------------- */

        .cv-signal {
          position: absolute;
          width: 65px;
          height: 65px;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          border: 1px solid rgba(54, 217, 208, 0.18);
          transform: translate(-50%, -50%);
          animation: cv-signal 4s ease-out infinite;
        }

        .cv-signal-2 {
          animation-delay: 2s;
        }

        /* ---------------------------------------------------------- */
        /* Animations                                                   */
        /* ---------------------------------------------------------- */

        @keyframes cv-breathe {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.55;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
        }

        @keyframes cv-drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -7px, 0);
          }
        }

        @keyframes cv-node-pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.85);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        @keyframes cv-node-ring {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.2;
          }

          50% {
            transform: scale(1.25);
            opacity: 0.65;
          }
        }

        @keyframes cv-core-rotate {
          from {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }

        @keyframes cv-signal {
          0% {
            transform: translate(-50%, -50%) scale(0.4);
            opacity: 0.65;
          }

          100% {
            transform: translate(-50%, -50%) scale(2.7);
            opacity: 0;
          }
        }

        /* ---------------------------------------------------------- */
        /* Reduced motion                                               */
        /* ---------------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .contact-visual *,
          .contact-visual {
            animation: none !important;
          }
        }

        /* ---------------------------------------------------------- */
        /* Mobile                                                       */
        /* ---------------------------------------------------------- */

        @media (max-width: 700px) {
          .contact-visual {
            height: 210px;
          }

          .cv-network {
            transform: scale(0.85);
          }
        }
      `}</style>

      <div className="cv-ambient" />

      <div className="cv-network">

        {/* CONNECTIONS */}

        <span className="cv-line cv-line-1" />
        <span className="cv-line cv-line-2" />
        <span className="cv-line cv-line-3" />
        <span className="cv-line cv-line-4" />
        <span className="cv-line cv-line-5" />
        <span className="cv-line cv-line-6" />
        <span className="cv-line cv-line-7" />
        <span className="cv-line cv-line-8" />
        <span className="cv-line cv-line-9" />

        {/* NODES */}

        {nodes.map((node, index) => (
          <span
            key={index}
            className="cv-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: node.delay,
            }}
          />
        ))}

        {/* CENTRAL CORE */}

        <div className="cv-signal" />
        <div className="cv-signal cv-signal-2" />
        <div className="cv-core" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Section                                                    */
/* ------------------------------------------------------------------ */

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setResult("Sending...");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        "ea7b8495-2df3-458a-8995-ec12270d101b"
      );

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("form_subject", form.subject);
      formData.append("message", form.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setResult(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      setResult(
        "Unable to send message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">

      {/* SECTION HEADING */}

      <Reveal className="section-head">
        <p className="section-kicker">
          Contact
        </p>

        <h2 className="section-title">
          Let's build something
        </h2>
      </Reveal>

      {/* EMAIL */}

      <Reveal delay={30}>
        <a
          href="mailto:tanmaypaliwal12345@gmail.com"
          className="contact-email"
        >
          tanmaypaliwal12345@gmail.com
        </a>
      </Reveal>

      <div className="contact-grid">

        {/* CONTACT INFORMATION */}

        <Reveal
          className="contact-info"
          delay={70}
        >
          <p className="contact-lead">
            Have a project in mind, an opening on your
            team, or just want to say hello? My inbox is
            open.
          </p>

          {/* PHONE */}

          <div className="info-item">
            <Phone size={15} />

            <a href="tel:+916260153962">
              +91 62601 53962
            </a>
          </div>

          {/* LOCATION */}

          <div className="info-item">
            <MapPin size={15} />

            <span>
              Indore, India
            </span>
          </div>

          {/* ANIMATED VISUAL */}

          <ContactVisual />
        </Reveal>


        {/* CONTACT FORM */}

        <Reveal
          as="form"
          className="contact-form"
          delay={110}
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />

          <Magnetic
            as="button"
            type="submit"
            className="btn btn-primary"
            disabled={sending}
          >
            {sending
              ? "Sending..."
              : "Send message"}

            <Send size={14} />
          </Magnetic>

          {result && (
            <p className="form-note">
              {result}
            </p>
          )}

        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-socials">

        {SOCIALS.map(
          ({ href, label, Icon }) => (
            <Magnetic
              as="a"
              key={label}
              href={href}
              target={
                href.startsWith("mailto")
                  ? undefined
                  : "_blank"
              }
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </Magnetic>
          )
        )}

      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Tanmay Paliwal.
        Built with React.
      </p>

    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Page                                                       */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
}