export default function BreadCrumbs({ section, setSection }) {
  return (
    <>
      {/* SECTION BREADCRUMBS START*/}
      <div className="z-10 bg-primary px-4 py-2 flex sticky top-12 gap-2">
        <button
          className={`px-6 py-0 rounded-lg font-bold  ${
            section === 0 ? "bg-tertiary text-white" :  "text-tertiary"
          }`}
          onClick={() => setSection(0)}
        >
          Top Up
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold  ${
            section === 1 ? "bg-tertiary text-white" :  "text-tertiary"
          }`}
          onClick={() => setSection(1)}
        >
          Voucher
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold  ${
            section === 2 ? "bg-tertiary text-white" :  "text-tertiary"
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
