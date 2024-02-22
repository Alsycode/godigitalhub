import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import { DataProvider } from "../components/context/dataContext";
import { useData } from "../components/context/dataContext";
const OurPortfolio = () => {
  const data = useData();
  const workData = data?.works;
  console.log("$$$$$$$$$$$$$$$$",workData)
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
    </Layout>
  );
};

export default OurPortfolio;
