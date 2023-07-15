import Image from "next/image";
import NavBar from "./Components/NavBar";
import styles from "./Css/page.module.css";
import Hero from "./Components/Hero";
import Function from "./Components/Function";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Hero />
      <Function />
      <Footer />
    </main>
  );
}
