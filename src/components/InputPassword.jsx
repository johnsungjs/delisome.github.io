import { useState } from "react";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";

export default function InputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label className="block" htmlFor="password">
        <div className="relative">
          <i
            className="absolute top-[-16px] right-0 text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
          </i>
        </div>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
        id="password"
        autoComplete="on"
        placeholder="silahkan masukkan password"
      />
    </>
  );
}
