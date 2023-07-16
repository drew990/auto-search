"use client";
import { useState } from "react";
import styles from "../Css/navbar.module.css";
import NavBarLogo from "../Image/NavLogo/AutoSearch.png"
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={styles.NavBar}>
        <div className={styles.navFlex} style={{width: "100%"}}>
          <Image src= {NavBarLogo} alt="Auto Search" width={150} />
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded/>
        </div>
        {isOpen == true ? (
          <div className={styles.NavBarOpenMenu}>
              <Link href={{pathname:"/VinDecoder"}}>Vin Decoder</Link>
              <a>Listings</a>
              <a>Make & Models</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
