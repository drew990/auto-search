import styles from "../../Css/page.module.css";
import UnderConstruction from "@/app/Components/UnderConstruction";

export default function MakeAndModels() {
  async function fetchVin() {
    console.log("FETCH MAKE AND MODEL CALLED");
    return;
  }

  return (
    <div>
      <UnderConstruction />
      {/* onClick={fetchVin} */}
    </div>
  );
}
