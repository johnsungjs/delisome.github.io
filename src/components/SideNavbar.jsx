import { useLocation, useNavigate } from "react-router-dom";
import {
  Close,
  Home,
  List,
  BallotSharp,
  Headphones,
  Logout,
} from "@mui/icons-material";

export default function SideNavbar({ showSideNavbar, setShowSideNavbar }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* SIDE NAVBAR STARTS*/}
      <div
        className={`w-full h-full max-w-4xl fixed top-12 transition-all duration-500 ${
          showSideNavbar
            ? "opacity-100 z-10"
            : "opacity-0 -z-10 -translate-x-full"
        }`}
      >
        <div className="flex h-screen">
          <div className="w-[80%] bg-primary">
            <button
              className="block w-full text-right pt-2 pr-2"
              onClick={() => setShowSideNavbar(!showSideNavbar)}
            >
              <Close fontSize="large" />
            </button>
            <div
              className={`pl-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-400 ${
                location.pathname === "/home" ? "bg-red-300" : ""
              }`}
              onClick={() => {
                navigate("/home");
                setShowSideNavbar(false);
              }}
            >
              <Home fontSize="large" />
              <p className="text-xl">Home</p>
            </div>
            <div
              className={`pl-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-400 ${
                location.pathname === "/transaction" ? "bg-red-300" : ""
              }`}
              onClick={() => {
                navigate("/transaction");
                setShowSideNavbar(false);
              }}
            >
              <List fontSize="large" />
              <p className="text-xl">Transaksi</p>
            </div>
            <div
              className={`pl-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-400 ${
                location.pathname === "/login" ? "bg-red-300" : ""
              }`}
              onClick={() => {
                navigate("/login");
                setShowSideNavbar(false);
              }}
            >
              <Logout fontSize="large" />
              <p className="text-xl">Logout</p>
            </div>
            <div
              className={`pl-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-400 ${
                location.pathname === "/register" ? "bg-red-300" : ""
              }`}
              onClick={() => {
                navigate("/register");
                setShowSideNavbar(false);
              }}
            >
              <BallotSharp fontSize="large" />
              <p className="text-xl">Register</p>
            </div>
            <div
              className={`pl-4 py-1 flex items-center gap-2 cursor-pointer hover:bg-gray-400 ${
                location.pathname === "/contact-us" ? "bg-red-300" : ""
              }`}
              onClick={() => {
                navigate("/contact-us");
                setShowSideNavbar(false);
              }}
            >
              <Headphones fontSize="large" />
              <p className="text-xl">Contact Us</p>
            </div>
          </div>
          <div
            className="w-[20%] bg-transparent"
            onClick={() => setShowSideNavbar(false)}
          ></div>
        </div>
      </div>
      {/* SIDE NAVBAR ENDS*/}

      {/* MAKE SIDENAV TRANSITION SMOOTHER WITH THIS DIV */}
      <div
        className={`fixed left-0 z-10 w-full max-w-[calc((100%-56rem)/2)] h-full bg-white`}
      />
    </>
  );
}
