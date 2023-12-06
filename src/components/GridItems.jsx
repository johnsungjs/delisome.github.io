import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function GridItems({ items }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-[14px]">
        {items.map((e, index) => (
          <div key={index} className="w-[calc((100%/3)-25px)]">
            <img
              alt={index}
              src={e.image}
              className="w-full h-[95px] rounded-2xl object-cover"
              onClick={() => navigate("/detail-item")}
            />
            <p className="pt-1 text-sm text-center font-bold">{e.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

GridItems.propTypes = {
  items: PropTypes.array.isRequired,
};
