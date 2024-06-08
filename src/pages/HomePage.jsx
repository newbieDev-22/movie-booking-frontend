import Carousal from "../components/Carousal";

const homePageCarousalImage = [
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
  "https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/pass/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg",
];

export default function HomePage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)]">
      <div className="flex flex-col w-full">
        <div className=" w-full h-[400px] flex flex-col">
          <div className="flex justify-evenly h-full">
            <Carousal autoSlide={false}>
              {homePageCarousalImage.map((el, index) => {
                const splitName = el.split("/");
                const key = splitName[splitName.length - 1];
                // <img key={key} src={el} alt="landing" className="min-w-full" />
                return (
                  <div key={index} className="min-w-full relative">
                    <div className=" absolute bg-gradient-to-r from-black from-5% via-[#030303] via-20% to-transparent w-1/2 h-full">
                      <div className="pl-28 pt-12 pr-36">
                        <div className="flex flex-col gap-8">
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                              <div className="text-[#DBD9DD]">Action</div>
                              <div className="text-[#DBD9DD]">Fantasy</div>
                            </div>
                            <h1 className="text-white text-5xl font-bold">Spider-man</h1>
                          </div>
                          <div className="flex flex-col gap-8">
                            <p className="text-white text-sm indent-8 text-justify">
                              {`Miles Morales catapults across the multiverse, 
                              where he encounters a team of Spider-People charged with protecting its very existence. 
                              When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.`}
                            </p>
                            <p className="text-[#DBD9DD] text-2xl font-semibold text-justify">
                              {`You're lucky if you can die a normal death after running into a
                          Curse.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src={el} alt="landing" />
                  </div>
                );
              })}
            </Carousal>
          </div>
        </div>
        <div className="text-white text-3xl font-bold text-left mt-2">
          Movie On Show Now!
        </div>
        <div className=" w-full flex flex-col h-96">
          <div className="flex justify-evenly p-2 gap-2 h-full">
            <div className="bg-green-500 min-w-64"></div>
            <div className="bg-green-500 min-w-64"></div>
            <div className="bg-green-500 min-w-64"></div>
            <div className="bg-green-500 min-w-64"></div>
            <div className="bg-green-500 min-w-64"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
