import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import eight from "public/images/news/eight.png";
import nine from "public/images/news/nine.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";

const BlogMain = ({ blogsData }: { blogsData: any }) => {
  const latestTwoBlogs = blogsData?.data?.slice(-2);
  console.log("latestTwoBlogs",latestTwoBlogs)
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <section className="section blog-main fade-wrapper">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-xl-8">
              <div className="blog-main__content">
              {latestTwoBlogs?.map((blog: any, index: number) => (

                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={blog.attributes.image.data.attributes.formats.large.url} width={690} height={550} alt="Image" />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by : </strong>
                          {blog.attributes.author}
                        </p>
                        <span></span>
                        <p>{blog.attributes.date}</p>
                      </div>
                      <div className="meta__right">
                        <Link href="blog">Nature</Link>
                        <Link href="blog">Health</Link>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="blog-single">
                      {blog.attributes.title}
                      </Link>
                    </h4>
                    <p>
                    {blog.attributes.description
                          .split(" ")
                          .slice(0, 100)
                          .join(" ")}
                        ...

                    </p>
                    <div className="cta">
                      <Link href="blog-single">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>))}
                
                
                <div className="pagination-wrapper">
                  <ul className="pagination">
                    <li>
                      <Link href="blog">01</Link>
                    </li>
                    <li>
                      <Link href="blog" className="active">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">03</Link>
                    </li>
                    <li>
                      <button>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="blog-main__sidebar">
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Search</h5>
                  </div>
                  <div className="widget-search">
                    <form action="#" method="post">
                      <div className="form-group-input">
                        <input
                          type="search"
                          name="blog-search"
                          id="blogSearch"
                          placeholder="Search here. . ."
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Categories</h5>
                  </div>
                  <div className="widget__list">
                    <ul>
                      <li>
                        <Link href="blog">Business</Link>
                      </li>
                      <li>
                        <Link href="blog">Job Market</Link>
                      </li>
                      <li>
                        <Link href="blog">Marketing</Link>
                      </li>
                      <li>
                        <Link href="blog">News</Link>
                      </li>
                      <li>
                        <Link href="blog">Social Media</Link>
                      </li>
                      <li>
                        <Link href="blog">Trends</Link>
                      </li>
                      <li>
                        <Link href="blog">Writing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget__head">
                    <h5 className="h5">Recent Posts</h5>
                  </div>
                  <div className="widget__latest">
                  {blogsData?.data?.map((blog: any, index: number) => (
                 
                     <div className="latest-single ">
                       <div className="latest-thumb">
                         <Link href="blog-single">
                           <Image src={blog.attributes.image.data.attributes.formats.large.url} width={76} height={80} alt="Image" />
                         </Link>
                       </div>
                       <div className="latest-content">
                         <p>{blog.attributes.date}</p>
                         <p>
                           <Link href="blog-single">
                            {blog.attributes.title}
                           </Link>
                         </p>
                       </div>
                     </div>
                  ))}
                 
                    
                    
                    
                  </div>
                </div>
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Tags</h5>
                  </div>
                  <div className="widget__tags">
                    <ul>
                      <li>
                        <Link href="blog">nature</Link>
                      </li>
                      <li>
                        <Link href="blog">health</Link>
                      </li>
                      <li>
                        <Link href="blog">galaxy</Link>
                      </li>
                      <li>
                        <Link href="blog">creative</Link>
                      </li>
                      <li>
                        <Link href="blog">art</Link>
                      </li>
                      <li>
                        <Link href="blog">business</Link>
                      </li>
                      <li>
                        <Link href="blog">space</Link>
                      </li>
                      <li>
                        <Link href="blog">biology</Link>
                      </li>
                      <li>
                        <Link href="blog">environemnt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-big ">
                  <Link href="blog-single">
                    <Image src={fourteen} alt="Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
