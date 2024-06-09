const bgMap = {
  primary: "bg-[#DC2026]  hover:bg-[#A30500]/80 transition-all active:scale-95",
  nonActive: "bg-red-400  hover:bg-red-500  transition-all active:scale-95",
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
      className={`px-3 py-3 ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} focus:outline-none rounded-md `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
