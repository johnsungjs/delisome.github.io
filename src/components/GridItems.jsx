import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { saveHistoryToLocalStorage } from "../services/universal-functions/universalFunctions";

export default function GridItems({ items }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 grid grid-cols-3 gap-[14px] md:grid-cols-6">
        {items.map((item, index) => (
          <div key={index} className="aspect-square">
            <img
              alt={index}
              src={item.image}
              className="w-full h-full rounded-2xl object-cover"
              onClick={() => {
                saveHistoryToLocalStorage(item);
                navigate("/detail-item");
              }}
            />
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
