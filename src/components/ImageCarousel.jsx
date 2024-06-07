import CarouselItem from "./CarouselItem";

export default function ImageCarousel({ imagePathList }) {
  return (
    <div className="carousel w-full ">
      {imagePathList.map((el, index) => {
        const src = el;
        const currentId = `slide${index}`;
        const prevId =
          index - 1 < 0 ? `#slide${imagePathList.length - 1}` : `#slide${index - 1}`;
        const nextId =
          index + 1 > imagePathList.length - 1 ? `#slide${0}` : `#slide${index + 1}`;

        return (
          <CarouselItem
            key={index}
            src={src}
            currentId={currentId}
            prevId={prevId}
            nextId={nextId}
          />
        );
      })}
    </div>
  );
}
