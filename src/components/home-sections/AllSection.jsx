import Articles from "../Articles";
import Carousel from "../Carousel";
import DelisomeInfo from "../DelisomeInfo";
import GamesSlider from "../GamesSlider";

export default function AllSection() {
  return (
    <>
      <div className="pl-4 pt-2 font-bold text-xl">Popular Games</div>
      <Carousel />
      
      <GamesSlider />
      
      <Articles />
      
      <DelisomeInfo />
    </>
  );
}
