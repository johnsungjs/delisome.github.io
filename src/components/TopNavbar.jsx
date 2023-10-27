import { useEffect, useState } from "react";
import burung from "../services/dummy/assets-dummy/burung.png";
import { Search, Menu } from "@mui/icons-material";
import SideNavbar from "./SideNavbar";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeSearchInput } from "../services/redux/features/search/searchSlice";

export default function TopNavbar() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);

  const [showInput, setShowInput] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  useEffect(() => {
    const delayRebounceFn = setTimeout(() => {
      console.log("timeout!");
      //function search
    }, 2000);

    return () => clearTimeout(delayRebounceFn);
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(handleChangeSearchInput(e.target.value));
  };

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
            }}
          >
            <Search fontSize="large" />
          </button>
        </div>
      </div>
      {/* SECTION TOP NAVBAR ENDS*/}

      {/* SEARCH INPUT STARTS*/}
      <form onSubmit={handleSubmit}>
        <input
          name="search-input"
          type="text"
          className={`w-[calc(100%-120px)] fixed mt-1 px-2 py-2 rounded-xl top-0 left-1/2 transform translate-x-[-50%] z-1 bg-white outline-none transition-all duration-500 ${
            showInput ? "opacity-100 z-10" : "opacity-0 -z-10"
          }`}
          placeholder="search here..."
          value={searchValue}
          onChange={handleChange}
        />
      </form>
      {/* SEARCH INPUT ENDS*/}

      <SideNavbar
        showSideNavbar={showSideNavbar}
        setShowSideNavbar={setShowSideNavbar}
      />
    </>
  );
}
