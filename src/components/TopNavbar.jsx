import { useRef, useState } from "react";
import burung from "../services/dummy/assets-dummy/burung.png";
import { Search, Menu } from "@mui/icons-material";
import SideNavbar from "./SideNavbar";
import SearchInput from "./SearchInput";

export default function TopNavbar() {
  const [showInput, setShowInput] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const inputTxt = useRef(null);

  return (
    <>
      {/* SECTION TOP NAVBAR START*/}
      <div className="w-full max-w-4xl h-12 fixed top-0 z-0 px-4 py-2 bg-gray-300">
        <div className="flex items-center">
          <button
            className="self-start text-center"
            onClick={() => setShowSideNavbar(!showSideNavbar)}
          >
            <Menu fontSize="large" />
          </button>
          <div className="flex-grow text-center">
            <div className="flex items-center justify-center gap-2">
              <img alt="delisome" src={burung} width="40" />
              <p className="text-xl">Delisome</p>
            </div>
          </div>
          <button
            className="self-end text-center"
            onClick={() => {
              setShowInput(!showInput);
              if (!showInput) {
                inputTxt.current.focus();
              }
            }}
          >
            <Search fontSize="large" />
          </button>
        </div>
      </div>
      {/* SECTION TOP NAVBAR ENDS*/}

      <SearchInput
        showInput={showInput}
        setShowInput={setShowInput}
        inputTxt={inputTxt}
      />

      <SideNavbar
        showSideNavbar={showSideNavbar}
        setShowSideNavbar={setShowSideNavbar}
      />
    </>
  );
}
