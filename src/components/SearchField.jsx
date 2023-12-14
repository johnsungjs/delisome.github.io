import { Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchField() {
  const navigate = useNavigate();
  return (
    <div className="px-4 pt-4 pb-4 flex items-center">
      <Search />
      <button
        className="ml-2 w-full px-4 py-2 rounded-full bg-white text-gray-400 text-start"
        onClick={() => navigate("/search")}
      >
        Cari game disini
      </button>
    </div>
  );
}
