import carouselSample from "../services/dummy/assets-dummy/promo-sample.jpeg";

export default function Carousel() {
  return (
    <>
      {/* SECTION CAROUSEL START*/}
      <div className="py-2 px-2">
        <img
          alt="carousel"
          className="m-auto rounded-xl h-28"
          src={carouselSample}
        />
      </div>
      {/* SECTION CAROUSEL ENDS*/}
    </>
  );
}
