import burung from "../services/dummy/assets-dummy/burung.png";

export default function Card({ title }) {
  return (
    <div className="border-2 px-2 py-2 w-28 h-28 shadow-xl cursor-pointer">
      <img className="m-auto" alt='delisome' src={burung} width="100%" />
      <div className="text-[12px] text-center underline font-bold">{title ? title : "no title"}</div>
    </div>
  );
}
