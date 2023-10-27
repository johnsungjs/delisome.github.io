import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[1].value);
    navigate("/home");
  };

  return (
    <>
      <div className="w-screen h-screen bg-slate-200">
        <div className="pt-16 pb-4 px-2 text-center text-4xl font-bold">
          WELCOME TO DELISOME STORE
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-8">
            <label className="block py-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 rounded-lg shadow-xl outline-none"
              id="username"
              autoComplete="on"
              placeholder="silahkan masukkan username"
            />
            <label className="block py-2" htmlFor="password">
              <p>Password</p>
            </label>
            <InputPassword />
            <button className="w-full mt-8 px-4 py-2 rounded-xl bg-purple-600 shadow-xl hover:opacity-80 text-white">
              Sign In
            </button>
            <div className="py-2 flex justify-center">
              <p className="pr-2">belum punya akun?</p>
              <p
                className="underline cursor-pointer text-purple-800 font-bold"
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
