import { Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchField2() {
  const navigate = useNavigate();
  return (
    <div className="pl-5 w-full flex items-center">
      <Search />
      <button
        className="ml-0 w-full px-4 py-1 rounded-full bg-white text-gray-400 text-start"
        onClick={() => navigate("/search")}
      >
        Cari game disini
      </button>
    </div>
  );
}
