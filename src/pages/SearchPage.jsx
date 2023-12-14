import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Search } from "@mui/icons-material";
import { dummyListGames } from "../services/dummy/data-dummy/dataDummy";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(dummyListGames);
  }, []);

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData =
    items &&
    items.length > 0 &&
    items.filter((e) => {
      if (searchValue === "") {
        return e;
      } else {
        return e.name.toUpperCase().includes(searchValue.toUpperCase());
      }
    });

  // useEffect(() => {
  //   if (searchValue.length > 0) {
  //     const delayRebounceFn = setTimeout(() => {
  //       console.log("timeout!");
  //       //perform function search here
  //     }, 1000);

  //     return () => clearTimeout(delayRebounceFn);
  //   }
  // }, [searchValue]);
  return (
    <div className="container max-w-4xl">
      <Header text={"Search"} textColor={"white"} />
      <div className="px-4 pt-4 pb-4 flex items-center">
        <Search />
        <input
          autoFocus
          id="search"
          type="text"
          className="ml-2 w-full px-4 py-2 rounded-full text-black outline-none"
          placeholder="Cari game disini xxx"
          value={searchValue}
          onChange={handleChangeSearch}
        />
      </div>
      <div className="h-[calc(100vh-144px)] pt-2 px-4 overflow-scroll">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              <div className="border-2 p-4 mb-4 rounded-xl">{item.name}</div>
            </div>
          ))
        ) : (
          <div className="text-center">Tidak ada data</div>
        )}
      </div>
    </div>
  );
}
