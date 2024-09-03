import React from "react";
import styles from "@/app/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

// Extra Info Component
import ExtraInfo from "./extraInfo";

// Icons
import sedan100 from "@/app/icons/vindecoder/sedan-100.png";
import sedan50 from "@/app/icons/vindecoder/sedan-50.png";
import suv100 from "@/app/icons/vindecoder/suv-100.png";
import suv50 from "@/app/icons/vindecoder/suv-50.png";
import truck100 from "@/app/icons/vindecoder/truck-100.png";
import truck50 from "@/app/icons/vindecoder/truck-50.png";

import Fwd from "@/app/icons/vindecoder/drivetrain/Fwd.png";
import Rwd from "@/app/icons/vindecoder/drivetrain/Rwd.png";
import Awd from "@/app/icons/vindecoder/drivetrain/Awd.png";

import help from "@/app/icons/universal/help.png";

const printTransmission = (transmission) => {
  // New Variable
  let layout = "";
  // Split string
  transmission = transmission.split(" ");

  for (let i = 0; i < transmission.length; i++) {
    let firstLetter = transmission[i][0];
    layout += firstLetter.toUpperCase();
    console.log(firstLetter);
  }

  return (
    <div
      style={{
        margin: "auto",
        width: "300px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <p>Transmission Layout: {layout}</p>{" "}
      <Link
        href="https://www.adamstoyota.com/differences-between-fwd-awd-4wd-and-rwd/"
        className={styles.helpLink}
      >
        <Image src={help} alt="Help" width={25} height={25} />
      </Link>
    </div>
  );
};

export default function index({ data }) {
  console.log(data);

  return (
    <section>
      <h2>
        {data["years"][0]["year"]} {data["make"]["name"]}{" "}
        {data["model"]["name"]}
      </h2>
      {/* Layout Basic Info */}
      {/* 
        - Body Type
        - Transmission
        - MPG
        - HP
      */}
      <div className={styles["VinCarNameInformation"]}>
        <h3 style={{ paddingBottom: "1.5rem" }}>Basic Info</h3>
        <div className={styles["VinCarBorder"]}>
          {data["categories"]["vehicleStyle"] === "Sedan" ? (
            <Image src={sedan100} alt="Sedan" width={100} height={100} />
          ) : (
            <Image src={sedan50} alt="Sedan" width={100} height={100} />
          )}
          {data["categories"]["vehicleStyle"] === "SUV" ? (
            <Image src={suv100} alt="SUV" width={100} height={100} />
          ) : (
            <Image src={suv50} alt="SUV" width={100} height={100} />
          )}
          {data["categories"]["vehicleStyle"] === "Truck" ? (
            <Image src={truck100} alt="Truck" width={100} height={100} />
          ) : (
            <Image src={truck50} alt="Truck" width={100} height={100} />
          )}
        </div>
        {<p>Body: {data["categories"]["vehicleStyle"]}</p>}

        <div className={styles["VinCarBorder"]}>
          {data["drivenWheels"] === "front wheel drive" ? (
            <Image src={Fwd} alt="FWD" width={100} height={100} />
          ) : (
            <Image
              src={Fwd}
              alt="FWD"
              width={100}
              height={100}
              style={{
                opacity: 0.5,
              }}
            />
          )}
          {data["drivenWheels"] === "rear wheel drive" ? (
            <Image src={Rwd} alt="RWD" width={100} height={100} />
          ) : (
            <Image
              src={Rwd}
              alt="RWD"
              width={100}
              height={100}
              style={{
                opacity: 0.5,
              }}
            />
          )}
          {data["drivenWheels"] === "all wheel drive" ||
          data["drivenWheels"] === "four wheel drive" ? (
            <Image src={Awd} alt="AWD" width={100} height={100} />
          ) : (
            <Image
              src={Awd}
              alt="AWD"
              width={100}
              height={100}
              style={{
                opacity: 0.5,
              }}
            />
          )}
        </div>
        {printTransmission(data["drivenWheels"])}
        {/* Displays smaller details that don't require a picture */}
      </div>
      <ExtraInfo data={data} />
    </section>
  );
}
