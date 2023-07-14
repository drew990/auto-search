import style from "../css/hero.module.css"

export default function Hero(){
    return(
        <div className={style.heroContainer}>
            <h1>Welcome!</h1>
            <h2>What Vehical Are You Looking Up?</h2>
        </div>
    )
}