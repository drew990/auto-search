"use client";
import { useState } from "react";
import style from "../Css/hero.module.css";
import X from "../Image/HeroImage/X.png"
import Image from "next/image";

async function getAPI(Vin) {
  const res = await fetch(
    `https://auto.dev/api/vin/${Vin}?apikey=${process.env.AUTH}==`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}



export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [vinData, setVinData] = useState();
  const [vinInput, setVinInput] = useState("");

  async function popup() {
    const Vin = vinInput;
    const data = await getAPI(Vin);
    setVinData(data);

    console.log("VIN DATA", vinData);

    setIsOpen(!isOpen);
    console.log("Pop up click");
    return;
  };

  const handleChange = (e) => {
    setVinInput(e.target.value);
  };

  function PopupComponent(vinData){

    console.log("In VIN DATA COMPONENT", vinData)

    if(vinData.message = "The VIN is incorrect. It must be 17 characters"){
      return(
        <p>Null</p>
      )
    }else{
      return(
        <div style={{position: "relative"}}>
             <div className={style.exit}>
              <Image onClick={() => setIsOpen(!isOpen)} src={X} alt="X" width={40} height={40} />
              </div>
              <h2 >{vinData.years[0].year} {vinData.make.name} {vinData.model.name}</h2>
              <p>Full Description Name: {vinData.years[0].styles[0].name}</p>
              <p>Trim: {vinData.years[0].styles[0].trim}</p>
              <p>Body Type: {vinData.years[0].styles[0].submodel.body}</p>
              <p style={{ display : "flex"}}>MPG:&nbsp;{vinData.mpg.city ? (<p>{vinData.mpg.city} City</p>) : ""} {vinData.mpg.city ? (<p> / {vinData.mpg.highway} Highway</p>) : ""} </p>
              <p>HP: {vinData.engine.horsepower}</p>
              <p>Fuel Take: {vinData.engine.fuelType}</p>
              <p>Transmission Type: {vinData.transmission.transmissionType}</p>
              <p>Transmission Layout: {vinData.drivenWheels}</p>
            </div>
      )
    }
  
  }


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
            <PopupComponent vinData={vinData} />
            {/* {vinData.make.name == undefined ? <p>Not Null</p> : <p>Null</p>} */}
           {/* <div style={{position: "relative"}}>
           <div className={style.exit}>
            <Image onClick={() => setIsOpen(!isOpen)} src={X} alt="X" width={40} height={40} />
            </div>
            </div>
            <h2 >{vinData.years[0].year} {vinData.make.name} {vinData.model.name}</h2>
            <p>Full Description Name: {vinData.years[0].styles[0].name}</p>
            <p>Trim: {vinData.years[0].styles[0].trim}</p>
            <p>Body Type: {vinData.years[0].styles[0].submodel.body}</p>
            <p style={{ display : "flex"}}>MPG:&nbsp;{vinData.mpg.city ? (<p>{vinData.mpg.city} City</p>) : ""} {vinData.mpg.city ? (<p> / {vinData.mpg.highway} Highway</p>) : ""} </p>
            <p>HP: {vinData.engine.horsepower}</p>
            <p>Fuel Take: {vinData.engine.fuelType}</p>
            <p>Transmission Type: {vinData.transmission.transmissionType}</p>
            <p>Transmission Layout: {vinData.drivenWheels}</p>
            */}
          </div> 
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
