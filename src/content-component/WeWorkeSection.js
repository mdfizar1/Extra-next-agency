import style from "../css/content.module.css";
import CreativeImg from "../img/creative.webp"
import CreativeImgTo from "../img/creativeTo.png"
import InnovateImg from "../img/innovate.png"
import ExpressImg from "../img/express.png"
import BrandName from "../img/brand-name.png"
import Name from "../img/name.png"

const WeWorkSection = () => {
  return(
    <>
      <div className={`py-5 ${style.weWorkSection}`}>
        <h3 className="section-title text-center py-5">WE WORKED WITH GLOBAL LARGEST BRANDS</h3>
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img className="" src={CreativeImg} alt={"img"}/>
            </div>
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img className="" src={CreativeImgTo} alt={"img"}/>
            </div>
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img className="" src={InnovateImg} alt={"img"}/>
            </div>
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img className="" src={ExpressImg} alt={"img"}/>
            </div>
            <div className="col-12 col-md-4 col-lg-2 text-center">
              <img className="" src={BrandName} alt={"img"}/>
            </div>
            <div className="col-12 col-md-4 col-lg-2 text-center">
             <img className="" src={Name} alt={"img"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WeWorkSection;