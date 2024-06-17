import Chair from "../../../components/Chair";
import { useState, useEffect } from "react";

const sizeMapping = {
  9: "h-9",
  6: "h-6",
};

const gapMapping = {
  12: "gap-12",
  8: "gap-8",
};

export default function SeatsRow({
  chairStatus,
  rowName,
  size = 9,
  gap = 12,
  handleSetChairStatus,
}) {
  const color = ["A", "B"].includes(rowName) ? "#985EFF" : "#DC2026";
  const initColStatus = chairStatus?.filter((el) => el.rowName === rowName)[0].rowData;
  const [colStatus, setColStatus] = useState(initColStatus);

  const handleChairClick = (id, isSelect) => {
    const mapData = colStatus.map((el) => {
      if (el.id === id) {
        el.isSelect = isSelect;
        return el;
      } else {
        return el;
      }
    });
    setColStatus(mapData);
  };

  useEffect(() => {
    if (colStatus) {
      handleSetChairStatus(rowName, colStatus);
    }
  }, [colStatus]);

  return (
    <div>
      <div className="flex justify-center items-center ml-8">
        <div className="text-white"></div>
        <div className={`flex ${sizeMapping[size]} ${gapMapping[gap]} justify-center`}>
          {colStatus?.map((el) => (
            <Chair
              key={el.id}
              color={color}
              isBooked={el.isBooked}
              handleChairClick={handleChairClick}
              id={el.id}
            />
          ))}
          <div className="w-8 flex justify-center shrink-0">
            <h1 className="text-white text-2xl ">{rowName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
