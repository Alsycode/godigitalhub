import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import HomeTwoOffer from "@/components/containers/home-two/HomeTwoOffer";

import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomeTwoTestimonial from "@/components/containers/home-two/HomeTwoTestimonial";
import HomeTwoBlog from "@/components/containers/home-two/HomeTwoBlog";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import NextPageNull from "@/components/containers/home/NextPageNull";
import { useData } from "../components/context/dataContext";
import { useEffect } from "react";
import { DataProvider } from "../components/context/dataContext";
const Home = () => {
 const data = useData() ; // Access the data using the useData hook

  // Check if data exists and if blogs data exists
  // const blogs = data && data.blogs ? data.blogs : [];
  console.log("******************",data)
   const blogsData = data?.blogs;
   const projectsData = data?.projects;
   const worksData = data?.works;
   const testimonials = data?.testimonies;
   console.log("testimonies",testimonials)
   console.log("^^^^^^",projectsData)
   console.log("worksData",worksData)
  return (
    <DataProvider>
    <Layout header={2} footer={2} video={true}>
  <HomeTwoBanner />
      <AboutSponsor />
      <HomeTwoAward />
      <HomeTwoOffer />
      <HomeTwoModal />
      <HomeTwoPortfolio worksData={worksData} />
      <HomeTwoTestimonial testimonials={testimonials}/>
      <HomeTwoBlog blogsData={blogsData}/> 
      <HomeTwoCta />
      <NextPageNull />
    </Layout>
    </DataProvider>
  );
};

export default Home;
