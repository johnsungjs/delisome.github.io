import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeSearchInput } from "../services/redux/features/search/searchSlice";

export default function SearchInput({ showInput, setShowInput, inputTxt }) {
  const searchValue = useSelector((state) => state.search.value);

  useEffect(() => {
    if (searchValue.length > 0) {
      const delayRebounceFn = setTimeout(() => {
        console.log("timeout!");
        //perform function search here
      }, 2000);

      return () => clearTimeout(delayRebounceFn);
    }
  }, [searchValue]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(handleChangeSearchInput(e.target.value));
  };
  return (
    <>
      {/* SEARCH INPUT STARTS*/}
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          ref={inputTxt}
          name="search-input"
          type="text"
          className={`w-[calc(100%-120px)] max-w-[calc(56rem-120px)] fixed mt-1 px-2 py-2 rounded-xl top-0 left-1/2 transform translate-x-[-50%] z-1 bg-white outline-none transition-all duration-500 ${
            showInput ? "opacity-100 z-10" : "opacity-0 -z-10"
          }`}
          placeholder="search here..."
          value={searchValue}
          onChange={handleChange}
        />
      </form>
      <div
        className={`fixed mt-12 w-full h-full bg-transparent ${
          showInput ? "z-10" : "-z-10"
        }`}
        onClick={() => setShowInput(false)}
      />
      {/* SEARCH INPUT ENDS*/}
    </>
  );
}
