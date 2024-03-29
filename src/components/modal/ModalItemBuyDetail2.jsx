import { ArrowBack, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  resetItemBuy,
  setItemBuyNominal,
  setItemBuyType,
} from "../../services/redux/features/form/formCheckoutSlice";

// modified from source: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// to make modal on top of everything, set z-[999] and z-[999]
// to make modal on top of existing layout, set z-0 and z-0

export default function ModalItemBuyDetail2({
  setIsOpen,
  setShowDetailModal,
  childrenData,
}) {
  const dispatch = useDispatch();
  return (
    <>
      {/* DARK BG STARTS */}
      <div className="fixed z-[9999] bg-black opacity-0 w-screen max-w-4xl h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* DARK BG ENDS */}

      {/* MAIN MODAL STARTS */}
      <div className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
        <div
          className={`w-[90vw] max-w-4xl h-auto bg-white rounded-2xl shadow-xl overflow-hidden`}
        >
          <div className="flex items-center justify-between px-4 py-4 bg-white overflow-hidden rounded-t-2xl font-semibold border-b-2">
            <button
              className="cursor-pointer text-black"
              onClick={() => setShowDetailModal(false)}
            >
              <ArrowBack />
            </button>
            <h1 className="text-lg text-start">{childrenData.name}</h1>
            <button
              className="cursor-pointer text-black"
              onClick={() => {
                setIsOpen(false);
                dispatch(resetItemBuy());
              }}
            >
              <Close />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-auto">
            {childrenData.viewStyle === "list" ? (
              //VIEW LIST START
              childrenData.children &&
              childrenData.children.map((data, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between border-b-2 px-4 ${
                    data.image ? "py-2" : "py-4"
                  } text-base text-black font-semibold`}
                  onClick={() => {
                    dispatch(setItemBuyType(data.name));
                    dispatch(setItemBuyNominal(data.price));
                    setIsOpen(false);
                  }}
                >
                  <div className="flex gap-2">
                    {data.image && (
                      <img
                        alt={data.name}
                        src={data.image}
                        className="w-[40px] h-[40px] rounded-lg object-cover inline"
                      />
                    )}
                    <div>
                      <p>{data.name}</p>
                      <p>Rp.{data.price.toString()}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              //VIEW LIST END
              //VIEW GRID START
              <div>
                {childrenData.children &&
                  childrenData.children.map((data, index) => (
                    <div key={index}>
                      <p className="px-4 py-2 text-lg text-tertiary font-bold">
                        {data.category}
                      </p>
                      <div className="px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-2">
                        {data.children.map((item, index) => (
                          <div
                            key={index}
                            className="aspect-square shadow-2xl rounded-2xl text-xs text-center font-semibold"
                            onClick={() => {
                              dispatch(setItemBuyType(item.name));
                              dispatch(setItemBuyNominal(item.price));
                              setIsOpen(false);
                            }}
                          >
                            <img
                              alt={item.name}
                              src={item.image}
                              className="w-full h-1/2 object-cover rounded-t-2xl"
                            />
                            <p className="pt-1 text-center">
                              {item.name}
                            </p>
                            <p>Rp.{item.price.toString()}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              //VIEW GRID END
            )}
          </div>
        </div>
      </div>
      {/* MAIN MODAL ENDS */}
    </>
  );
}
