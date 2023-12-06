import { AddCard } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function VirtualWallet() {
  return (
    <>
      {/* SECTION WALLET STARTS */}
      <div className="relative bg-abuMuda block mt-4 mb-14 mx-4 pt-6 pb-12 px-4 rounded-t-[10px] rounded-b-[20px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl">Halo John</p>
            <p className="text-sm">Cek Saldo Aktifmu</p>
          </div>
          <div className="flex text-unguMuda">
            <p className="font-semibold">Rp</p>
            <p className="font-semibold text-4xl">299.000</p>
          </div>
        </div>
        <div className="absolute bg-putih m-0 px-6 py-2 block top-[75%] left-[50%] -translate-x-[50%] rounded-xl">
          <div className="flex gap-8 justify-center">
            <div className="w-[44px] h-[60px] text-black text-center">
              <IconButton className="w-[44px] h-[44px] !bg-primary !rounded-xl">
                <AddCard className="text-unguMuda scale-125" />
              </IconButton>
              <p className="text-xs pt-[1px] font-semibold">Request</p>
            </div>
            <div className="w-[44px] h-[60px] text-black text-center">
              <IconButton className="w-[44px] h-[44px] !bg-primary !rounded-xl">
                <AddCard className="text-unguMuda scale-125" />
              </IconButton>
              <p className="text-xs pt-[1px] font-semibold">Top Up</p>
            </div>
            <div className="w-[44px] h-[60px] text-black text-center">
              <IconButton className="w-[44px] h-[44px] !bg-primary !rounded-xl">
                <AddCard className="text-unguMuda scale-125" />
              </IconButton>
              <p className="text-xs pt-[1px] font-semibold">Send</p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION WALLET ENDS */}
    </>
  );
}
