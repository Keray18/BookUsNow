import Image from "next/image";
import Navbar from "./scenes/Navbar";
import "./globals.css"
import SecondNav from "./scenes/SecondNav";
import HomePage from "./scenes/HomePage";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <SecondNav />
      <HomePage />
    </main>
  );
}
