import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLinks;
  imageSrc: string;
  slug: string;
}
const TeamMembers: React.FC<{ teamMembers: TeamMember[] }> = ({ teamMembers }) => {
  console.log("team",teamMembers);
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      our GDH team members
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
          {teamMembers.map(({ description ,imageSrc ,name ,role ,slug }) => (
          <SwiperSlide>
            <div className="team-s__slider-single">
              <div className="team-wrap">
                <div className="thumb">
                  <Link href="team-single">
                    <Image src={require(`public/images/team/${imageSrc}`).default} alt="Image" />
                  </Link>
                  <div
                    className="thumb__content"
                    style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                  >
                    <div className="info">
                      <p>
                        “Lorem ipsum dolor sit amet consectetur adipiscing
                        elit
                      </p>
                    </div>
                    <h4>
                      <Link href="team-single">Sudheer P.S</Link>
                    </h4>
                    <p>Owner</p>
                    <div className="social-alt">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="intro">
                    <h5>
                      <Link href="team-single">{name}</Link>
                    </h5>
                    <p>{role}</p>
                  </div>
                  <hr />
                  <div className="inner">
                    <p>
                    {description}
                    </p>
                    <div className="skill-wrap">
                      <div className="skill-bar-single">
                      
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className="social">
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on facebook"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.pinterest.com/"
                      target="_blank"
                      aria-label="share us on pinterest"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>))}
           
 


       
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
