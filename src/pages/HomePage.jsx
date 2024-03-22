import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import SectionSelector from "../components/home-sections/SectionSelector";
import { urlDummy } from "../services/api/api-config/endpointUrl";
import customAxios from "../services/api/customAxios";
// import SearchField from "../components/SearchField";

export default function HomePage() {
  const [section, setSection] = useState(0);

  useEffect(() => {
    customAxios.get(urlDummy).then((res) => console.log("res", res));
  });

  return (
    <>
      {/* <SearchField /> */}
      <BreadCrumbs section={section} setSection={setSection} />
      <SectionSelector section={section} />
    </>
  );
}
