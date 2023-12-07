import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Header({ text, textColor }) {
  const navigate = useNavigate();
  return (
    <>
      {/* NAVIGATION STARTS */}
      <div className={`pt-8 pl-4 text-xl flex items-center text-${textColor}`}>
        <IconButton
          className={`!text-${textColor}`}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
        <p className="inline pl-2 font-bold">{text}</p>
      </div>
      {/* NAVIGATION ENDS */}
    </>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.oneOf(["white", "unguMuda"]),
};

Header.defaultProps = {
  text: "",
  textColor: "white",
};
