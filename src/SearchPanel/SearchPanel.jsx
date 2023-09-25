import { AiOutlineSearch } from "react-icons/ai";
import "./SearchPanel.css";
import { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

export default function SearchPanel() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    if (inputValue) {
      axios
        .get(`/getItemsByName/${inputValue}`)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          console.log(res);
        })
        .catch((err) => console.warn(err));
    }
  }, [inputValue]);

  return (
    <div className="header_search">
      <input type="text" onChange={handleInputChange} />
      <button>
        <AiOutlineSearch color="white" size={25} />
      </button>
      {!isLoading && data.length > 0 ? (
        <div className="header-search-result">
          {data.map((item) => (
            <div className="search-item">
              <div>
                <img className="search-item-img" src={item.imageUrl} alt="" />
              </div>    
              <div className="search-item-link">
                <Link to={`/item/${item._id}`}>{item.title} </Link>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
