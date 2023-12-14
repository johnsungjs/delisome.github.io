import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function SimpleLayout({ children, text, textColor }) {
  const navigate = useNavigate();
  return (
    <div className="container max-w-4xl">
      {/* HEADER STARTS */}
      <div className={`pt-8 pl-4 text-xl flex items-center text-${textColor}`}>
        <IconButton className={`!text-white`} onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <p className="inline pl-2 font-bold">{text}</p>
      </div>
      {/* HEADER ENDS */}
      {/* BODY STARTS */}
      <div className="h-[calc(100vh-72px)] overflow-scroll">{children}</div>
      {/* BODY ENDS */}
    </div>
  );
}

SimpleLayout.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.oneOf(["white", "unguMuda"]),
};

SimpleLayout.defaultProps = {
  text: "",
  textColor: "white",
};
