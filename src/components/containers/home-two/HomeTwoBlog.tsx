import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import three from "public/images/blog/three.png";
import four from "public/images/blog/four.png";
import five from "public/images/blog/five.png";
interface BlogData {
  data: {
    attributes: {
      image: {
        data: {
          attributes: {
            formats: {
              large: {
                url: string;
              };
            };
          };
        };
      };
      author: string;
      date: string;
      title: string;
      description: string;
    };
  }[];
}
const HomeTwoBlog = ({ blogsData }: { blogsData: BlogData }) => {
  return (
    <section className="section blog blog-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      news & Blog
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      what&apos;s new in blog
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="slide-group justify-content-center justify-content-lg-end">
                    <button
                      aria-label="previous item"
                      className="slide-btn prev-blog"
                    >
                      <i className="fa-light fa-angle-left"></i>
                    </button>
                    <button
                      aria-label="next item"
                      className="slide-btn next-blog"
                    >
                      <i className="fa-light fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-two__slider-w">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          roundLengths={false}
          centeredSlides={true}
          centeredSlidesBounds={false}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".next-blog",
            prevEl: ".prev-blog",
          }}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="blog-two__slider"
        >
         
         
         
          
         
         
          
         {blogsData?.data?.map((blog) => (
           <SwiperSlide>
           <div className="blog-two__slider-single topy-tilt">
             <div className="blog__single-thumb">
               <Link href="blog-single">
                 <Image src={blog.attributes.image.data.attributes.formats.large.url} width={620} height={524} alt="Image" />
               </Link>
             </div>
             <div className="blog__single-content">
               <h4>
                 <Link href="blog-single">
                  {blog.attributes.title}
                 </Link>
               </h4>
               <div className="blog__single-meta">
                 <Link href="blog" className="sub-title">
                   creative
                   <i className="fa-solid fa-arrow-right"></i>
                 </Link>
                 <p>{blog.attributes.date}</p>
               </div>
             </div>
           </div>
         </SwiperSlide>
         ))}
         
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoBlog;
