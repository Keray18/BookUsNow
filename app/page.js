import Image from "next/image";
import Navbar from "./scenes/Navbar";
import "./globals.css"
import SecondNav from "./scenes/SecondNav";
import HomePage from "./scenes/HomePage";
import Upcoming from "./scenes/Upcoming";


export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <SecondNav />
      <HomePage />
      <Upcoming />
    </main>
  );
}
