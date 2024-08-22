"use client";

import Carousel from "@/components/reuseable/Carousel";
// GLOBAL CUSTOM HOOKS
import useLightBox from "@/hooks/useLightBox";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "@/components/reuseable/links/NextLink";

export default function Hero15() {
  // use video popup
  // useLightBox();

  return (
    <div className="wrapper bg-dark">
      <div className="swiper-container swiper-hero dots-over">
        <div
          className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
          style={{ backgroundImage: 'url("/img/photos/b7.jpg")' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white ">
                  Szkolimy zawodowo
                </h2>

                <p className="lead fs-23 lh-sm mb-7 text-white ">
                  Mamy setki zadowolonych kursantów
                </p>

                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <NextLink title="Read More" href="#" className="btn btn-lg btn-outline-white rounded-pill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
