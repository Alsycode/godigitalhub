import React from "react";
import Image from "next/image";
import avatar from "public/images/testimonial/avatar.png";
interface Testimony {
  attributes: {
    text: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
    name: string;
    designation: string;
  };
}

interface Props {
  testimonies: {
    data: Testimony[];
  };
}

const ClientFeedbackMain: React.FC<Props> = ({ testimonies }) => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {testimonies?.data?.map((testimony, index) => (
          <div key={index} className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>{testimony?.attributes?.text}</p> {/* Display testimony content */}
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <img src={testimony?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} alt="Author Avatar" /> {/* Display author avatar */}
                </div>
                <div className="author-meta">
                  <h5>{testimony?.attributes?.name}</h5> {/* Display author name */}
                  <p>{testimony?.attributes?.designation}</p> {/* Display author role */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <div className="section__content-cta text-center">
            <button className="btn btn--secondary">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ClientFeedbackMain;
