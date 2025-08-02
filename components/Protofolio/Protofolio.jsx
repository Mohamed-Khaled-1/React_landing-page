import React, { useState, useEffect } from "react";
import ProtofolioStyle from "./ProtofolioStyle.module.css";
import firstImg from "../../src/assets/images/img-1.png";
import secondImg from "../../src/assets/images/img-2.png";
import thirdImg from "../../src/assets/images/img-3.png";

const images = [firstImg, secondImg, thirdImg, firstImg, secondImg, thirdImg];

export default function Protofolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (index) => {
    setCurrentImg(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentImg((prev) => {
      if (prev === images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentImg((prev) => {
      if (prev === 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  return (
    <section className="protofolio py-5 mt-5">
      <div className="container-fluid pt-5 text-center">
                  <header className="text-center lead text-uppercase pb-5">
            <h1>My Protofolio</h1>
            <div className="underline d-flex justify-content-center align-items-center">
              <span className={ProtofolioStyle.line}></span>
              <span className="star">
                <i className="fa fa-star"></i>
              </span>
              <span className={ProtofolioStyle.line}></span>
            </div>
        
          </header>
        <div className="row mt-4   ">
          {images.map((img, index) => (
            <div className="col-sm-10 col-md-4 p-4 m-auto" key={index}>
              <div
                className={`card position-relative ${ProtofolioStyle.card}`}
                onClick={() => openModal(index)}
              >
                <div className={ProtofolioStyle.layer}>
                  <i className="fa-solid fa-plus fa-2x text-white"></i>
                </div>
                <img
                  src={img}
                  alt="portfolio"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={ProtofolioStyle.popupOverlay} onClick={closeModal}>
          <div
            className={ProtofolioStyle.popupBox}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImg]}
              alt="popup"
              className={ProtofolioStyle.popupImg}
            />

            <div className={ProtofolioStyle.popupControls}>
              <i
                className={`fa-solid fa-xmark text-white fs-3 ${ProtofolioStyle.pointer}`}
                onClick={closeModal}
              ></i>
            </div>

            <div className={ProtofolioStyle.arrows}>
              <i
                className={`fa-solid fa-chevron-left text-white fs-2 ${ProtofolioStyle.pointer}`}
                onClick={prevSlide}
              ></i>
              <i
                className={`fa-solid fa-chevron-right text-white fs-2 ${ProtofolioStyle.pointer}`}
                onClick={nextSlide}
              ></i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
