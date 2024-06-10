import { DateNonSelectIcon, DateSelectionIcon } from "../icons";

export default function DateItem({ children, dateState = false, onClick }) {
  return (
    <div role="button" className="relative" onClick={onClick}>
      {dateState ? <DateSelectionIcon /> : <DateNonSelectIcon />}
      <div className="absolute  m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
        {children}
      </div>
    </div>
  );
}
