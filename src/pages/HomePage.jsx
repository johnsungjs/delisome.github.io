import { useState } from "react";
import Carousel from "../components/Carousel";
import BreadCrumbs from "../components/BreadCrumbs";
import SectionSelector from "../components/home-sections/SectionSelector";

export default function HomePage() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Carousel />
      <BreadCrumbs section={section} setSection={setSection} />
      <SectionSelector section={section} />
    </>
  );
}
