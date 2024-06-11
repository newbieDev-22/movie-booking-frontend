const bgMap = {
  primary: "bg-[#DC2026] hover:bg-[#DC2026]/80 transition-all active:scale-95",
  active: "bg-[#DC2026] transition-all duration-300",
  nonActive: "hover:scale-125 transition-all active:scale-95 duration-300",
  isSelectBooking: "bg-[#5E5E62] transition-all duration-300",
  nonSelectBookin:
    "bg-[#ABABAF] hover:scale-110 transition-all active:scale-95 duration-300",
  deleteBtn: "bg-[#DC2026] hover:scale-[105%] transition-all active:scale-100",
  editBtn: "bg-[#5E5E62] hover:scale-[105%] transition-all active:scale-100",
  noBtn: "bg-white hover:bg-white/80 transition-all active:scale-95",
  addMovieBtn: "bg-[#D7D5D5] hover:scale-[102%] transition-all active:scale-100 ",
};

const colorMap = {
  white: " text-white",
  black: "text-black",
};

const widthMap = {
  full: "w-full",
};
export default function Button({
  children,
  bg = "primary",
  color = "black",
  width = "full",
  onClick,
}) {
  return (
    <button
      className={`px-3 py-3 ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} outline-none focus:outline-none rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
