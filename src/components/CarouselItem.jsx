export default function CarouselItem({ src, currentId, prevId, nextId }) {
  return (
    <div id={currentId} className="carousel-item relative w-full">
      <img src={src} className="w-full rounded-lg" />

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={prevId} className="btn btn-circle">
          ❮
        </a>
        <a href={nextId} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
