"use client";
import { useState } from "react";
import styles from "../../css/page.module.css";
import Image from "next/image";
import car from "../../Image/FunctionLogo/Car.png";

async function getAPI() {
  const res = await fetch(
    `https://auto.dev/api/vin/ZPBUA1ZL9KLA00848?apikey=${process.env.AUTH}==`
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

export default function VinDecoder() {
  const [vinData, setVinData] = useState();
  const [vinInput, setVinInput] = useState();

  async function fetchVin() {
    const data = await getAPI();
    setVinData(data);

    console.log("VIN DATA", vinData);
    return;
  }
  console.log("VIN INPUT:", vinInput);

  return (
    <div>
      <div className={`${styles["vinDecoderHero"]}`}>
        <h1>Vin Decoder</h1>
        <form>
          <input
            placeholder="Enter in Vin"
            id="Vin"
            name="Vin"
            type="text"
            value={vinInput}
            // onChange={(e) => setVinInput(e.target.value)}
          />
        </form>
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
                {vinData.years[0].year} {vinData.model.name} {vinData.make.name}
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
                <p>Starting MSRP: ${vinData.price.baseMsrp.toLocaleString()}</p>
              </div>
            </section>
            <div>
              <h4>Safety</h4>
              <ul>
                {/* {vinData.options.map((Safety) => (
                  <li>{Safety.name}</li>
                ))} */}
              </ul>
            </div>
          </div>
        ) : (
          <h2>Enter in a Vin to get details</h2>
        )}
      </div>
    </div>
  );
}
