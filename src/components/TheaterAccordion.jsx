import { useState } from "react";
import { DropdownAccordionIcon } from "../icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function TheaterAccordion({ theaterName, data }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleAccodionOpen = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <>
      {data.length > 0 ? (
        <div className="border border-white p-8 rounded-lg">
          <div className="flex justify-between">
            <div className="text-white text-xl font-semibold">{theaterName}</div>
            <button className={isOpen ? "" : "-rotate-90"} onClick={handleAccodionOpen}>
              <DropdownAccordionIcon className={"fill-white"} />
            </button>
          </div>
          {isOpen && (
            <div className="grid grid-cols-6 gap-4 text-white font-semibold pt-6 pb-2 ">
              {data.map((el) => (
                <Button
                  key={el.id}
                  bg="isNonSelectDateBtn"
                  onClick={() => navigate(`/seat-selection/${el.id}`)}
                >
                  {`${dayjs(el?.startMovieTime).utc().format("HH:mm")} - ${dayjs(
                    el?.endMovieTime
                  )
                    .utc()
                    .format("HH:mm")}`}
                </Button>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
