import { useLocation, useNavigate } from "react-router-dom";
import {
  Close,
  Home,
  List,
  BallotSharp,
  Headphones,
  Logout,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

export default function SideNavbar({ showSideNavbar, setShowSideNavbar }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* SIDE NAVBAR STARTS*/}

      <div
        className={`absolute w-full h-full max-w-4xl bg-abuMuda ${
          showSideNavbar ? "opacity-50 z-40 delay-150" : "opacity-0 -z-30"
        }`}
      />
      <div
        className={`w-full h-full max-w-4xl fixed top-0 transition-all duration-500 ${
          showSideNavbar
            ? "opacity-100 z-50"
            : "opacity-0 -z-30 -translate-x-full"
        }`}
      >
        <div className="flex h-screen">
          <div className="relative w-[80%] bg-primary rounded-tr-[40px]">
            <button
              className="absolute right-4 top-4"
              onClick={() => setShowSideNavbar(!showSideNavbar)}
            >
              <Close fontSize="large" />
            </button>

            {/* PROFILE SIDEBAR STARTS */}
            <div className="flex pl-6 pt-10 pb-12 items-center">
              <Avatar sx={{ width: 50, height: 50 }} />
              <div className="pl-2">
                <p className="font-bold text-lg">John Sung</p>
                <p className="text-sm">johnsungjs@gmail.com</p>
              </div>
            </div>
            {/* PROFILE SIDEBAR ENDS */}

            {/* BUTTON ITEMS SIDEBAR STARTS */}
            <div className=" bg-abuMuda h-full pt-16 rounded-tr-[40px]">
              <div
                className={`pl-8 py-1 flex items-center gap-2 cursor-pointer hover:font-bold ${
                  location.pathname === "/home"
                    ? "font-bold text-white"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  navigate("/home");
                  setShowSideNavbar(false);
                }}
              >
                <Home fontSize="large" />
                <p className="text-lg">Home</p>
              </div>
              <div
                className={`pl-8 py-1 flex items-center gap-2 cursor-pointer hover:font-bold ${
                  location.pathname === "/history"
                    ? "font-bold text-white"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  navigate("/history");
                  setShowSideNavbar(false);
                }}
              >
                <List fontSize="large" />
                <p className="text-lg">Transaksi</p>
              </div>
              <div
                className={`pl-8 py-1 flex items-center gap-2 cursor-pointer hover:font-bold ${
                  location.pathname === "/register"
                    ? "font-bold text-white"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  navigate("/register");
                  setShowSideNavbar(false);
                }}
              >
                <BallotSharp fontSize="large" />
                <p className="text-lg">Register</p>
              </div>
              <div
                className={`pl-8 py-1 flex items-center gap-2 cursor-pointer hover:font-bold ${
                  location.pathname === "/contact-us"
                    ? "font-bold text-white"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  navigate("/contact-us");
                  setShowSideNavbar(false);
                }}
              >
                <Headphones fontSize="large" />
                <p className="text-lg">Contact Us</p>
              </div>
              <div
                className={`absolute bottom-10 pl-8 py-1 flex items-center gap-2 cursor-pointer hover:font-bold ${
                  location.pathname === "/login"
                    ? "font-bold text-white"
                    : "text-slate-400"
                }`}
                onClick={() => {
                  navigate("/login");
                  setShowSideNavbar(false);
                }}
              >
                <Logout fontSize="large" />
                <p className="text-lg">Logout</p>
              </div>
            </div>
            {/* BUTTON ITEMS SIDEBAR ENDS */}
          </div>
          <div
            className="w-[20%] bg-transparent cursor-pointer"
            onClick={() => setShowSideNavbar(false)}
          ></div>
        </div>
      </div>
      {/* SIDE NAVBAR ENDS*/}

      {/* MAKE SIDENAV TRANSITION SMOOTHER WITH THIS DIV */}
      <div
        className={`fixed left-0 z-50 w-full max-w-[calc((100%-56rem)/2)] h-full bg-primary`}
      />
      <div
        className={`fixed right-0 z-50 w-full max-w-[calc((100%-56rem)/2)] h-full bg-primary`}
      />
    </>
  );
}
