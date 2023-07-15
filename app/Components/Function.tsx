import Image from "next/image";
import styles from "../Css/page.module.css";
import Vin from "../Image/FunctionLogo/Vin.png";
import Listing from "../Image/FunctionLogo/List.png";
import Car from "../Image/FunctionLogo/Car.png";

export default function displayFunction() {
  return (
    <div className={styles.centerFlex}>
      <div className={styles.cards}>
        <div className={styles.ImgCards}>
          <Image src={Vin} alt="Vin" width={50} height={50} layout="fixed" />
        </div>
        <p>We send you details of the input Vin</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.ImgCards}>
          <Image
            src={Listing}
            alt="Vin"
            width={50}
            height={50}
            layout="fixed"
          />
        </div>
        <p>Checkout some listings in your area</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.ImgCards}>
          <Image src={Car} alt="Vin" width={50} height={50} layout="fixed" />
        </div>
        <p>
          Have questions about a make and model? We will send you info about it
        </p>
      </div>
    </div>
  );
}
