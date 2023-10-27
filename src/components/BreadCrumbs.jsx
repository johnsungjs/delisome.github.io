export default function BreadCrumbs({ section, setSection }) {
  return (
    <>
      {/* SECTION BREADCRUMBS START*/}
      <div className=" bg-gray-300 px-4 py-2 flex sticky top-12 gap-2">
        <button
          className={`px-4 py-2 rounded-full underline ${
            section === 0 ? "bg-yellow-400" : "bg-transparent"
          }`}
          onClick={() => setSection(0)}
        >
          Top Up
        </button>
        <button
          className={`px-4 py-2 rounded-full underline ${
            section === 1 ? "bg-yellow-400" : "bg-transparent"
          }`}
          onClick={() => setSection(1)}
        >
          Voucher
        </button>
        <button
          className={`px-4 py-2 rounded-full underline ${
            section === 2 ? "bg-yellow-400" : "bg-transparent"
          }`}
          onClick={() => setSection(2)}
        >
          Joki
        </button>
      </div>
      {/* SECTION BREADCRUMBS END*/}
    </>
  );
}
