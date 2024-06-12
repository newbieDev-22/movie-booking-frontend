export default function SeatSelectIconComponent({ children, iconName }) {
  return (
    <div className="flex justify-center items-center gap-3 p-1">
      <div className="h-full rounded-full bg-white">{children}</div>
      <div>{iconName}</div>
    </div>
  );
}
