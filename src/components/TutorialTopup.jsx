export default function TutorialTopup() {
  return (
    <>
      <div className="w-full h-full px-6">
        <div className="flex bg-abuMuda rounded-xl overflow-hidden">
          <div className="w-[130px] h-[115px] bg-white text-primary font-bold rounded-tr-xl rounded-br-[40px]">
            <div className="relative inline-block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
              <p>CARA</p>
              <p>TOPUP</p>
            </div>
          </div>
          <div className="w-full">
            <div className="relative inline-block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
              <p>1. Masukkan ID dan Server (jika ada)</p>
              <p>2. Pilih jumlah item</p>
              <p>3. Pilih jenis pembayaran</p>
              <p>4. Lakukan Pembayaran</p>
              <p>5. Tunggu hingga masuk ke akunmu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
