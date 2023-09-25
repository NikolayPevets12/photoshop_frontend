import Carousel from "../Carousel/Carousel";
import Sidebar from "../Sidebar/Sidebar";
import Banner1 from "../Images/robotcleaner_banner.jpg";
import Banner2 from "../Images/instax_banner (1).png";
import Banner3 from "../Images/lens_banner.png";
import "./Content.css";
import Carousel2 from "../Carousel2/Carousel2";

export default function Content() {
  return (
    <div className="container">
      <div className="content">
        <Sidebar />
        {/* <Carousel>
          <img src={Banner1} alt="" />
          <img src={Banner2} alt="" />
          <img src={Banner3} alt=""/>
        </Carousel> */}
        <div>
        <Carousel2 />
        </div>
      </div>
    </div>
  );
}
