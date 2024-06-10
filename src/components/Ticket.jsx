import QRcode from "../assets/qrcode_dummy.jpg";

export default function Ticket() {
  return (
    <div className="flex px-8 py-6">
      <div className="bg-[#7E1616] pl-6 pr-8 py-6 rounded-l-md flex justify-center items-center flex-1">
        <div className="grid grid-cols-3 gap-1">
          <div className="text-[#ABABAF]">MOVIE</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">
            Spider-Man: Across the Spider-Verse
          </div>
          <div className="text-[#ABABAF]">DATE</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">
            MON 10 JUN 2024 | 10:30
          </div>
          <div className="text-[#ABABAF]">THEATER</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">A</div>
          <div className="text-[#ABABAF]">SEATS</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">A11 | A12 | A13</div>
        </div>
      </div>
      <div className="bg-white rounded-r-md border-l-2 border-black border-dashed w-48">
        <img src={QRcode} alt="qrcode_payment" className="p-2" />
      </div>
    </div>
  );
}
