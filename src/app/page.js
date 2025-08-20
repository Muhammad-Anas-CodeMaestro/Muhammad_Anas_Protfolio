import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { WorkTogether } from "./components/WorkTogether";
import { Service } from "./components/Service";

export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <WorkTogether />
      <Service />
    </>
  );
}
