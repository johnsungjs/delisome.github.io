import { useSelector } from "react-redux";

export default function JokiSection() {
  const searchValue = useSelector((state) => state.search.value);

  return (
    <>
      <div>this is joki</div>
      <div>
        <p>belajar redux</p>
        <div>{searchValue}</div>
      </div>
    </>
  );
}
