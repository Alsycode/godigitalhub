import React from "react";
import Image from "next/image";
import one from "public/images/mission/mission.jpg";
import two from "public/images/mission/vision.jpg";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our mission & Vision</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                      Assembling the team of talented people to enhance your
                      experience of IT solutions at Go Digital Hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Mission</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                Fostering Digital Excellence for Sustainable Business Growth, we provide a comprehensive suite of SaaS-based
solutions and unwavering support. We enable Small and Medium Businesses to harness the full potential of digital
innovation, achieve sustainable growth, and drive economic prosperity for tomorrow's world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Vision</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                To be the Catalyst of Transformation, Accelerating Growth for Small and Medium Businesses through Digital
Innovation, and Empowering Tomorrow's Enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
