import "./Footer.css";
import Image from "../Images/улица вход.jpg";
import Image2 from "../Images/img1.jpg";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className=" container">
          <div className="footer_links">
            <p>erergerg</p>
          </div>
          <div className="footer_images">
            <p>Ждем Вас в Магазине по адресу: ул. Немига 3, 2-ой этаж.</p>
            <div className="images">
              <img src={Image} alt="#" />
              <img src={Image2} alt="#" />
            </div>
          </div>
          <div className="footer_info">
            <p>ООО "Купибай"</p>
            <p>
              Режим работы: Пн , Вт , Ср , Чт , Пт , Сб , Вс c 09:00 до 20:00
            </p>
            <p>Свидетельство 192347207 выдано 26.09.2014 Мингорисполком</p>
            <p>УНП 192347207</p>
            <p>220000 г. Минск ул. Тимирязева, 65-303</p>
            <p>Дата регистрации в Торговом реестре РБ: 01.02.2022</p>
          </div>
        </div>
      </section>
    </>
  );
}
