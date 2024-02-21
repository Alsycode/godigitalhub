import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";
import { useRouter } from "next/router";

const ProjectDetails = ({ projectDetailsData }) => {
  const router = useRouter();
const { slug } = router.query;
const matchedProject = projectDetailsData?.data?.find(
  (project) => project.slug === slug
);
console.log("matchh",matchedProject)
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
      <ProjectDetailsMain projectDetailsData={projectDetailsData} />
      <UxProcess />
    </Layout>
  );
};

export default ProjectDetails;

export const getServerSideProps = async () => {
  const projectDetailsApiUrl = 'http://localhost:1337/api/projects';
  const authToken = '36d91d755f6933406f808c6bf39e61dfc5f91f83192d27953c1408254968d8370a23e758ffaa7a7aeefdebb91c21a8d6b7eb8dd771d427e6ee01f7e42e831681d35e263fc04f9209e5e02b6d5473a7899c896a983904eac92709ec1bb86fc2b726314bb0cebb7cfec92e46cd284328bf1a21e17736509a74b2ced35db5ef0265';

  try {
    const response = await fetch(projectDetailsApiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    const projectDetailsData = await response.json();

    return {
      props: {
        projectDetailsData,
      },
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return {
      props: {
        projectDetailsData: null,
        error: "Failed to fetch project details",
      },
    };
  }
};
