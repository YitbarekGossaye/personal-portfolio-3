const aboutData = {
  designation: "Web Developer",
  title: "I Develop Websites that Help People",
  text: [
    "Hello! I'm A Passionate Frontend Web Developer With A Knack For Creating Interactive And Dynamic User Experiences. With A Strong Foundation In HTML, CSS, And JavaScript, I Strive To Write Clean And Efficient Code. My Expertise In Modern Libraries And Frameworks, Such As React, Allows Me To Craft Scalable And Maintainable Web Applications. My Goal Is To Create Seamless And Intuitive User Interfaces That Make The Web A Delightful Place To Be.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/css-3.svg" },
    { name: "wp", icon: "img/svg/react-2.svg" },
    { name: "drupal", icon: "img/svg/nodejs-3.svg" },
    { name: "laravel", icon: "img/svg/html-1.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div
                  className="main"
                  data-img-url="img/about/hero_img_yg.jpg"
                />
                <div className="extra_image">
                  <div className="image_inner">
                    <div
                      className="main_extra"
                      data-img-url="img/about/2.jpg"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
