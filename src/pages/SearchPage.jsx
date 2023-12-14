import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { dummyListGames } from "../services/dummy/data-dummy/dataDummy";
import SimpleLayout from "../components/layouts/SimpleLayout";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();

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
    <>
      <SimpleLayout text={"Search"}>
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
                <div
                  className="border-b-[1px] border-gray-600 mt-4 pb-4 flex items-center"
                  onClick={() => navigate("/detail-item")}
                >
                  <img
                    alt={item.name}
                    src={item.image}
                    className="w-[68px] h-[68px] rounded-lg object-cover"
                  />
                  <p className="pl-2">{item.name}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">Tidak ada data</div>
          )}
        </div>
      </SimpleLayout>
    </>
  );
}
