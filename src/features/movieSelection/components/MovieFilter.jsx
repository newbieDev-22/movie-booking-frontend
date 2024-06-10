import { useState } from "react";
import Button from "../../../components/Button";

const initBtnState = {
  all: false,
  action: false,
  animation: false,
  adventure: false,
  comedy: false,
  drama: false,
  thiller: false,
  romance: false,
  horror: false,
  fantasy: false,
  musical: false,
  crime: false,
};

const btnBgColorMapping = {
  true: "active",
  false: "nonActive",
};

export default function MovieFilter() {
  const [btnState, setBtnState] = useState({
    all: true,
    action: false,
    animation: false,
    adventure: false,
    comedy: false,
    drama: false,
    thiller: false,
    romance: false,
    horror: false,
    fantasy: false,
    musical: false,
    crime: false,
  });

  const handleFilter = (name) => {
    setBtnState({ ...initBtnState, [name]: true });
  };
  return (
    <div className="px-6 pt-8">
      <div className="grid grid-cols-6 gap-4 gap-x-8">
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.all]}
          onClick={() => handleFilter("all")}
        >
          <div className="font-bold">ALL</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.action]}
          onClick={() => handleFilter("action")}
        >
          <div className="font-bold">ACTION</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.animation]}
          onClick={() => handleFilter("animation")}
        >
          <div className="font-bold">ANIMATION</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.adventure]}
          onClick={() => handleFilter("adventure")}
        >
          <div className="font-bold">ADVENTURE</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.comedy]}
          onClick={() => handleFilter("comedy")}
        >
          <div className="font-bold">COMEDY</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.drama]}
          onClick={() => handleFilter("drama")}
        >
          <div className="font-bold">DRAMA</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.thiller]}
          onClick={() => handleFilter("thiller")}
        >
          <div className="font-bold">THRILLER</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.romance]}
          onClick={() => handleFilter("romance")}
        >
          <div className="font-bold">ROMANCE</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.horror]}
          onClick={() => handleFilter("horror")}
        >
          <div className="font-bold">HORROR</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.fantasy]}
          onClick={() => handleFilter("fantasy")}
        >
          <div className="font-bold">FANTASY</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.musical]}
          onClick={() => handleFilter("musical")}
        >
          <div className="font-bold">MUSICAL</div>
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.crime]}
          onClick={() => handleFilter("crime")}
        >
          <div className="font-bold">CRIME</div>
        </Button>
      </div>
    </div>
  );
}
