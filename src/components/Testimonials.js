import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
const Testimonials = () => {
  useEffect(() => {
    dataImage();
    imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    I was impressed with Yitbarek's ability to develop a
                    user-friendly platform that helped artists connect with
                    audiences in new ways. Thank you Yitbarek.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person-1.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Selena Brook</h3>
                      <span>ABC Studio</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    Working with Yitbarek was a pleasure. His clear
                    communication and efficient coding practices significantly
                    streamlined our development process.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person-2.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>David Parker</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    Yitbarek's exceptional problem-solving skills were
                    invaluable during our project. When we encountered
                    unexpected technical challenges, he quickly solved them.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person-3.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3>Elijah Smith</h3>
                      <span>Vivaco Group</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
