import styles from "../css/page.module.css"

export default function footer(){
    return(
        <footer>
            <div className={styles.footerDisplay}>
                <a>Vin Decoder</a>
                <a>Listings</a>
                <a>Make & Model</a>
                <a>Contact</a>
            </div>
            <div>
                <p style={{"textAlign" : "center", "paddingBottom" : "0.5rem"}}> &copy;{new Date().getFullYear()} by Auto Search</p>          
            <p>
            Made by <a href="https://github.com/drew990">Andrew Banagas</a>
            </p>
            
            </div>
        </footer>
    )
}