import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import { saveHistoryToLocalStorage } from "../services/universal-functions/universalFunctions";

export default function GridItems({ items }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 grid grid-cols-3 gap-[14px] md:grid-cols-6">
        {items.map((item, index) => (
          <div key={index} className="relative aspect-square">
            <img
              alt={index}
              src={item.image}
              className="w-full h-full rounded-2xl object-cover"
              onClick={() => navigate("/detail-item", { state: item })}
            />
            {item.discount && (
              <div className="absolute top-0 right-0 bg-[#E43232] px-4 py-1 text-xs text-white rounded-tr-[10px] rounded-bl-[30px] font-semibold">
                - {item.discount}%
              </div>
            )}
            <p className="pt-1 text-sm text-center font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

GridItems.propTypes = {
  items: PropTypes.array.isRequired,
};
