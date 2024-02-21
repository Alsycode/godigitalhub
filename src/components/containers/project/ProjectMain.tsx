import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projectlist/buildomaven.png";
import hrfour from "public/images/projectlist/careon.png";
import hrtwo from "public/images/projectlist/gmacs.png";
import hrthree from "public/images/projectlist/holyGrace.png";

import hrfive from "public/images/projectlist/london.png";
import hrsix from "public/images/projectlist/satm.png";
import hrseven from "public/images/projectlist/svjs.png";
import hreight from "public/images/projectlist/londonmumbai.png";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const ProjectMain = ({ projectsData }: { projectsData: any }) => {
  //  const {name, slug, into, specifics} = projectsData.data[0];
   const [data,setData] = useState([]);
  
   useEffect(() => {
    setData(projectsData);
  }, []); 
  const projects = projectsData.data;
 const image = projectsData?.data[1]?.attributes?.image?.data?.attributes?.formats?.large?.url;
//   const projectWithSatmSlug = sl.find(project => project.slug === 'satm');

// if (projectWithSatmSlug) {
//   console.log('Found project with "satm" slug:', projectWithSatmSlug);
// } else {
//   console.log('No project found with "satm" slug.');
// }
  console.log("LLLLLL",image)
// const names = projectsData;
// const naames = names.data;
  //  console.log("fgg",naames)
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="section project-sl" ref={slider}>
 {projects?.map((project: any, index: number) => (
    <div className="project-sl__single" key={index}>
      <div className="thumb">
        <Link href={{ pathname: "/project-single", query: { slug: project?.attributes?.slug } }}>
        <Image src={project?.attributes?.image?.data?.attributes?.formats?.large?.url} alt="Image" width={402} height={525}/> 
        </Link>
      </div>
      <div className="content">
        <h2>
          <Link href="project-single">{project.attributes.name}</Link>
        </h2>
      </div>
    </div>
  ))} 
</section>
  );
};

export default ProjectMain;
