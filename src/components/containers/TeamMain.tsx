import React from "react";
import Image from "next/image";
import Link from "next/link";

import teamMembers from "../data/teamdata";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {teamMembers?.map(({ name, role, slug, socialLinks, imageSrc }, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
              <div className="team-m__single fade-top">
                <div className="thumb">
                  <Link href={{ pathname: 'team-single', query: { slug: slug } }}>
                  <Image src={`/images/team/${imageSrc}`} alt="Image" width={550} height={450} />
                  </Link>
                  <div
                    className="thumb__content"
                    style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                  >
                    <div className="info"></div>
                    <h4>
                      <Link href={{ pathname: 'team-single', query: { slug: slug } }}>{name}</Link>
                    </h4>
                    <p>{role}</p>
                    <div className="social-alt">
                      <Link href={socialLinks.facebook} target="_blank" aria-label="share us on facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href={socialLinks.twitter} target="_blank" aria-label="share us on twitter">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link href={socialLinks.linkedin} target="_blank" aria-label="share us on linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
