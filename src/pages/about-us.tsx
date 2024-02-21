import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import { useData } from "@/components/context/dataContext";
import teamMembers from "@/components/data/teamdata";
import test from "node:test";
const AboutUs = () => {
  const data = useData();
const testimonials = data?.testimonies;
  console.log("))))))))))))))))))))))",testimonials)
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoModal />
      <Agency />
      <TeamMembers teamMembers={teamMembers} />
      <HomeTestimonial testimonials={testimonials}/>
      <AboutSponsor />
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;
