import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";
// import logo from "../assets/delisome-logo.jpeg";
import { Email, Person, PhoneAndroid } from "@mui/icons-material";
import SimpleLayout from "../components/layouts/SimpleLayout";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[1].value);
    localStorage.setItem("recentViewed", []);
    navigate("/home");
  };

  return (
    <>
      <SimpleLayout>
        <div className="w-full h-full">
          <div className="pt-4 text-center">
            <p className="text-2xl sm:text-4xl font-semibold">Buat Akun</p>
            <p className="pt-2 text-sm sm:text-xl">Silahkan Data Diri Anda</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="px-8 sm:px-32 max-w-2xl mx-auto">
              <div className="flex pt-8 items-center">
                <Person />
                <input
                  type="text"
                  className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
                  name="username"
                  autoComplete="on"
                  placeholder="Nama"
                />
              </div>
              <div className="flex pt-2 items-center">
                <Email />
                <input
                  type="text"
                  className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
                  name="username"
                  autoComplete="on"
                  placeholder="Email"
                />
              </div>
              <div className="flex pt-2 items-center">
                <PhoneAndroid />
                <input
                  type="text"
                  className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
                  name="username"
                  autoComplete="on"
                  placeholder="Nomor Telepon"
                />
              </div>
              <div className="flex pt-2 items-center">
                <div className="w-[24px] p-2" />
                <InputPassword />
              </div>
              <div className="flex pt-2 items-center">
                <div className="w-[24px] p-2" />
                <InputPassword id="confirmPassword" placeholder="Konfirmasi Password" />
              </div>
              <button className="block mt-12 mx-auto px-12 py-1 rounded-full bg-tertiary hover:opacity-80 text-white font-semibold">
                LOG IN
              </button>
              <div className="w-full pt-8 bottom-0 flex justify-center">
                <p className="pr-2 text-sm">Sudah Punya Akun?</p>
                <p
                  className="underline text-sm cursor-pointer text-tertiary font-bold"
                  onClick={() => navigate("/login")}
                >
                  LOG IN
                </p>
              </div>
            </div>
          </form>
        </div>
      </SimpleLayout>
    </>
  );
}
