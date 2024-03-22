import { ArrowBack, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  resetItemBuy,
  setItemBuyType,
} from "../../services/redux/features/form/formCheckoutSlice";

// modified from source: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// to make modal on top of everything, set z-[999] and z-[999]
// to make modal on top of existing layout, set z-0 and z-0

export default function ModalItemBuyDetail({
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
                    setIsOpen(false);
                  }}
                >
                  <div>
                    {data.image && (
                      <img
                        alt={data.name}
                        src={data.image}
                        className="w-[40px] h-[40px] rounded-lg object-cover inline"
                      />
                    )}
                    <p className="pl-2 inline">{data.name}</p>
                  </div>
                </div>
              ))
            ) : (
              // VIEW LIST END

              // VIEW GRID START
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {childrenData.children &&
                  childrenData.children.map((data, index) => (
                    <div
                      key={index}
                      className="w-[80px] h-[80px] shadow-2xl rounded-2xl"
                      onClick={() => {
                        dispatch(setItemBuyType(data.name));
                        setIsOpen(false);
                      }}
                    >
                      <img
                        alt={data.name}
                        src={data.image}
                        className="w-full h-1/2 object-cover rounded-t-2xl"
                      />
                      <p className="pt-1 text-xs text-center">{data.name}</p>
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
