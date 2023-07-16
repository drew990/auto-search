import styles from "../../css/page.module.css"

export default function VinDecoder(){

    const fetchVin = () => {
        const options = {
            method: `POST`,
        };

        fetch(`https://auto.dev/api/vin/ZPBUA1ZL9KLA00848?apikey=ZrQEPSkKYmFuYWdhczI1QGdtYWlsLmNvbQ==`, options).then((response) => {
            if(response.ok){
              return response.json().then(data => console.log(data))
            }
            console.log(response)
              throw new Error('Api is not available') 
            })
          .catch(error => {
            console.error('Error fetching data in city data: ', error)
          })
    }

    return(
        <div className={styles.container}>
            <h1>Vin Decoder</h1>
            <form>
                <input placeholder="Enter in Vin" />
                
            </form>
            <button onClick={fetchVin()}>Submit</button>
            <div>

            </div>
        </div>
    )
}