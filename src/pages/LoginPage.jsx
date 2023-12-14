import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import logo from "../assets/delisome-logo.jpeg";
import { Email } from "@mui/icons-material";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[1].value);
    localStorage.setItem("recentViewed", [])
    navigate("/home");
  };

  return (
    <>
      <div className="w-full h-full bg-primary">
        <img
          className="mt-20 mx-auto rounded-full"
          alt="delisome-logo"
          src={logo}
          width={"60px"}
        />

        <div className="pt-2 text-center">
          <p className="text-2xl sm:text-4xl font-semibold">Login</p>
          <p className="pt-2 text-sm sm:text-xl">
            Silahkan Masukkan Id dan Password anda
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-8 sm:px-32 max-w-2xl mx-auto">
            <div className="flex pt-20 items-center">
              <Email />
              <input
                type="text"
                className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
                id="username"
                autoComplete="on"
                placeholder="silahkan masukkan email"
              />
            </div>
            <div className="flex pt-8 items-center">
              <div className="w-[24px] p-2" />
              <InputPassword />
            </div>
            <button className="block mt-12 mx-auto px-12 py-1 rounded-full bg-tertiary hover:opacity-80 text-white font-semibold">
              LOG IN
            </button>
            <div className="pt-8 pb-8 flex justify-center">
              <p className="pr-2 text-sm">belum punya akun?</p>
              <p
                className="underline text-sm cursor-pointer text-tertiary font-bold"
                onClick={() => navigate("/register")}
              >
                daftar disini
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
