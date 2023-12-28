import { Save } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// import Header from "../components/Header";
import SimpleLayout from "../components/layouts/SimpleLayout";

export default function ProfileEditPage() {
  return (
    <>
      <SimpleLayout text={"Edit Profile"}>
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
          <button className="flex w-full py-2 mx-auto justify-center bg-tertiary rounded-lg text-white font-bold">
            <p className="inline pr-2">Save</p>
            <Save />
          </button>
        </div>
      </SimpleLayout>
    </>
  );
}
