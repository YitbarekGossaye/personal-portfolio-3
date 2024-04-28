import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Some of the recent projects I worked on
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/ec-1.png"
                    />
                    <div className="content">
                      <div className="details">
                        <h3 className="title-11">
                          <a href="https://ethio-coding.netlify.app/">
                            Ethio-Coding Web
                            <br /> Development Tutorial
                          </a>
                        </h3>
                        <span className="view_project-11">
                          <a href="https://ethio-coding.netlify.app/">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/11.png"
                    />
                    <div className="content">
                      <div className="details">
                        <h3 className="title">
                          <a href="https://personal-portfolio-yitbarek.vercel.app/">
                            Personal Portfolio
                            <br /> Website
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://personal-portfolio-yitbarek.vercel.app/">
                            View Website <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/22.png"
                    />
                    <div className="content">
                      <div className="details">
                        <h3 className="title">
                          <a href="https://yitbarek-portfolio.netlify.app/">
                            Personal Portfolio
                            <br /> Website
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://yitbarek-portfolio.netlify.app/">
                            View Website <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
