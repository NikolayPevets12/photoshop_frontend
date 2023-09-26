import axios from "../axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Logotype from "../Images/Logo.png";
import "./AddItem.css";
import {BsFillTrashFill} from 'react-icons/bs'
export default function AddItem() {
  const [characteristic, setCharacteristic] = useState("");
  const [characteristicList, setCharacteristicList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const itemParams = {
    producers: ["Sony", "Sigma", "Canon", "Nikon"],
  };

  const handleChangeFile = async (event) => {
    console.log(event.target.files);
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/uploadImage", formData);
      console.log(data);
      setImageUrls([...imageUrls, data.url]);
    } catch (error) {
      console.warn(error);
      alert("Ошибка загрузки");
    }
  };

  const addNewCharacteristic = (event) => {
    event.preventDefault();
    if (characteristic != "") {
      setCharacteristicList([...characteristicList, characteristic]);
      setCharacteristic("");
      console.log(characteristicList);
    }
  };
  const handleSetCharacteristic = (event) => {
    setCharacteristic(event.target.value);
    console.log(characteristic);
  };

  const elements = characteristicList.map((item) => {
    return <p>{item}</p>;
  });

  return (
    <div className="form-wrapper">
      <img src={Logotype} />
      <div>Добавление нового товара:</div>
      <input type="file" onChange={handleChangeFile} />
      {/* {imageUrl ? <img src={`http://localhost:3001${imageUrl}`}/> : null} */}
      <div className="images">
        {imageUrls.map((item, index) => {
          return (
            <div className="image-wrap">
              <div className="image-overlay"><BsFillTrashFill size={50} color='white'/></div>
              <img className="img-preview" src={`http://localhost:3001${item}` } />
            </div>
            
          );
        })}
      </div>

      <form>
        <select>
          <option value="">Выберите опцию</option>
          <option value="option1">Опция 1</option>
          <option value="option2">Опция 2</option>
          <option value="option3">Опция 3</option>
        </select>
        <div>{elements}</div>
        <div>Технические характеристики</div>
        <input
          type="text"
          onInput={handleSetCharacteristic}
          value={characteristic}
        />
        <button onClick={addNewCharacteristic}>add char</button>
        <p>Страна-производитель:</p>
        <input type="text" />
        <p>Импортер:</p>
        <input type="text" />
        <p>Гарантийный срок, мес:</p>
        <input type="text" />
        <p>Срок службы, мес:</p>
        <input type="text" />
        <input type="submit" value="Добавить товар" disabled />
      </form>
    </div>
  );
}
