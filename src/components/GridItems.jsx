import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function GridItems({ items }) {
  const navigate = useNavigate();

  const handleClick = (data) => {
    const storage = JSON.parse(localStorage.getItem("recentViewed") || "[]");

    if (storage.length < 10) {
      storage.unshift(data);
    } else {
      storage.pop();
      storage.unshift(data);
    }

    localStorage.setItem("recentViewed", JSON.stringify(storage));

    navigate("/detail-item");
  };

  return (
    <>
      <div className="px-4 grid grid-cols-3 gap-[14px] md:grid-cols-6">
        {items.map((item, index) => (
          <div key={index} className="aspect-square">
            <img
              alt={index}
              src={item.image}
              className="w-full h-full rounded-2xl object-cover"
              onClick={() => handleClick(item)}
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
