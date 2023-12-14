import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function GridItems({ items }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 grid grid-cols-3 gap-[14px]">
        {items.map((e, index) => (
          <div key={index} className="aspect-square">
            <img
              alt={index}
              src={e.image}
              className="w-full h-full rounded-2xl object-cover"
              onClick={() => navigate("/detail-item")}
            />
            <p className="pt-1 text-sm text-center font-bold">{e.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

GridItems.propTypes = {
  items: PropTypes.array.isRequired,
};
