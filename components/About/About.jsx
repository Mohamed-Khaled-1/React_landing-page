import React from "react";
import AboutStyle from "./AboutStyle.module.css";
export default function About() {
  return (
    <>
      <section>
        <div
          className={
            "container-fluid p-0  vh-100 d-flex flex-column justify-content-center align-items-center " +
            AboutStyle.bg_about
          }
        >
          <header className="text-center text-white text-uppercase pb-5">
            <h1>About Me</h1>
            <div className="underline d-flex justify-content-center align-items-center">
              <span className={AboutStyle.line}></span>
              <span className="star">
                <i className="fa fa-star"></i>
              </span>
              <span className={AboutStyle.line}></span>
            </div>
          </header>
          <div className="container row text-white px-4 gy-4">
            <div className="col-md-6 col-sm-12 px-3">
              <div className="section">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 px-3">
              <div className="section ">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
