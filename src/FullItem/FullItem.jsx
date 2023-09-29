import { useEffect, useState } from "react";
import "./FullItem.css";
import axios from "../axios";
import { useParams } from "react-router-dom";
import SidebarInfo from "../SidebarInfo/SidebarInfo";
import Layout from "../Layout/Layout";

export default function FullItem() {
  const { itemId } = useParams();
  console.log(itemId, "dd");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/getItemById/${itemId}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setIsLoading(false);
        console.log(data, "data");
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="container">
      <Layout>
        <div className="full-item">
          <SidebarInfo />
          <div>
            <div>{data.title}</div>
            {!isLoading ? (
              <div>
                <img src={data.imageUrl} alt="" />
              </div>
            ) : null}
            <p>Характеристики:</p>
            {!isLoading
              ? data.description.map((item) => <div>{item}</div>)
              : null}
          </div>
        </div>
      </Layout>
    </div>
  );
}
