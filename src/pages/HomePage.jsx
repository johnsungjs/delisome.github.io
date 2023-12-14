import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import SectionSelector from "../components/home-sections/SectionSelector";
// import SearchField from "../components/SearchField";

export default function HomePage() {
  const [section, setSection] = useState(0);

  return (
    <>
      {/* <SearchField /> */}
      <BreadCrumbs section={section} setSection={setSection} />
      <SectionSelector section={section} />
    </>
  );
}
