import Carousel from "../Carousel/Carousel";
import Sidebar from "../Sidebar/Sidebar";
import Banner1 from "../Images/Watch_banner.jpg";
import Banner2 from "../Images/oculus_banner_small.jpg";
import Banner3 from "../Images/tws_banner.jpg";
import "./Content.css";
import Carousel2 from "../Carousel2/Carousel2";
import Layout from "../Layout/Layout";

export default function Content() {
  return (
    <div className="container">
      <Layout>
        <div className="content">
          <Sidebar />
          <div className="links">
            <Carousel2 />
            <div className="content-links">
              <img src={Banner1}></img>
              <img src={Banner2}></img>
              <img src={Banner3}></img>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
