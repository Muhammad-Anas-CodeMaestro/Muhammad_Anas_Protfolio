import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutMe />
      <Skills />
    </>
  );
}
