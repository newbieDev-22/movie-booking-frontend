const heightMapping = {
  full: "h-full",
  normal: "h-[42px]",
};

export default function Input({
  placeholder,
  error,
  type = "text",
  name,
  value,
  onChange,
  height = "normal",
}) {
  return (
    <>
      <input
        type={type}
        className={`w-full ${
          heightMapping[height]
        } border rounded-md focus:outline-none focus:ring-2 text-md indent-4 ${
          error
            ? "border-[#CF6679] focus:ring-[#CF6679/80]"
            : "border-[#121212] focus:border-[#BB86FC] focus:ring-[#DBB2FF]"
        }`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <small className="text-[#CF6679] text-md font-semibold">{error}</small>
      ) : null}
    </>
  );
}
