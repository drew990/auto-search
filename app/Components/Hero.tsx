import style from "../Css/hero.module.css";

export default function Hero() {
  return (
    <div className={style.heroContainer}>
      <h1>Welcome!</h1>
      <h2>What Vehical Are You Looking Up?</h2>
      <form>
        <input type="text" id="Vin" name="Vin" />
        <button onClick="submit">Search Car</button>
      </form>
    </div>
  );
}
