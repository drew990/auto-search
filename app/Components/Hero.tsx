"use client";
import { useState } from "react";
import style from "../Css/hero.module.css";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(true);

  const popup = () => {
    setIsOpen(!isOpen);
    console.log("Pop up click");
    return;
  };

  return (
    <div className={style.heroContainer}>
      <h1>Welcome!</h1>
      <h2>What Vehicle Are You Looking Up?</h2>
      <input type="text" id="Vin" name="Vin" placeholder="Look Up A Vin" />
      <button onClick={popup}>Search Car</button>
      {isOpen == true ? (
        <div className={style.darkBackground}>
          <div className={style.popupBackground}>
            <h1 onClick={() => setIsOpen(!isOpen)}>Pop Up</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
