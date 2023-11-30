import { Search } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeSearchInput } from "../services/redux/features/search/searchSlice";

export default function SearchField() {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleChangeSearchInput(e.target.value));
  };
  return (
    <div>
      <div className="px-4 pt-4 pb-4 flex items-center">
        <Search />
        <input
          type="text"
          className="ml-2 w-full px-4 py-2 rounded-full text-black outline-none"
          placeholder="Cari game disini"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
