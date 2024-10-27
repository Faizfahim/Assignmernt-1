import Image from "next/image";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero"
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
   <div className="">
      <Navbar/>
      <Hero/>
      <Footer/>
   </div>
  );
}
