import styles from "../css/page.module.css"

export default function displayFunction(){
    return(
        <div className={styles.centerFlex}>
            <div className={styles.cards}>
            <h1>Image</h1>
                <p>We send you details of the input Vin</p>
            </div>
            <div className={styles.cards}>
            <h1>Image</h1>
                <p>Checkout some listings in your area</p>
            </div>
            <div className={styles.cards}>
                <h1>Image</h1>
                <p>Have questions about a make and model? We will send you info about it</p>
            </div>
        </div>
    )
}