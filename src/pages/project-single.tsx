import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";
import { useRouter } from "next/router";

import { useData } from "@/components/context/dataContext";
const ProjectDetails = () => {
  const data = useData();
  const projectDetailsData = data?.projects;

  const router = useRouter();
  const { slug } = router.query;
  console.log("slufffffff",slug)
  const matchedProject = projectDetailsData?.data?.find(
    (project: any) => project?.attributes?.slug === slug
  );
  console.log("matchh", matchedProject);

  // Render the project details if available
  if (!projectDetailsData) {
    return (
      <Layout header={2} footer={5} video={0}>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Brand Identity"
        navigation="Brand Identity"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectDetailsMain matchedProject={matchedProject} />
      {/* <UxProcess /> */}
    </Layout>
  );
};

export default ProjectDetails;

