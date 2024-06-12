import { useState } from "react";
import { DropdownAccordionIcon } from "../icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function TheaterAccordion({ theaterName, timeSlots }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleAccodionOpen = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  return (
    <div className="border border-white p-8 rounded-lg">
      <div className="flex justify-between">
        <div className="text-white text-xl font-semibold">{theaterName}</div>
        <button className={isOpen ? "" : "-rotate-90"} onClick={handleAccodionOpen}>
          <DropdownAccordionIcon className={"fill-white"} />
        </button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-10 gap-4 text-white font-semibold pt-6 pb-2 ">
          {timeSlots.map((el) => (
            <Button
              key={el}
              bg="isNonSelectDateBtn"
              onClick={() => navigate("/seat-selection")}
            >
              {el}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
