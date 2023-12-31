import { History, Home, Person } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* SECTION BOTTOM NAVBAR */}
      <div className="z-10 w-full mx-auto max-w-4xl fixed bottom-0 px-4 py-2 bg-primary">
        <div className="flex">
          <button
            onClick={() => navigate("/home")}
            className={`flex-grow text-center ${
              location.pathname === "/home" ? "text-unguMuda text-base" : "text-slate-400 text-sm"
            }`}
          >
            <Home fontSize="medium" />
            <p>Home</p>
          </button>
          <button
            onClick={() => navigate("/history")}
            className={`flex-grow text-center ${
              location.pathname === "/history" ? "text-unguMuda text-base" : "text-slate-400 text-sm"
            }`}
          >
            <History fontSize="medium" />
            <p>Riwayat</p>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className={`flex-grow text-center ${
              location.pathname === "/profile" ? "text-unguMuda text-base" : "text-slate-400 text-sm"
            }`}
          >
            <Person fontSize="medium" />
            <p>Profil</p>
          </button>
        </div>
      </div>
      {/* SECTION BOTTOM NAVBAR */}
    </>
  );
}
