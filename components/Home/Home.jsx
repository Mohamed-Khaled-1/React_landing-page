import React from "react";
import HomeStyle from "./HomeStyle.module.css";
export default function Home() {
  return (
    <>
      <section>
        <div
          className={
            "container-fluid p-0  vh-100 d-flex justify-content-center align-items-center " +
            HomeStyle.bg_home
          }
        >
          <header className="text-center text-white text-uppercase pb-5">
            <h1>Welcome to my website!</h1>
            <div className="underline d-flex justify-content-center align-items-center">
              <span className={HomeStyle.line}></span>
              <span className="star">
                <i className="fa fa-star"></i>
              </span>
              <span className={HomeStyle.line}></span>
            </div>
            <p className="lead">This is a simple React application.</p>
          </header>
        </div>
      </section>
    </>
  );
}
