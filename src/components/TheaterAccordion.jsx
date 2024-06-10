import { useState } from "react";
import { DropdownAccordionIcon } from "../icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function TheaterAccordion() {
  const [isOpen, setIsOpen] = useState(true);
  const handleAccodionOpen = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  return (
    <div className="border border-white p-8 rounded-lg">
      <div className="flex justify-between">
        <div className="text-white text-xl font-semibold">Theater A</div>
        <button className={isOpen ? "" : "-rotate-90"} onClick={handleAccodionOpen}>
          <DropdownAccordionIcon className={"fill-white"} />
        </button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-10 gap-4 text-white font-semibold pt-6 pb-2 ">
          <Button bg="nonSelectBookin" onClick={() => navigate("/seat-selection")}>
            10:30
          </Button>
          <Button bg="nonSelectBookin" onClick={() => navigate("/seat-selection")}>
            12:30
          </Button>
          <Button bg="nonSelectBookin" onClick={() => navigate("/seat-selection")}>
            14:30
          </Button>
          <Button bg="nonSelectBookin" onClick={() => navigate("/seat-selection")}>
            18:30
          </Button>
          <Button bg="nonSelectBookin">20:30</Button>
        </div>
      )}
    </div>
  );
}
