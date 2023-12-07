import { Diamond, Wallet } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function DetailItemPage() {
  const navigate = useNavigate();
  return (
    <>
      {/* NAVIGATION STARTS */}
      <Header text={"Mobile Legends"} textColor={"unguMuda"} />
      <img
        alt="game"
        src="https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F64950-Mobile%20Legends%20Moonton.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"
        className="absolute top-6 -z-10 opacity-30"
      />
      {/* FORM STARTS */}
      <div className="pt-36">
        <form className="px-6 pb-10">
          {/* SECTION FIRST STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              1
            </div>
            <p className="pl-2 font-bold">Masukkan ID dan Server</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="text"
              name="idGame"
              placeholder="ID Game.."
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
            />
            <input
              type="text"
              name="server"
              placeholder="Server.."
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
            />
          </div>
          {/* SECTION FIRST ENDS */}
          {/* SECTION SECOND STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              2
            </div>
            <p className="pl-2 font-bold">Pilih Nominal Diamond</p>
          </div>
          <div className="flex pt-4 gap-1">
            <div className="w-full flex px-2 items-center border border-white rounded-lg">
              <Diamond />
              <input
                type="number"
                name="diamond"
                placeholder="... Diamond"
                className="w-auto px-2 py-2 bg-transparent outline-none"
              />
              <p className="ml-auto">Rp.0</p>
            </div>
          </div>
          {/* SECTION SECOND ENDS */}
          {/* SECTION THIRD STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              3
            </div>
            <p className="pl-2 font-bold">Masukkan Nomor WhatsApp</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="number"
              name="numberWa"
              placeholder="nanti otomatis keisi ye"
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
            />
          </div>
          {/* SECTION THIRD ENDS */}
          {/* SECTION FOURTH STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              4
            </div>
            <p className="pl-2 font-bold">Metode Pembayaran</p>
          </div>
          <div className="flex pt-4 gap-1">
            <div className="w-full flex px-2 items-center border border-white rounded-lg">
              <Wallet />
              <input
                type="number"
                name="paymentMethod"
                placeholder="pilih metode"
                className="w-auto px-2 py-2 bg-transparent outline-none"
              />
              <p className="ml-auto">Rp.0</p>
            </div>
          </div>
          {/* SECTION FOURTH ENDS */}
          {/* SECTION FIFTH STARTS */}
          <div className="flex pt-4">
            <div className="w-[24px] h-[24px] bg-white text-center text-primary rounded-md font-bold">
              5
            </div>
            <p className="pl-2 font-bold">Kode Promo</p>
          </div>
          <div className="flex pt-4 gap-1">
            <input
              type="text"
              name="promoCode"
              placeholder="nanti otomatis keisi ye"
              className="w-full px-2 py-2 bg-transparent border border-white rounded-lg outline-none"
            />
          </div>
          {/* SECTION FIFTH ENDS */}
        </form>
      </div>
      {/* FORM ENDS */}
    </>
  );
}
