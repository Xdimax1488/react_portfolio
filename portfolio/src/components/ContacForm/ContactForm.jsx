import React from 'react';

import {MdOutlineEmail} from 'react-icons/md';
import {FaTelegram} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import './ContactForm.scss'

function ContactForm() {
  return (
    <div className="contact">
     <div className="contact__links">
        <div className="contact__links-blokc">
            <MdOutlineEmail/>
            <div className="title">Email</div>
            <div className="link">dimakurinnoy8@gmail.com</div>
            <a href="mailto:dimakurinnoy8@gmail.com" target="_blank" rel='noreferrer'>Send a massage</a>
        </div>
        <div className="contact__links-blokc">
            <FaTelegram/>
            <div className="title">Telegram</div>
            <div className="link">@Dmytro_Kurinnyi</div>
            <a href="https://t.me/Dmytro_Kurinnyi" target="_blank" rel='noreferrer'>Send a massage</a>
        </div>
        <div className="contact__links-blokc">
            <IoLogoWhatsapp/>
            <div className="title">WhatsApp</div>
            <div className="link">+380936010890</div>
            <a href="https://api.whatsapp.com/send?phone=+380936010890" target="_blank" rel='noreferrer'>Send a massage</a>
        </div>
     </div>
     <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="massage"  rows="7" placeholder='Your Massage' required></textarea>
        <button type='submit' className="btn btn-primary">Send Message</button>
     </form>
    </div>
  )
}

export default ContactForm