const bgMap = {
  primary: "bg-[#BB86FC] hover:bg-[#985EFF] active:bg-[#7F39FB]",
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
      className={`px-3 py-3 ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} focus:outline-none rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
