import React, { useState, useRef } from "react";
import {
  FaUserAlt,
  FaWhatsapp,
  FaSkype,
  FaLocationArrow,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaPinterest
} from "react-icons/fa";
import {
  FiMail,
  FiPhoneMissed,
  FiMessageSquare,
  FiLink2,
} from "react-icons/fi";
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from "../utils/EmailJS";
import emailjs from "@emailjs/browser";
import { Helmet } from 'react-helmet';
import client1 from '../images/client1.jpeg'
import client from '../images/client.jpeg'
import client2 from '../images/client2.jpeg'
import client3 from '../images/client3.jpeg'
import client4 from '../images/client4.jpeg'
import client5 from '../images/client5.jpeg'
import client6 from '../images/client6.jpeg'
import client7 from '../images/client7.jpeg'
import client8 from '../images/client8.jpeg'
import client9 from '../images/client9.jpeg'
const Contact = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countrycode: "",
    whatsapp: "",
    skype: "",
    projecturl: "",
    address: "",
    budget: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const myClients = [client,client1,client2,client3,client4,client5,client6,client7,client8,client9];
  const ref = useRef(0);
  const form = useRef();
  if (alertMessage.length !== 0) {
    alert(alertMessage);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage(result.text + "Message Sent");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countrycode: "",
            whatsapp: "",
            skype: "",
            projecturl: "",
            address: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setAlertMessage(error.text + "Error occured in Sending Message");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countrycode: "",
            whatsapp: "",
            skype: "",
            projecturl: "",
            address: "",
            budget: "",
            message: "",
          });
        }
      );
  };
  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };

  return (
    <main className="contact">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ava-Data/Contact</title>
                <link rel="canonical" href="http://localhost:3000/contact" />
            </Helmet>
      <div className="contactHeader">
        <h2 className="contactHeaderTitle">Contact Us</h2>
        <p className="contactHeaderPara1">
          We would be happy to hear from you, please fill in the form below or
          mail us your requirements on
        </p>
        <p className="contactHeaderPara2">info at ava-data.com</p>
      </div>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <div className="formBox">
            <div className="formInnerBox">
              <FaUserAlt className="formIcon" size={24} />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter your full Name*"
              />
            </div>
            <div className="formInnerBox">
              <FiMail className="formIcon" size={24} />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter your Email*"
              />
            </div>
          </div>
          <div className="formBox">
            <div className="formInnerBox">
              <FiPhoneMissed className="formIcon" size={24} />
              <input
                type="text"
                name="countrycode"
                value={formData.countrycode}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                placeholder="contact number*"
              />
            </div>
            <div className="formInnerBox">
              <FaWhatsapp className="formIcon" size={24} />
              <input
                type="tel"
                name="whatsapp"
                onChange={handleChange}
                value={formData.whatsapp}
                placeholder="Whatsapp number*"
              />
            </div>
            <div className="formInnerBox">
              <FaSkype className="formIcon" size={24} />
              <input
                type="text"
                name="skype"
                onChange={handleChange}
                value={formData.skype}
                placeholder="Skype Id*"
              />
            </div>
          </div>
          <div className="formBox">
            <div className="formInnerBox">
              <FiLink2 className="formIcon" size={24} />
              <input
                type="url"
                name="projecturl"
                onChange={handleChange}
                value={formData.projecturl}
                placeholder="Type your project requirements link*"
              />
            </div>
          </div>
          <div className="formBox">
            <div className="formInnerBox">
              <FaLocationArrow className="formIcon" size={24} />
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                placeholder="Your Address/Location*"
              />
            </div>
          </div>
          <div className="formBox formFoxRange">
            <p className="rangeBudget">Project Budget: $ {formData.budget}</p>
            <div className="formInnerBox">
              <input
                type="range"
                name="budget"
                onChange={handleChange}
                value={formData.budget}
                min={100}
                max={200000}
              />
            </div>
          </div>
          <div className="formBox">
            <div className="formInnerBox">
              <FiMessageSquare className="formIcon" size={24} />
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Your message*"
              ></textarea>
            </div>
          </div>
          <div className="submitBox">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className="clients">
        <div className="clientHeader">
          <h2 className="clientHeaderTitle">Our Esteemed Clients</h2>
          <div className="clientsControllerWrapper">
            <FaRegArrowAltCircleLeft
              className="clientsController"
              size={24}
              onClick={() => scroll(40)}
            />
            <FaRegArrowAltCircleRight
              className="clientsController"
              size={24}
              onClick={() => scroll(-40)}
            />
          </div>
        </div>
        <div className="clientsListWrapper" ref={ref}>
          {myClients.map((a,i) => (
            <div className="clientList" key={i+1}>
              <img src={a} alt={a} width={120} height={120} />
            </div>
          ))}
        </div>
      </div>
      <div className="socials">
        <div className="socialsLeft">
          <h3 className="socialsLeftTitle">Social Media</h3>
          <p className="socialLeftPara">
            Don’t Miss To Follow Us On Our Social
            <br /> Networks Accounts.
          </p>
        </div>
        <div className="socialsRight">
          <div className="socilaIconBox">
            <FaFacebook className="socialIcon" size={28} />
          </div>
          <div className="socilaIconBox">
            <FaTwitter className="socialIcon" size={28} />
          </div>
          <div className="socilaIconBox">
            <FaLinkedin className="socialIcon" size={28} />
          </div>
          <div className="socilaIconBox">
            <FaInstagram className="socialIcon" size={28} />
          </div>
          <div className="socilaIconBox">
            <FaSnapchat className="socialIcon" size={28} />
          </div>
          <div className="socilaIconBox">
            <FaPinterest className="socialIcon" size={28} />
          </div>
        </div>
      </div>
      <div className="contactLocation">
        <div className="locationHeader">
          <h2 className="locationHeaderTitle">Our Office Location</h2>
        </div>
        <div className="locationBox">
            <div className="locationMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29576.40979636701!2d82.1689133680965!3d22.085860617848443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280aed8ea48401%3A0x4d4a6ca631556b08!2sRajkishore%20Nagar%2C%20Chhattisgarh%20495006!5e0!3m2!1sen!2sin!4v1679567364308!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="locationInfo">
                <h3 className="locationInfoTitle">Bilaspur</h3>
                <address className="locationInfoAddress">
                  Post office road,<br />
                  Rajkishore nagar,<br />
                  Bilaspur Chhattisgarh (495006)<br />
                  Mobile: +91 789734078<br />
                  Email: avadata.in@gmail.com<br />
                </address>
            </div>
        </div>
        <div className="locationBox">
            <div className="locationMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340156883!2d-0.24168157760886078!3d51.528558241207136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1679568039992!5m2!1sen!2sin" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="locationInfo">
                <h3 className="locationInfoTitle">London</h3>
                <address className="locationInfoAddress">
                21 Highfield Road,<br />
                  London UK,<br />
                  E42 5NS<br />
                  Mobile: +91 789734078<br />
                  Email: avadata.in@gmail.com<br />
                </address>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
