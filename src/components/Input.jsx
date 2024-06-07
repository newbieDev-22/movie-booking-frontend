export default function Input({
  placeholder,
  error,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <>
      <input
        type={type}
        className={`w-full px-3 py-4 border rounded-md focus:outline-none focus:ring-2 text-lg ${
          error
            ? "border-[#CF6679] focus:ring-[#CF6679/80]"
            : "border-[#121212] focus:border-[#BB86FC] focus:ring-[#DBB2FF]"
        }`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? <small className="text-[#CF6679]">{error}</small> : null}
    </>
  );
}
