import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";
import { useData } from "@/components/context/dataContext";
import { DataProvider } from "@/components/context/dataContext";
const ClientFeedback = () => {
  const { testimonies }= useData();
  console.log("clientfeedback",testimonies)
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Client's Feedback" navigation="Client's Feedback" />
      <ClientFeedbackMain testimonies={testimonies} />
    </Layout>
  );
};

export default ClientFeedback;
