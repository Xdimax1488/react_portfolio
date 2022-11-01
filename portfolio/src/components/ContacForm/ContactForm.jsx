import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

import { FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import './ContactForm.scss';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4m6nlia', 'template_fv6d61e', form.current, 'LqkEAiDUFi6OIat36').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="contact__links">
        <div className="contact__links-blokc">
          <MdOutlineEmail size={20} />
          <div className="title title-contact">Email</div>
          <div className="link">dimakurinnoy8@gmail.com</div>
          <a
            className="contact-link"
            href="mailto:dimakurinnoy8@gmail.com"
            target="_blank"
            rel="noreferrer">
            Send a massage
          </a>
        </div>
        <div className="contact__links-blokc">
          <FaTelegram size={20} />
          <div className="title title-contact">Telegram</div>
          <div className="link">@Dmytro_Kurinnyi</div>
          <a
            className="contact-link"
            href="https://t.me/Dmytro_Kurinnyi"
            target="_blank"
            rel="noreferrer">
            Send a massage
          </a>
        </div>
        <div className="contact__links-blokc">
          <IoLogoWhatsapp size={20} />
          <div className="title title-contact">WhatsApp</div>
          <div className="link">+380936010890</div>
          <a
            className="contact-link"
            href="https://api.whatsapp.com/send?phone=+380936010890"
            target="_blank"
            rel="noreferrer">
            Send a massage
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="massage" rows="7" placeholder="Your Massage" required></textarea>
        <button type="submit" className="btn btn-primery">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
