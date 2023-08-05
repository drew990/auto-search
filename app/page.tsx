import Image from "next/image";
import NavBar from "./Components/NavBar";
import styles from "./Css/page.module.css";
import Hero from "./Components/Hero";
import Function from "./Components/Function";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Function />
      <AboutMe />
      <Footer />
    </main>
  );
}
