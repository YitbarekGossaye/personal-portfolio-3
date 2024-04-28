const homeData = {
  firstName: "James",
  lastName: "Smith",
  designation: "Web Developer",
  address: "New York",
  // img: "img/hero/my_photo_bg.png",
  img: "img/hero/my_copy_2.png",
  bio: "Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore",
  numberOfProject: 800,
  numberofyear: 12,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/gradient_2.png" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">Yitbarek Gossaye</h3>
                <h3 className="job">{homeData.designation} from Addis Ababa</h3>
                <p className="text">
                  I'm Passionate About Building Modern Web Applications With
                  Cutting-Edge Technologies.
                </p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Hire Me
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
