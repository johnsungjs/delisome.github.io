// import { Edit } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <>
      <Avatar sx={{ width: 80, height: 80, marginX: "auto", mt: 4 }} />

      <div className="px-6 pt-4 text-white">
        <p className="font-semibold">Nama</p>
        <p className="pt-2 border-b-2">John Sung</p>
      </div>
      <div className="px-6 pt-4 text-white">
        <p className="font-semibold">Email</p>
        <p className="pt-2 border-b-2">johnsungjs@gmail.com</p>
      </div>
      <div className="px-6 pt-4 text-white">
        <p className="font-semibold">Nomor Telepon</p>
        <p className="pt-2 border-b-2">081211900299</p>
      </div>
      <div className="px-6 pt-16">
        <button
          className="flex w-full py-2 mx-auto justify-center bg-tertiary rounded-lg text-white font-bold"
          onClick={() => navigate("/profile-edit")}
        >
          <p className="inline pr-2">Edit Profile</p>
        </button>
      </div>
    </>
  );
}
