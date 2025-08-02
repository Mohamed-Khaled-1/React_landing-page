import React from "react";
import FooterStyle from "./FooterStyle.module.css";
export default function Footer() {
  return (
    <>
      <div className="container-fluid p-0 text-white ">
        <div className={FooterStyle.bg_main + " footer p-3 text-center "}>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-12 p-4 ">
              <div className="location p-2">
                <h3 className="fw-bold ">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12 p-4  ">
              <div className="Websites p-2">
                <h3 className="fw-bold">AROUND THE WEB</h3>
                <ul className="list-unstyled d-flex justify-content-center gap-5">
                  <li className={FooterStyle.footer_icon}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className={FooterStyle.footer_icon}>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li className={FooterStyle.footer_icon}>
                    <i className="fa-brands fa-linkedin"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12 p-4 ">
              <div className="about p-2">
                <h3 className="fw-bold">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            FooterStyle.bg_darker_main + " copy_right p-3 text-center "
          }
        >
          <h6>Copyright © Your Website 2021</h6>
        </div>
      </div>
    </>
  );
}
