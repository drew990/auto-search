"use client";
import { useState } from "react";
import styles from "../CSS/navbar.module.css";
import NavBarLogo from "../Image/NavLogo/AutoSearch.png";
import Image from "next/image";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={styles.NavBar}>
        <div className={styles.navFlex} style={{ width: "100%" }}>
          <a style={{ margin: "0" }} href="/">
            <Image src={NavBarLogo} alt="Auto Search" width={150} />
          </a>
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        {isOpen == true ? (
          <div className={styles.NavBarOpenMenu}>
            <a href="/Pages/VinDecoder">Vin Decoder</a>
            <a href="/Pages/Listings">Listings</a>
            <a href="/Pages/MakeModels">Make & Models</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
