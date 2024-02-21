import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/one.png";
import teamMembers from "../data/teamdata";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger);
const TeamDetailsMain = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug",slug)
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);
  const teamMember = teamMembers.find((member) => member.slug === slug);
  const { name, role, description, socialLinks, imageSrc } = teamMember;

  return (
    <section className="section pb-0 team-det fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="team-det__thumb fade-top">
            <Image  src={require(`public/images/team/${imageSrc}`).default} alt="Image" /> 
              <div className="social-alt">
                <Link href={socialLinks.facebook} target="_blank" aria-label="share us on facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href={socialLinks.twitter} target="_blank" aria-label="share us on twitter">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href={socialLinks.linkedin} target="_blank" aria-label="share us on pinterest">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8">
            <div className="team-det__content fade-top">
              <div className="intro">
                <div className="intro-left">
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
                <div className="intro-right">
                  <Link href="contact-us" className="btn btn--primary">
                    Hire Me
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h5>About Me</h5>
                <p>{description}</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default TeamDetailsMain;
