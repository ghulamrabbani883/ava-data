import React, { useState, useRef } from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FiMail, FiPhoneMissed, FiMessageSquare } from "react-icons/fi";
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from "../../utils/EmailJS";
import emailjs from "@emailjs/browser";

const DedicatedContent = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countrycode: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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
            message: "",
          });
        }
      );
  };
  return (
    <section className="dedicatedContent">
      <div className="dedicatedContentLeft">
        <div className="">
          <div className="dedicatedContentTitleBox">
            <h2 className="dedicatedContentTitle">
              When Does Your Business Need To Hire Dedicated Developers
            </h2>
          </div>
          <div className="dedicatedContentParaBox">
            <p className="dedicatedContenPara">
              The emerging world of technology has created a significant effect
              in the mobile arena. Earlier, computers and desktops were the
              channels to extract information but, augmentation in technology
              has shifted users to their mobile device right from browsing
              website till booking cab. Smartphones acts like personal computers
              and applications act like a medium to avail each and every service
              without any hassle.
            </p>
            <p className="dedicatedContenPara">
              In today's world, having online presence plays a significant role
              for your brand recognization. So, are you among that young
              entrepreneur whose mind is filled with amazing ideas and looking
              to develop an online presence? Then, hiring dedicated resources
              can help you to develop best business presence by eliminating
              risk, training, infrastructure cost, and many more things.
            </p>
            <p className="dedicatedContenPara">
              Ava-Data understands that every task requires
              different skill sets and expertise. Our development team holds
              enough experience and expertise to create a strategy as per your
              business needs. We offer customized solutions in more than 20
              industries that help businesses to manage their work in a most
              efficient way. Hire dedicated developers India from Ava-Data will be the best option to develop your business
              website or applications. It will help you to concentrate on core
              activities for your business by leaving rest on a dedicated team.
            </p>
          </div>
        </div>
        <div className="">
          <div className="dedicatedContentTitleBox">
            <h2 className="dedicatedContentTitle">
              When Does Your Business Need To Hire Dedicated Developers
            </h2>
          </div>
          <div className="dedicatedContentParaBox">
            <p className="dedicatedContenPara">
              The emerging world of technology has created a significant effect
              in the mobile arena. Earlier, computers and desktops were the
              channels to extract information but, augmentation in technology
              has shifted users to their mobile device right from browsing
              website till booking cab. Smartphones acts like personal computers
              and applications act like a medium to avail each and every service
              without any hassle.
            </p>
            <div className="dedicatedBenifits">
              <ul className="dedicatedBenefitList">
                <li>Cost-Effective And Flexibility In Hiring Model</li>
                <li>100% Source Code Authorization</li>
                <li>
                  Transparent Communication Channel During Project Development
                </li>
                <li>Adherence To Project Timeline</li>
                <li>Quality Product Deliverance</li>
              </ul>
              <ul className="dedicatedBenefitList">
                <li>Secure Development Area</li>
                <li>Skilled And Experienced Developers And Development Team</li>
                <li>Track Team Performance With Project Management Tools</li>
                <li>
                  Meetings And Daily Reports To Update Client With Project
                  Status
                </li>
                <li>Flexible Development Timings</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="dedicatedContentTitleBox">
            <h2 className="dedicatedContentTitle">
              Hire Dedicated Developers Model Include:
            </h2>
          </div>
          <div className="dedicatedContentParaBox">
            <p className="dedicatedContenPara">
              We are offering dedicated team model that consists of developers
              and team members who hold best industry experience along with
              strong technical knowledge and expertise.
            </p>
            <div className="dedicatedBenifits">
              <ul className="dedicatedBenefitList">
                <li>Hire Android App Developer</li>
                <li>Hire iPhone App Developer</li>
                <li>Hire iPad App Developer</li>
              </ul>
              <ul className="dedicatedBenefitList">
                <li>Hire Cross Platform Developer</li>
                <li>Hire PHP Developer</li>
                <li>Hire Unity 3D Developer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="dedicatedContentTitleBox">
            <h2 className="dedicatedContentTitle">
              Why Hire Dedicated Developers From Ava-Data
            </h2>
          </div>
          <div className="dedicatedContentParaBox">
            <p className="dedicatedContenPara">
              At Ava-Data, we have benefitted many industries with
              the various enterprise solution, custom solution, cross-platform
              solution, android, and iPhone solution that not only raised their
              business scales but also boosted the revenue of their business. We
              offer our expertise and skills to deliver solutions that are
              highly responsive, provides great customer satisfaction, and
              enhances user experience. Our dedicated app developers' team has
              experience working on various platforms and frameworks with best
              records to deliver absolute solutions.
            </p>
            <p className="dedicatedContenPara">
              So, if you are looking to execute the best project and want to
              deal with the brilliant and excellent team that holds enough
              experience and expertise then, Ava-Data is your
              address. Drop us your inquiry and we will get back to you within
              24 hours. Contact us now to make us your technology partner and
              Hire dedicated developers.
            </p>
          </div>
        </div>
      </div>
      <div className="dedicatedContenRight">
        <div className="contentContact">
          <h2 className="contentContactTitle">Connect with Us</h2>
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
            </div>
            <div className="formBox">
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
                  placeholder="+91"
                />
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="contact number*"
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
        <div className="contentPricing">
          <h3 className="contentPricingTitle">Our Pricing Plan</h3>
          <p className="contentPricingPara">
            Hire Dedicated Developers Starts from,
          </p>
          <div className="contentPricingBox">
            <div className="contentPricingInfo">
              <h4>Hourly</h4>
              <p>
                <span>$ 25 </span>/hour
              </p>
            </div>
            <button className="contentPricingButton">Hire Now</button>
          </div>
          <div className="contentPricingBox">
            <div className="contentPricingInfo">
              <h4>Monthly</h4>
              <p>
                <span>$ 3000 </span>/month
              </p>
            </div>
            <button className="contentPricingButton">Hire Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedContent;
