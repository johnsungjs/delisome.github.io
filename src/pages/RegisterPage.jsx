import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="w-screen h-screen bg-slate-200">
        <div className="pt-16 pb-4 px-2 text-center text-4xl font-bold">
          SILAHKAN MASUKKAN DATA ANDA
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
