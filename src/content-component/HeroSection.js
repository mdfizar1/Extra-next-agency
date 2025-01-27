import style from "../css/content.module.css";
import HeroImg from "../img/hero.webp";
import HeroVideo from "../img/hero-3.mp4";
import React, {useState, useEffect} from "react";


const  HeroSection = () => {

  const [opacity, setOpacity] = useState(0);
  const [color, setColor] = useState("#293a4e");

    const handdleHeroVideoBtn = () => {
      const heroVideoWrapper = document.getElementById("heroVideoWrapper");
      heroVideoWrapper.play();
      setOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
      setColor((prevColor) => (prevColor === "#293a4e" ? "#fff" : "#293a4e"));
    }
  // useEffect for catch effect change 
    useEffect(() => {
      const heroVideoWrapper = document.getElementById("heroVideoWrapper");
    });
  return (
    <>
      <div className="heroSection">
        <div className={`container ${style.container}`}>
          <button className={style.animatedBtn}>
          <i className="fa-solid fa-arrow-down-long"></i>
          </button>
          <video  style={{opacity: opacity}} className={`w-100 ${style.vedio}`}  id="heroVideoWrapper" src={HeroVideo}></video>
          <div className={`d-none d-lg-block ${style.videoContainer}`}>
            <div className="d-flex align-items-center gap-3">
              <div>
                <button onClick={handdleHeroVideoBtn} type="button" id="heroVideoBtn" className={style.vidoBtn}>
                <video
                  loop
                  className={style.video}
                  src={HeroVideo}
                  muted
                  autoPlay
                  playsInline
                ></video>
                  <i className={`fa-solid fa-circle-play ${style.videoIcon}`}></i>
                </button>
              </div>
              <div>WATCH INTRO VIDEO</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <h4 style={{color: color}} className={style.titleText}>Digital</h4>
              <h1 style={{color: color}} className={`text-start fw-bold m-0 ${style.herotilte}`}>MARK</h1>
              <h1 style={{color: color}} className={`text-end fw-bold m-0 ${style.herotilte}`}>ETING</h1>
            </div>
            <div className="col-12 col-lg-12">
              <div className="row row-gap-3">
                <div className="col-12 col-lg-4"> 
                  Innovation drives progress and inspires creativity, empowering individuals to design solutions and foster growth. Leadership and vision play pivotal roles in achieving success, uniting teams through collaboration and motivation. Integrity and excellence ensure productivity
                </div>
                <div className="col-12 col-lg-8">
                  <img src={HeroImg} className={style.heroImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
