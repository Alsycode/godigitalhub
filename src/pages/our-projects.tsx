// pages/our-projects.tsx

import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurProjects = ({ projectsData }) => {
  console.log("Server-side projects data:", projectsData); // Log server-side projects data

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Projects" navigation="Our Projects" />
      <ProjectMain projectsData={projectsData} />
      <WorkStepsProject />
      <CtaTwo />
    </Layout>
  );
};

export default OurProjects;

export const getServerSideProps = async () => {
  const projectApiUrl = 'http://localhost:1337/api/projects?populate=*';
  const authToken = '36d91d755f6933406f808c6bf39e61dfc5f91f83192d27953c1408254968d8370a23e758ffaa7a7aeefdebb91c21a8d6b7eb8dd771d427e6ee01f7e42e831681d35e263fc04f9209e5e02b6d5473a7899c896a983904eac92709ec1bb86fc2b726314bb0cebb7cfec92e46cd284328bf1a21e17736509a74b2ced35db5ef0265';

  try {
    const response = await fetch(projectApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const projectsData = await response.json();

    console.log("Server-side fetched projects data:", projectsData); // Log fetched projects data

    return {
      props: {
        projectsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        projectsData: null,
        error: "Failed to fetch data",
      },
    };
  }
};
