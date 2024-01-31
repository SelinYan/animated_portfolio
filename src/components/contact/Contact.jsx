import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5byo0h",
        "template_pilpn2g",
        formRef.current,
        "OrTshzZFgLRMDcve5"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Email</h2>
          <span>selinyan2016@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Vantaa, Finland</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>0449754273</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <motion.button whileHover={{ backgroundColor: "#6f2dbd" }}>
            Submit
          </motion.button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </div>
  );
};

export default Contact;
