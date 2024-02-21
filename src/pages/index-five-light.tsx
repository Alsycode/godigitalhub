import React from "react";
import Layout from "@/components/layout/Layout";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
const testimonialsData = [1,2]; 
const HomeFiveLight = () => {
  return (
    <Layout header={5} footer={4} video={true}>
      <HomeFiveBanner />
      <HomeTestimonial testimonials={testimonialsData} />
    </Layout>
  );
};

export default HomeFiveLight;
