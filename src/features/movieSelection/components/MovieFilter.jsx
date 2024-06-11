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
  true: "isActiveBtn",
  false: "isNonActiveBtn",
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
    <div className="px-8 pt-8">
      <div className="grid grid-cols-6 gap-y-1 gap-x-8">
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.all]}
          onClick={() => handleFilter("all")}
        >
          ALL
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.action]}
          onClick={() => handleFilter("action")}
        >
          ACTION
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.animation]}
          onClick={() => handleFilter("animation")}
        >
          ANIMATION
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.adventure]}
          onClick={() => handleFilter("adventure")}
        >
          ADVENTURE
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.comedy]}
          onClick={() => handleFilter("comedy")}
        >
          COMEDY
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.drama]}
          onClick={() => handleFilter("drama")}
        >
          DRAMA
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.thiller]}
          onClick={() => handleFilter("thiller")}
        >
          THRILLER
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.romance]}
          onClick={() => handleFilter("romance")}
        >
          ROMANCE
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.horror]}
          onClick={() => handleFilter("horror")}
        >
          HORROR
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.fantasy]}
          onClick={() => handleFilter("fantasy")}
        >
          FANTASY
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.musical]}
          onClick={() => handleFilter("musical")}
        >
          MUSICAL
        </Button>
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.crime]}
          onClick={() => handleFilter("crime")}
        >
          CRIME
        </Button>
      </div>
    </div>
  );
}
