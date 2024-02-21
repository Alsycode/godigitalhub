import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import star from "public/images/testimonial/star.png";
import thumb from "public/images/happyclient.jpg";
import avatar from "public/images/testimonial/avatar.png";
gsap.registerPlugin(ScrollTrigger);


const HomeTwoTestimonial =  ({ testimonials }: { testimonials: any })  => {
  console.log("testimonyccheck",testimonials)
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".testimonial-g-con").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".testimonial-g-con", {
        opacity: 0,
        scale: 1,
        y: "-100%",
        duration: 1,
      });
    }
  }, []);
  return (
    <section className="section testimonial-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="testimonial-two__thumb">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="testimonial-two__content section__content testimonial-g-con">
              <span className="sub-title">
                testimonial
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Some Of Our Respected Happy Clients Says
              </h2>
              <div className="quote">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
              <div className="testimonial-two__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                  }}
                  className="testimonial-two__slider"
                >
                  {testimonials?.data?.map((testimonial: any, index: number) => (
  <SwiperSlide key={index}> {/* Assigning unique key */}
    <div className="testimonial-two__slider-single">
      <div className="paragraph">
        <blockquote className="secondary-text">
          <q>
            {testimonial.attributes.text}
          </q>
        </blockquote>
      </div>
      <div className="author-meta">
        <div className="author-meta__thumb">
          <Image src={testimonial.attributes.image.data.attributes.formats.small.url} width={76} height={80} alt="Image" />
        </div>
        <div className="author-meta__content">
          <h5>{testimonial.attributes.name}</h5>
          <p>From UK</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
    </section>
  );
};

export default HomeTwoTestimonial;
