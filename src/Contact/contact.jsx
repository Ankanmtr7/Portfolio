import React from "react";
import mail from "../Asset/logo/email.png";
import whatsapp from "../Asset/logo/whatsapp.png";
const Contact = () => {
  return (
    <div className="contact-text">
      <h1>
        GET IN <span className="touch">TOUCH</span>
      </h1>
      <div className="contact-text">
        <p className="query">
          For questions, suggestions or anything else, a mail is enough to
          contact me.
        </p>
        <div className="contact-info">
          <p className="email">
            {" "}
            <span>
              <img src={mail} alt="Mail Icon" height={35} />
            </span>
            your-email@example.com
          </p>
          <p className="call">
            {" "}
            <span>
              <img src={whatsapp} alt="Call Icon" height={35} />
            </span>
            (123) 456-7890
          </p>
        </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Please tell me your name?" />
        <input type="email" placeholder="Please tell me your email?" />
        <textarea placeholder="Please tell me your message?"></textarea>
      </div>
      <button class="cssbuttons-io-button">
        SUBMIT
        <div class="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Contact;
