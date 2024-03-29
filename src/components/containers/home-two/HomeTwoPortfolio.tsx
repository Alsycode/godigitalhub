import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";



const HomeTwoPortfolio= ({ projectsData }: { projectsData: any }) => {
  console.log("portfoliodat",projectsData)
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
       Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                Company Profile
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                All
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".design" ? "active" : ""}
                onClick={() => handleTabClick(".design")}
              >
                <span>02</span>
                Design
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".development" ? "active" : ""}
                onClick={() => handleTabClick(".development")}
              >
                <span>03</span>
                Development
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".technology" ? "active" : ""}
                onClick={() => handleTabClick(".technology")}
              >
                <span>04</span>
                Technology
              </button>
            </div>
          </div>
        </div>

        <div className="row masonry-grid">
           {projectsData?.data?.map((work: any, index: number) => (
    <div
      key={index}
      className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main ${activeFilter === '.' + work?.attributes?.categories || activeFilter === '*' ? '' : 'hidden'}`}
    >
      <div className="portfolio__single topy-tilt fade-top">
      <Link href={{ pathname: 'portfolio'  }}>
          <Image src={work?.attributes?.image?.data?.attributes?.formats?.large?.url} width={450} height={550} alt="Image" />
        </Link>
        <div className="portfolio__single-content">
        <Link href={{ pathname: 'portfolio' }}>
            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
          </Link>
          <h4>
          <Link href={{ pathname: 'portfolio' }}>{work.attributes.name}</Link>
          </h4>
        </div>
      </div>
    </div>
  ))} 
        </div>

      </div>
    </section>
  );
};



export default HomeTwoPortfolio;