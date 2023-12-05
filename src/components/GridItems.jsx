import PropTypes from "prop-types";

export default function GridItems({ items }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-[14px]">
        {items.map((e, index) => (
          <div key={index} className="w-[calc((100%/3)-25px)]">
            <img
              alt={index}
              src={e.image}
              className="w-full h-[95px] rounded-2xl object-cover"
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
