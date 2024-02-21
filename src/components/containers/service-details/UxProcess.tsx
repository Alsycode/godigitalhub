import React, { useState } from "react";
import servicesData from "@/components/data/servicedata";
import { useRouter } from "next/router";
const UxProcess = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [imgTab, setImgTab] = useState(0);
  const service = servicesData.find((service) => service.slug === slug);
  const processes = service?.processes;
  const serviceName = service?.name;
  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                {serviceName} Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Working {serviceName} Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
            {processes?.map((process, index) => (
                <div
                  key={index}
                  className={
                    "service-f-single fade-top " +
                    (imgTab === index ? " service-f-single-active" : " ")
                  }
                >
                  <div className="single-item">
                    <div className="intro-btn">
                      <h4>{process.name}</h4>
                    </div>
                  </div>
                  <div className="single-item p-single p-sm body-cn">
                    <p>{process.description}</p>
                  </div>
                  <button
                    className="toggle-service-f"
                    onClick={() => setImgTab(imgTab === index ? -1 : index)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcess;
