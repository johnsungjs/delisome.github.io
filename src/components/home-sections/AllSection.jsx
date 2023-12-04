import Carousel from "../Carousel";
import GamesSlider from "../GamesSlider";

export default function AllSection() {
  return (
    <>
      <div className="pl-4 pt-2 font-bold text-xl">Popular Games</div>
      <Carousel />
      {/* SECTION CARDS START*/}
      <div className="px-4 pb-2 flex justify-between items-center">
        <p className="font-bold text-lg">Recently Viewed</p>
        <button className="px-4 py-2 bg-transparent border border-tertiary text-sm text-purple-200 rounded-xl">See More</button>
      </div>
      <GamesSlider />
      {/* SECTION CARDS END*/}
    </>
  );
}
