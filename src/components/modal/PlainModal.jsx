import { Close } from "@mui/icons-material";

// source: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
// to make modal on top of everything, set z-[999] and z-[999]
// to make modal on top of existing layout, set z-0 and z-0

export default function PlainModal({ setIsOpen }) {
  return (
    <>
      {/* DARK BG STARTS */}
      <div
        className="absolute z-0 bg-black opacity-20 w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => setIsOpen(false)}
      />
      {/* DARK BG ENDS */}

      {/* MAIN MODAL STARTS */}
      <div className="fixed z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
        <div className="w-[250px] h-[170px] bg-white rounded-2xl shadow-xl">
          <div className="h-[50px] bg-white overflow-hidden rounded-t-2xl">
            <h1 className="m-0 p-[10px] font-semibold text-lg text-center">
              heading
            </h1>
          </div>
          <button
            className="cursor-pointer font-semibold px-[4px] py-[4px] rounded-lg border-0 text-lg bg-white transition-all duration-300 shadow-xl absolute right-0 top-0 self-end -mt-[7px] -mr-[7px] hover:-translate-x-[4px] hover:translate-y-[4px]"
            onClick={() => setIsOpen(false)}
          >
            <Close className="m-0" />
          </button>
          <div className="p-[10px] text-[14px] text-black text-center">
            This is Content
          </div>
          <div className="absolute bottom-[2px] mb-[10px] w-full">
            <div className="flex justify-around items-center">
              <button
                className="mt-[10px] cursor-pointer font-semibold px-[28px] py-[11px] rounded-xl text-[0.8rem] border-0 text-[#fff] bg-[#ff3e4e] transition-all duration-300 hover:shadow-xl hover:-translate-y-[5px] hover:bg-[#ff3e4e]"
                onClick={() => setIsOpen(false)}
              >
                Yes
              </button>
              <button
                className="mt-[10px] cursor-pointer font-semibold px-[28px] py-[11px] rounded-xl text-[0.8rem] border-0 text-[#2c3e50] bg-[#FCFCFC] transition-all duration-300 hover:shadow-xl hover:-translate-y-[5px] hover:bg-slate-200"
                onClick={() => setIsOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN MODAL ENDS */}
    </>
  );
}
