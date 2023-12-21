import PropTypes from "prop-types";
import { useState } from "react";
import { Lock, LockOpenSharp } from "@mui/icons-material";

export default function InputPassword({id, placeholder}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label className="block" htmlFor={id}>
        <div className="relative">
          <i
            className="absolute top-[-16px] right-0 text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <LockOpenSharp /> : <Lock />}
          </i>
        </div>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className="border-b-2 ml-4 w-full px-4 py-2 bg-transparent outline-none text-white"
        id={id}
        autoComplete="on"
        placeholder={placeholder}
      />
    </>
  );
}

InputPassword.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string
};

InputPassword.defaultProps = {
  id: "password",
  placeholder: "Password"
};
