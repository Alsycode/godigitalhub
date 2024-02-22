import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";
import { useRouter } from "next/router";
import { useData } from "@/components/context/dataContext";
const BlogPage = () => {
  const data = useData();
  const blogsData = data?.blogs;
  console.log("blogs",blogsData)
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Blogs" navigation="Blogs" />
      <BlogMain blogsData={blogsData} />
    </Layout>
  );
};

export default BlogPage;

