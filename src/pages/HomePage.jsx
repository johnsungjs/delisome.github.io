import { useState } from "react";
import Carousel from "../components/Carousel";
import BreadCrumbs from "../components/BreadCrumbs";
import SectionSelector from "../components/home-sections/SectionSelector";

export default function HomePage() {
  const [section, setSection] = useState(0);

  return (
    <>
      <BreadCrumbs section={section} setSection={setSection} />
      <div className="pl-4 font-bold text-xl">Popular Games</div>
      <Carousel />
      <SectionSelector section={section} />
    </>
  );
}
