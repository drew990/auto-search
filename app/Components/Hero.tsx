"use client";
import { useEffect, useState } from "react";
import style from "../Css/hero.module.css";
import X from "../Image/HeroImage/X.png";
import Image from "next/image";
import { NotificationManager } from "react-notifications";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [vinData, setVinData] = useState();
  const [vinInput, setVinInput] = useState("");

  const popup = async () => {
    if (vinInput != "") {
      const res = await fetch(
        `https://auto.dev/api/vin/${vinInput}?apikey=${process.env.AUTH}==`
      );

      // console.log(res);

      const data = await res.json();

      console.log(data.message);

      if (data.message) {
        setIsOpen(false);
        NotificationManager.error("Couldn't Find Vin!", "Error", 5000);
      } else {
        setVinData(data);
        setIsOpen(!isOpen);
      }
    } else {
      NotificationManager.error("Please Enter In Vin", "Error", 5000);
    }
  };

  const handleChange = (e) => {
    setVinInput(e.target.value);
  };

  return (
    <div className={style.heroContainer}>
      <h1>Welcome!</h1>
      <h2>What Vehicle Are You Looking Up?</h2>
      <input
        placeholder="Enter in Vin"
        id="Vin"
        name="Vin"
        type="text"
        minLength={17}
        maxLength={17}
        value={vinInput}
        onChange={handleChange}
      />
      <button onClick={popup}>Search Car</button>
      {isOpen == true ? (
        <div className={style.darkBackground}>
          <div className={style.popupBackground}>
            {/* <PopupComponent vinData={vinData} /> */}
            {/* {vinData.make.name == undefined ? <p>Not Null</p> : <p>Null</p>} */}
            <div style={{ position: "relative" }}>
              <div className={style.exit}>
                <Image
                  onClick={() => setIsOpen(!isOpen)}
                  src={X}
                  alt="X"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h2>
              {vinData.years[0].year} {vinData.make.name} {vinData.model.name}
            </h2>
            <p>Full Description Name: {vinData.years[0].styles[0].name}</p>
            <p>Trim: {vinData.years[0].styles[0].trim}</p>
            <p>Body Type: {vinData.years[0].styles[0].submodel.body}</p>
            <p style={{ display: "flex" }}>
              MPG:&nbsp;{vinData.mpg.city ? <p>{vinData.mpg.city} City</p> : ""}{" "}
              {vinData.mpg.city ? <p> / {vinData.mpg.highway} Highway</p> : ""}{" "}
            </p>
            <p>HP: {vinData.engine.horsepower}</p>
            <p>Fuel Take: {vinData.engine.fuelType}</p>
            <p>Transmission Type: {vinData.transmission.transmissionType}</p>
            <p>Transmission Layout: {vinData.drivenWheels}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
