import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("contact-name");
    const email = formData.get("contact-email");
    const subject = formData.get("subject");
    const message = formData.get("contact-message");
    console.log("Subject:", subject); // Log the subject

    try {
      const response = await fetch("/api/apifour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        // Optionally, redirect the user or show a success message
      } else {
        console.error("Failed to send email");
        // Handle the failure scenario
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error scenario
    }
  };


  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:197-90-56-780">Mobile : +91 8891064567</Link>
                </p>
                {/* <p>
                  <Link href="tel:197-90-56-780">Fax : +44-208-1234567</Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info.company@gmail.com">
                    godigitalhub@gmail.com
                  </Link>
                </p>
                {/* <p>
                  <Link href="mailto:info.company@gmail.com">
                    Info.company@yahoo.com
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/iyvGnAXHLDm7qzPV9"
                    target="_blank"
                  >
                    210, Annex - 2 INFOPARK TECHNOLOGY BUSINESS CENTRE JLN Stadium, Kaloor, Ernakulam, Kerala 682017
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Sat 09:30 am - 05:30 pm</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                  
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15716.936095278621!2d76.3017809!3d9.997518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5aa6bb3d4b%3A0xe760b508d731ca65!2sGo%20Digital%20Hub!5e0!3m2!1sen!2sin!4v1708342735702!5m2!1sen!2sin"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form onSubmit={handleSubmit} className="section__content-cta">
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select name="subject" className="subject">
                          <option data-display="Subject">Subject</option>
                          <option value="Account">Account</option>
                          <option value="Service">Service</option>
                          <option value="Pricing">Pricing</option>
                          <option value="Support">Support</option>
                        </select>
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
