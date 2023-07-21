"use client";
import Image from "next/image";
import styles from "../../Css/page.module.css";
import city from "../../Image/ListingsLogo/building.png";
import state from "../../Image/ListingsLogo/country.png";
import radius from "../../Image/ListingsLogo/radar.png";
import { useState } from "react";

export default function listing() {
  const [valueRange, setValueRange] = useState(25);

  function handleChange(e) {
    setValueRange(e.target.value);
    console.log(valueRange);
  }

  return (
    <div>
      <div className={styles.listingsBackgroundHero}>
        <h1>Find Listings In Your Area</h1>
      </div>
      <form className={styles.formListings}>
        <div>
          <div className={styles.ImgCards}>
            <Image src={state} alt="S" width={50} height={50} layout="fixed" />
          </div>
          <input placeholder="State" required />
        </div>
        <div>
          <div className={styles.ImgCards}>
            <Image src={city} alt="C" width={50} height={50} layout="fixed" />
          </div>
          <input placeholder="City" required />
        </div>
        <div>
          <div className={styles.ImgCards}>
            <Image src={radius} alt="R" width={50} height={50} layout="fixed" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Radius: {valueRange}</p>
            <input
              type="range"
              min="25"
              max="250"
              step="25"
              value={valueRange}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}
