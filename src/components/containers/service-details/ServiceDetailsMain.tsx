import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
import servicesData from "@/components/data/servicedata";
import seo from "public/images/seo.jpg"
import { useRouter } from "next/router";
import whatsapp from "public/images/whatsapp.jpg"
import whatsapp2 from "public/images/whatsapp2.jpg"
import seo2 from "public/images/seo2.jpg"
import digitalmarketing from "public/images/digitalmarketing.jpg"
import  digitalmarketing2 from "public/images/digitalmarketing2.jpg"
import webdev from "public/images/webdev.jpg"
import webdev2 from "public/images/webdev2.jpg"
const ServiceDetailsMain = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("Slug:", slug);
  const service = servicesData.find((service) => service.slug === slug);
  // console.log("service",service.why)
const why = service?.why;
const Image1 = service?.image;
const Image2 = service?.image2;
const approach = service?.approach;
  return (
 
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={webdev} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                   {why}
                
             
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Our approach</h3>
                        <p>
                        {approach}
                        </p>
                        
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                      <Image src={webdev2} alt="Image" width={400} height={223} />
                      </div>
                    </div>
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

export default ServiceDetailsMain;
