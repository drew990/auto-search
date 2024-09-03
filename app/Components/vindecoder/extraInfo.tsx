import React, { useState } from "react";
import styles from "@/app/styles/page.module.css";

// For info not given
import notgiven from "./notgiven";

export default function extraInfo({ data }) {
  const [city, setCity] = useState(`${data["mpg"]["city"] * 1.5}px`);
  const [highway, setHighway] = useState(`${data["mpg"]["highway"] * 1.5}px`);

  console.log(city);

  return (
    <section className={styles["VinCarNameInformation"]}>
      <h3 style={{ paddingBottom: "1.5rem" }}>Extra Info</h3>
      <div>
        <div>
          <h4>Fuel Efficient</h4>
          <p style={{ display: "flex" }}>
            MPG:
            {data["mpg"]["city"] ? (
              <p style={{ padding: "0" }}>&nbsp; {data["mpg"]["city"]} City </p>
            ) : (
              ""
            )}
            {data["mpg"]["highway"] ? (
              <p style={{ padding: "0" }}>
                &nbsp; / {data["mpg"]["highway"]} Highway
              </p>
            ) : (
              ""
            )}
          </p>
          <div className={styles.MPGBar}>
            <p className={styles.MPGBarBegin}>0</p>
            <div
              // City Style
              style={{
                position: "absolute",
                border: "3px solid black",
                borderRadius: "100%",
                height: "15px",
                width: "15px",
                top: "0px",
                left: city,
                padding: 0,
              }}
            >
              {/* {data["mpg"]["city"]} */}
            </div>
            <div
              // Highway Style
              style={{
                position: "absolute",
                border: "3px solid black",
                borderRadius: "100%",
                height: "15px",
                width: "15px",
                top: "0px",
                left: highway,
                padding: 0,
              }}
            >
              {/* {data["mpg"]["city"]} */}
            </div>
            <p className={styles.MPGBarEnd}> 100</p>
          </div>
        </div>
        <p>HP: {data["engine"]["horsepower"]} </p>
        <div>
          {data["transmission"]["transmissionType"] ? (
            <p>Transmission: {data["transmission"]["transmissionType"]}</p>
          ) : (
            ""
          )}
          Transmission Type: {data["transmission"]["auto"]}
        </div>
      </div>
    </section>
  );
}
