import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import logo from "../assets/delisome-logo.jpeg"

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[1].value);
    navigate("/home");
  };

  return (
    <>
      <div className="w-full h-full min-h-screen bg-primary">
        <div className="pt-16 pb-4 px-8 sm:px-32 max-w-2xl mx-auto text-left text-2xl sm:text-4xl font-semibold">
          WELCOME TO DELISOME STORE
        </div>
        <img className="mx-auto rounded-full" alt="delisome-logo" src={logo} width={"80px"}/>
        <form onSubmit={handleSubmit}>
          <div className="px-8 sm:px-32 max-w-2xl mx-auto">
            <label className="block py-2 font-semibold" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 rounded-lg shadow-xl outline-none text-black"
              id="username"
              autoComplete="on"
              placeholder="silahkan masukkan username"
            />
            <label className="block py-2 font-semibold" htmlFor="password">
              <p>Password</p>
            </label>
            <InputPassword />
            <button className="w-full mt-8 px-4 py-2 rounded-xl bg-tertiary shadow-xl hover:opacity-80 text-white font-semibold">
              Sign In
            </button>
            <div className="py-2 flex justify-center">
              <p className="pr-2">belum punya akun?</p>
              <p
                className="underline cursor-pointer text-tertiary font-bold"
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
