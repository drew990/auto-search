"use client";
import { useEffect, useState } from "react";
import styles from "../../css/page.module.css";
import Image from "next/image";
import car from "../../Image/FunctionLogo/Car.png";
import cloud from "../../Image/VinDecoder/cloud.png";
import color from "../../Image/VinDecoder/color.png";

async function getAPI(Vin) {
  const res = await fetch(
    `https://auto.dev/api/vin/${Vin}?apikey=${process.env.AUTH}==`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return;
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function VinDecoder() {
  const [vinData, setVinData] = useState();
  const [vinInput, setVinInput] = useState("");

  async function fetchVin() {
    const Vin = vinInput;
    const data = await getAPI(Vin);
    setVinData(data);

    console.log("VIN DATA", vinData);
    return;
  }

  const handleChange = (e) => {
    setVinInput(e.target.value);
  };

  return (
    <div>
      <div className={`${styles["vinDecoderHero"]}`}>
        <h1>Vin Decoder</h1>
        {/* <form></form> */}
        <input
          placeholder="Enter in Vin"
          id="Vin"
          name="Vin"
          type="text"
          maxLength={17}
          value={vinInput}
          onChange={handleChange}
        />

        <button onClick={fetchVin}>Submit</button>
      </div>
      <div className={styles.container}>
        <h1>Car Details Below</h1>
        {vinData != null ? (
          <div>
            <section className={styles.VinCarNameSection}>
              <div
                className={styles.ImgCards}
                style={{ margin: "0 1rem 0 0 " }}
              >
                <Image
                  src={car}
                  alt="C"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </div>
              <h1>
                {vinData.years[0].year} {vinData.make.name} {vinData.model.name}
              </h1>
            </section>
            <section>
              <h2 style={{ margin: "1rem 0", textAlign: "center" }}>
                Basic Information
              </h2>
              <div className={styles.VinCarNameInformation}>
                <p>Body Type: {vinData.categories.vehicleType}</p>
                <p>HP: {vinData.engine.horsepower} </p>
                <p>
                  MPG: {vinData.mpg.city} City / {vinData.mpg.highway} Highway
                </p>
                <p>Engine Gas Type: {vinData.engine.type} </p>
                <p>Transmission: {vinData.transmission.transmissionType}</p>
                {/* <p>Starting MSRP: ${vinData.price.baseMsrp.toLocaleString()}</p> */}
              </div>
            </section>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "3.5rem 0",
                }}
              >
                <div
                  className={styles.ImgCards}
                  style={{ margin: "0 1rem 0 0" }}
                >
                  <Image
                    src={color}
                    alt="C"
                    width={50}
                    height={50}
                    layout="fixed"
                  />
                </div>
                <h2>Colors Options</h2>
              </div>

              {vinData.colors.map((color) => (
                <div className={` ${styles["styleCards"]}`}>
                  <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
                    {color.category}
                  </h3>
                  <ul className={` ${styles["column-list"]}`}>
                    {color.options.map((option) => (
                      <li key={option.id}>{option.name}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h1>Extra Features</h1>
              <ul>
                {/* {vinData.options.map((Safety) => (
                  <li>{Safety.name}</li>
                ))} */}
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>Enter in a Vin to get details</h2>
            <div
              className={styles.closureBackgroundIcon}
              style={{ margin: "3rem auto 0 auto " }}
            >
              <Image
                src={cloud}
                alt="C"
                height={100}
                width={100}
                layout="fixed"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
