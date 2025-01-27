import style from "../css/content.module.css";
import WhoWeImg from "../img/who-we-are.jpg";

const LeadingSection = () => {
  return(
    <>
     <div className={`py-5 ${style.whoWeSection}`}>
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-12 col-lg-6">
            <div className="py-5">
              <img className="w-100" src={WhoWeImg} alt={"img"} />
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-5">
            <h5 className="text-secondary">WHO WE ARE</h5>
            <h3 className={style.title} >WE ARE LEADING DIGITAL MARKETING AGENCY.</h3>
              <div className={`ps-5 mt-5 ${style.descriptionText}`}>
                <p className="py-5 fs-5 text-secondary">
                  We’re a team of strategic mdigital marketing
                  working globally with largest brands, We believe
                  that progress only happens when you refused
                  to play things safe. We combine ideas and
                  behaviors, and insights with design,
                  technological data to produce brand
                  experiences that customers love our services.   
                </p>   
                <button className="exploreBtn">
                  <a className="nav-link" href="#">Explore</a>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default LeadingSection;