import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactStyles from '../styles/ContactStyles';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImLink } from "react-icons/im";
import resume from "../assets/Resume.pdf"
import { toast } from 'react-toast';



const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.GATSBY_EMAIL_SERVICE_ID, process.env.GATSBY_EMAIL_TEMPLATE_ID, form.current, process.env.GATSBY_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          toast.success('Message Sent!!')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <ContactStyles id="contact">
      <div className='container'>
        <div className='socials'>
          <h1>Contact</h1>
          <div className='contact-links'>
            <a href='https://www.linkedin.com/in/kko-dev'>
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a href='https://github.com/kevinohdev'>
              <FaGithub></FaGithub>
            </a>
            <a href='mailto:kkodev@outlook.com'>
              <MdOutlineEmail></MdOutlineEmail>
              <span>&nbsp;email</span>
            </a>
            <a href={resume} download>
              <ImLink></ImLink>
              <span>&nbsp;resume</span>
            </a>
          </div>
        </div>
        <form action="" method="post" ref={form} onSubmit={sendEmail}>
            <input type="text" id="name" name="user_name" placeholder='Name' />
            <input type="email" id="mail" name="user_email" placeholder='Email'/>
            <textarea id="msg" name="message" placeholder='Message'></textarea>
            <button type='submit' value="Send">Send</button>
      </form>
      </div>
    </ContactStyles>
  )
}

export default Contact