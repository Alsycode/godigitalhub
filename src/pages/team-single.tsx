import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import { useRouter } from "next/router";
import teamMembers from "../components/data/teamdata";
const TeamDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const team = teamMembers.find((member) => member.slug === slug);
  console.log("slug",slug)
  console.log("^^^^^^^^^^",team)
const membername = team?.name; 
  
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title={membername}
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
