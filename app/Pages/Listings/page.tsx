"use client";
import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import cloud from "../../Image/VinDecoder/cloud.png";
import state from "../../Image/ListingsLogo/country.png";
import radius from "../../Image/ListingsLogo/radar.png";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import ImgNotFound from "../../Image/ListingsLogo/404/vehicle-image-notavailable-320x240.jpg";
import { useEffect, useState } from "react";
import UnderConstruction from "@/app/Components/UnderConstruction";

// &year_min=2016

export default function listing() {
  // const [valueRange, setValueRange] = useState(25);
  const [locationSettings, setLocationSettings] = useState("city");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [locationCityOpen, setlocationCityOpen] = useState(true);
  const [locationZipCodeOpen, setLocationZipCodeOpen] = useState(false);
  const [listingData, setListingData] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [yearMin, setYearMin] = useState<number>(2016);
  const [conditionCar, setConditionCar] = useState("new");
  const [carMaker, setCarMaker] = useState("Honda");
  const [maxCarPrice, setMaxCarPrice] = useState<number>(999999);
  const [isOpen, setIsOpen] = useState({
    locationSettings: false,
    makeModelSettings: false,
  });

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setValueRange(e.target.value);
  //   console.log(valueRange);
  // }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  async function getListings(
    e: React.ChangeEvent<HTMLInputElement>,
    pageNumber = pageNum
  ) {
    e.preventDefault();
    console.log("getListings Called. Info Given");

    if (locationSettings === "city") {
      console.log(city, state);

      const res = await fetch(
        `https://auto.dev/api/listings?apikey=${process.env.AUTH}==&city=${city}&state=${state}`
      );

      const data = await res.json();

      console.log(data);

      if (data.message) {
        NotificationManager.error("Couldn't Find City!", "Error", 5000);
      } else {
        setListingData(data);
        console.log(listingData);
      }
    } else {
      console.log(zipCode);
      console.log(pageNum);

      const res = await fetch(
        `https://auto.dev/api/listings?apikey=${process.env.AUTH}==&zip=${zipCode}&sort_filter=distance:asc&page=${pageNumber}&year_min=${yearMin}&condition[]=${conditionCar}&make=${carMaker}&price_max=${maxCarPrice}`
      );

      const data = await res.json();

      console.log(data);

      if (data.message) {
        NotificationManager.error("Couldn't Find Zip Code!", "Error", 5000);
      } else {
        setListingData(data);
      }
    }

    return;
  }

  const PreviousPage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNum(pageNum - 1);
    setListingData("");
    await getListings(e, pageNum - 1);

    return;
  };

  const NextPage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setPageNum(pageNum + 1);
    setListingData("");
    await getListings(e, pageNum + 1);

    return;
  };

  function handleChangeYear(e: React.ChangeEvent<HTMLInputElement>) {
    setYearMin(e.target.value);
  }

  function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
    setMaxCarPrice(e.target.value);
  }

  return (
    <div>
      {/* <UnderConstruction /> */}
      <div className={styles.listingsBackgroundHero}>
        <NotificationContainer />
        <h1 className={styles.headerGradient}>Find Listings In Your Area</h1>
      </div>
      <div className={styles.listingConatiner}>
        <aside>
          <h2>Filter</h2>
          <form
            onSubmit={(e) => {
              setPageNum(1);
              getListings(e, 1);
            }}
          >
            <button type="submit">Search</button>
            {/* onClick={setIsOpen()} */}
            <h3>Location</h3>
            <p>{isOpen.locationSettings ? "True" : "False"}</p>
            {locationCityOpen === true ? (
              <>
                <p>Search by City</p>
                <input
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <p
                  onClick={() => {
                    setLocationSettings("zip");
                    setlocationCityOpen(false);
                    setLocationZipCodeOpen(true);
                  }}
                >
                  Zip Code
                </p>
              </>
            ) : (
              ""
            )}
            {locationZipCodeOpen === true ? (
              <>
                <p
                  onClick={() => {
                    setLocationSettings("city");
                    setlocationCityOpen(true);
                    setLocationZipCodeOpen(false);
                  }}
                >
                  Search by City
                </p>
                <p>Zip Code</p>
                <input
                  placeholder="Zip Code"
                  // type="number"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  maxLength={5}
                  minLength={5}
                  required
                />
              </>
            ) : (
              ""
            )}

            <h3>Make & Model</h3>
            <p>Year Min</p>
            <p>{yearMin}</p>
            <input
              type="range"
              min={1990}
              max={2024}
              step={1}
              onChange={handleChangeYear}
              value={yearMin}
              required
            />

            <p>Condition</p>
            <select
              defaultValue={conditionCar}
              onChange={(e) => setConditionCar(e.target.value)}
            >
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="certified%20pre-owned">Pre-Certified</option>
            </select>
            <p>Brand</p>
            <select
              defaultValue={carMaker}
              onChange={(e) => setCarMaker(e.target.value)}
            >
              {/* <option>Alfa Romeo</option> */}
              <option value="All">All</option>
              <option value="Acura">Acura</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Bentley">Bentley</option>
              <option value="Buick">Buick</option>
              <option value="Cadillac">Cadillac</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Dodge">Dodge</option>
              <option value="Ferrari">Ferrari</option>
              {/* <option value="Fiat">Fiat</option> */}
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Jeep">Jeep</option>
              <option value="Kia">Kia</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Lexus">Lexus</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Nissan">Nissan</option>
              <option value="Porsche">Porsche</option>
              <option value="Subaru">Subaru</option>
              <option value="Tesla">Tesla</option>
              <option value="Toyota">Toyota</option>
            </select>
            <p>Max Price</p>
            <p>${maxCarPrice}</p>
            <input
              type="range"
              min={10000}
              max={999999}
              step={1000}
              onChange={handleChangePrice}
              value={maxCarPrice}
              required
            />
          </form>
        </aside>
        <section style={{ margin: "3rem auto" }}>
          {listingData != "" ? (
            <>
              <h2>{listingData["totalCountFormatted"]} Cars Found</h2>
              <div className={styles.listingCard}>
                {listingData.records.map((listing) => (
                  <div key={listing.id} className={styles.listingCards}>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                      <div className={styles.hoverCard}>
                        <button>View More</button>
                      </div>
                      <Image
                        src={listing.primaryPhotoUrl}
                        onError={(e) => console.error(e.target)}
                        alt={`ImgNotFound`}
                        width={300}
                        height={225}
                        loading="lazy"
                      />
                    </div>
                    <p>
                      {listing.year} {listing.make} {listing.model}{" "}
                    </p>
                    <h4>{listing.dealerName}</h4>
                    <div className={styles.mileagePrice}>
                      <p className={styles.mileageBorder}>
                        {listing.mileageHumanized}
                      </p>
                      <p className={styles.pricingBorder}>
                        {listing.priceMobile ? (
                          <>{listing.priceMobile}</>
                        ) : (
                          "Unknown"
                        )}
                      </p>
                    </div>
                    <p>City: {listing.city}</p>
                  </div>
                ))}
              </div>
              <div className={styles.pageContainer}>
                {pageNum == 1 ? (
                  <button disabled> Previous Page</button>
                ) : (
                  <button
                    onClick={(e) => {
                      scrollToTop(), PreviousPage(e);
                    }}
                  >
                    Previous Page
                  </button>
                )}
                <h2>{pageNum}</h2>
                <button
                  onClick={(e) => {
                    scrollToTop(), NextPage(e);
                  }}
                >
                  Next Page
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
              <h2>Enter in a Location to get listings</h2>
              <div
                className={styles.closureBackgroundIcon}
                style={{ margin: "3rem auto 3rem auto " }}
              >
                <Image
                  src={cloud}
                  alt="C"
                  height={100}
                  width={100}
                  layout="fixed"
                />
              </div>
            </div>
          )}
          {/* */}
        </section>
      </div>
    </div>
  );
}
