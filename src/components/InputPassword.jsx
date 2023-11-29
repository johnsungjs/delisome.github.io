import { useState } from "react";
import { RemoveRedEye } from "@mui/icons-material";

export default function InputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label className="block" htmlFor="password">
        <div className="relative">
          <i
            className="absolute top-[6px] right-2 text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            <RemoveRedEye />
          </i>
        </div>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className="block w-full px-4 py-2 rounded-lg shadow-xl outline-none text-black"
        id="password"
        autoComplete="on"
        placeholder="silahkan masukkan password"
      />
    </>
  );
}
