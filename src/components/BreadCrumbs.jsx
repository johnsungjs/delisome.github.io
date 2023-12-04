export default function BreadCrumbs({ section, setSection }) {
  return (
    <>
      {/* SECTION BREADCRUMBS START*/}
      <div className="z-10 bg-abuMuda mx-4 p-0 rounded-xl flex sticky top-14 gap-0">
        <button
          className={`grow px-4 py-1 rounded-lg font-bold  ${
            section === 0 ? "bg-tertiary text-white" : "text-tertiary"
          }`}
          onClick={() => setSection(0)}
        >
          All
        </button>
        <button
          className={`grow px-4 py-1 rounded-lg font-bold  ${
            section === 1 ? "bg-tertiary text-white" : "text-tertiary"
          }`}
          onClick={() => setSection(1)}
        >
          Top Up
        </button>
        <button
          className={`grow px-4 py-1 rounded-lg font-bold  ${
            section === 2 ? "bg-tertiary text-white" : "text-tertiary"
          }`}
          onClick={() => setSection(2)}
        >
          Voucher
        </button>
        <button
          className={`grow px-4 py-1 rounded-lg font-bold  ${
            section === 3 ? "bg-tertiary text-white" : "text-tertiary"
          }`}
          onClick={() => setSection(3)}
        >
          Joki
        </button>
      </div>
      {/* SECTION BREADCRUMBS END*/}
    </>
  );
}
