import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="container max-w-4xl">
        <TopNavbar />
        {/* CONTENT WRAPPER STARTS*/}
        <div className="pt-12 pb-20">
          <Outlet />
        </div>
        {/* CONTENT WRAPPER ENDS*/}
        <BottomNavbar />
      </div>
    </>
  );
}
