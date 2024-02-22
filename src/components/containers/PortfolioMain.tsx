import React from "react";
import Image from "next/image";
import Link from "next/link";
import eleven from "public/images/projectlist/buildomaven.png";
import twelve from "public/images/projectlist/careon.png";
import thirteen from "public/images/projectlist/gmacs.png";
import fourteen from "public/images/projectlist/holyGrace.png";
import fifteen from "public/images/projectlist/london.png";
import sixteen from "public/images/projectlist/satm.png";
import seventeen from "public/images/projectlist/svjs.png";
import eighteen from "public/images/projectlist/londonmumbai.png";
import { useData } from "../context/dataContext";


const PortfolioMain = () => {
  const data = useData();
  const projectsData = data?.projects;
  console.log("projectsData",projectsData)
   const namess =  projectsData?.data[0];
   console.log("namess", namess)
   function getItemInfo(index: number) {
     const item = projectsData?.data[index]?.attributes;

    return {
       title: item?.name,
       slug: item?.slug,
       image: item?.image?.data?.attributes?.formats?.large?.url,
     };
   }

   const firstItem = getItemInfo(0);
   const secondItem = getItemInfo(1);
   const thirdItem = getItemInfo(2);
   const fourthItem = getItemInfo(3);
   const fifthItem = getItemInfo(4);
   const sixthItem = getItemInfo(5);
   const seventhItem = getItemInfo(6);
 const eighthItem = getItemInfo(7);
   const ninthItem = getItemInfo(8);
console.log("firstItem",firstItem)

  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href={{ pathname: "/project-single", query: { slug: firstItem.slug } }}>
                  <Image src={firstItem.image} width={690} height={706} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: firstItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: thirdItem.slug } }}>{firstItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>
                  <Image src={secondItem.image} width={690} height={706} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>{secondItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: thirdItem.slug } }}>
                  <Image src={thirdItem.image} width={330} height={419} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: thirdItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: thirdItem.slug } }}>{thirdItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: fourthItem.slug } }}>
                  <Image src={fourthItem.image} width={330} height={419} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: fourthItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: fourthItem.slug } }}>{fourthItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>
                  <Image src={fifthItem.image}  width={330} height={419} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>{fifthItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>
                  <Image src={fifthItem.image} width={330} height={419} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: fifthItem.slug } }}>{fifthItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: firstItem.slug } }}>
                  <Image src={firstItem.image} width={690} height={706} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: firstItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>{firstItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
              <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>
                  <Image src={secondItem.image} width={690} height={706} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                <Link href={{ pathname: "/project-single", query: { slug: secondItem.slug } }}>{secondItem.title}</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
