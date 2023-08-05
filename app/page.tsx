"use client";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Function from "./Components/Function";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import { NotificationContainer } from "react-notifications";

export default function Home() {
  return (
    <main>
      <NotificationContainer />
      <NavBar />
      <Hero />
      <Function />
      <AboutMe />
      <Footer />
    </main>
  );
}
