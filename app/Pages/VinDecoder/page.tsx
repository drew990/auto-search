"use client";
import { useState } from "react";
import styles from "../../css/page.module.css";
import Image from "next/image";
import car from "../../Image/FunctionLogo/Car.png";
import cloud from "../../Image/VinDecoder/cloud.png";
import color from "../../Image/VinDecoder/color.png";
import { NotificationManager } from "react-notifications";

export default function VinDecoder() {
  const [vinData, setVinData] = useState();
  const [vinInput, setVinInput] = useState("");

  async function fetchVin() {
    if (vinInput != "") {
      const res = await fetch(
        `https://auto.dev/api/vin/${vinInput}?apikey=${process.env.AUTH}==`
      );

      // console.log(res);

      const data = await res.json();

      console.log(data.message);

      if (data.message) {
        NotificationManager.error("Couldn't Find Vin!", "Error", 5000);
      } else {
        setVinData(data);
      }
    } else {
      NotificationManager.error("Please Enter In Vin", "Error", 5000);
    }

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
                <p>Transmission Layout: {vinData.drivenWheels}</p>
                <p>HP: {vinData.engine.horsepower} </p>
                <p style={{ display: "flex" }}>
                  MPG:
                  {vinData.mpg.city ? (
                    <p style={{ padding: "0" }}> {vinData.mpg.city} City </p>
                  ) : (
                    ""
                  )}
                  {vinData.mpg.highway ? (
                    <p>{vinData.mpg.highway} /Highway </p>
                  ) : (
                    ""
                  )}
                </p>
                <p>Engine Gas Type: {vinData.engine.type} </p>
                <p>
                  {vinData.transmission.transmissionType ? (
                    <p>Transmission: {vinData.transmission.transmissionType}</p>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {/* {vinData.price.baseMsrp != null ? (
                    <p>
                      Starting MSRP: ${vinData.price.baseMsrp.toLocaleString()}
                    </p>
                  ) : (
                    ""
                  )} */}
                </p>
              </div>
            </section>
            <section>
              Nerd Stats
              <div>
                <p>Cylinders: {vinData.engine.cylinder}</p>
                <p>Engine Layout: {vinData.engine.configuration}</p>
                <p>Gas Detail: {vinData.engine.fuelType}</p>
                <p>Torque: {vinData.engine.torque}</p>
                <p>Valves: {vinData.engine.totalValves}</p>
                <p>
                  Manufacturer Engine Code:
                  {vinData.engine.manufacturerEngineCode}
                </p>
                <p>Compression Ratio: {vinData.engine.compressionRatio}</p>
                <p>Gears: {vinData.transmission.numberOfSpeeds}</p>
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

              <h1>Trim Options</h1>
              {vinData.years.map((year) => (
                <div key={year.id}>
                  {year.styles.map((style) => (
                    <div key={style.id}>
                      <h3>{style.trim}</h3>
                      <p>{style.name}</p>
                    </div>
                  ))}
                </div>
              ))}
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
