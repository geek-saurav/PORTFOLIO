import React  from 'react';
import {useRef} from 'react';
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai' 
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3u9oiad', 'template_u19publ', form.current, 'tvEDbMFbxkPhdqyak')
    e.target.reset()
  };
    return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>saurav.k1a1@gmail.com</h5>
            <a href="mailto:saurav.k1a1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>_.saurav._k</h5>
            <a href="https://www.instagram.com/_.saurav._k" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+919663497679</h5>
            <a href="https://api.whatsapp.com/send?phone+919663497679" target="_blank">Send a message</a>
          </article>
          {/* END OF CONTACT FORMM*/}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Nmae' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact