import PropTypes from "prop-types";

export default function ListItemsWithDate({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <div className=" pb-2 pl-2 text-tertiary font-bold text-lg">
            {item.date}
          </div>
          {item.dataTransaction.map((data, index) => (
            <div key={index}>
              <div className="bg-white p-0 mb-4 text-black rounded-2xl shadow-xl">
                <div className="flex justify-between">
                  <div className="flex justify-start leading-none">
                    <img
                      alt={data.title}
                      src={data.image}
                      className="w-[90px] h-[90px] rounded-l-xl object-cover"
                    />
                    <div className="relative pl-2 pt-2">
                      <div className="text-sm">{data.category}</div>
                      <div className="font-bold line-clamp-2">{data.title}</div>
                      <div className="absolute bottom-2 text-xs text-abuMuda">
                        {data.date}
                      </div>
                    </div>
                  </div>
                  <div className="relative pr-4">
                    <div className="pt-6 text-tertiary font-bold">
                      {data.price}
                    </div>
                    <div
                      className={`absolute bottom-2 right-4 text-sm font-bold line-clamp-1 ${
                        data.status === "Success"
                          ? "text-green-700"
                          : data.status === "Failed"
                          ? "text-red-600"
                          : "text-amber-500"
                      }`}
                    >
                      {data.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

ListItemsWithDate.propTypes = {
  items: PropTypes.array.isRequired,
};
