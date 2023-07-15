"use client";
import { useState } from "react";
import styles from "../Css/navbar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={styles.NavBar}>
        <h1>NAV BAR</h1>
        {isOpen == true ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.navFlex}>
              <h4>Vin Decoder</h4>
              <h4>Listings</h4>
              <h4>Make & Models</h4>
            </div>
          </div>
        ) : (
          <h1 onClick={() => setIsOpen(!isOpen)}>Closed</h1>
        )}
      </div>
    </nav>
  );
}
