import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import close from "../Image/UnderConstructionLogo/white-closure.png";

export default function UnderConstruction() {
  return (
    <div className={styles.UnderConstructionBackground}>
      <div className={styles.closureBackgroundIcon}>
        <Image src={close} alt="UNDER CONSTRUCTION" width={100} height={100} />
      </div>
      <h1>This Page is Currently Under Construction</h1>
    </div>
  );
}
