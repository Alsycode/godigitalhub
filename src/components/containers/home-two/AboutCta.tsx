import React, { useState } from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";

const AboutCta = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e: any) {
      setErrorMsg(e);
      setState(3);
    }
  };

  return (
    <section className="cta-s section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.png"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title">
                      Stay Ahead With Our Top Notch Digital Services
                    </h2>
                  </div>
                  <div className="footer__single-form">
                    {state === 2 ? (
                      <p className="font-medium mt-4 text-xl text-green-800">
                        Thanks for subscribing, you will receive mail once we launch our website.
                      </p>
                    ) : (
                      <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
                        <div className="input-email">
                          <input
                            type="email"
                            name="subscribe-news"
                            id="subscribeNews"
                            placeholder="Enter Your Email"
                            required
                          />
                          <button type="submit" className="subscribe">
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          </button>
                        </div>
                        {state === 3 && (
                          <p className="text-red-500 mt-3">{errorMsg}</p>
                        )}
                      </form>
                    )}
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
