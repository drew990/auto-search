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
            &copy; by <a>Andrew Banagas</a>
            </div>
        </footer>
    )
}