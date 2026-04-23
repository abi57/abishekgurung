import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs integration - install emailjs-com and uncomment to enable:
    // emailjs.sendForm("service_1f82soo", "template_k35b6dn", form.current, "P387ImAov-vykH2dt");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:gurungabishek669.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <a
              href="https://www.instagram.com/abishekgurung___/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/+61449916692"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
