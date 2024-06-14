import QRcode from "../assets/qrcode_dummy.jpg";

export default function Ticket({ data, qrcodeImage }) {
  return (
    <div className="flex px-4 py-4">
      <div className="bg-[#7E1616] pl-6 pr-8 py-3 rounded-l-md flex justify-center items-center flex-1">
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-lg">
          <div className="text-[#ABABAF]">MOVIE</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">{data.movieName}</div>
          <div className="text-[#ABABAF]">DATE</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">{data.showtime}</div>
          <div className="text-[#ABABAF]">THEATER</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">
            {data.theaterName}
          </div>
          <div className="text-[#ABABAF]">SEATS</div>
          <div className="text-[#ECEEEF] col-span-2 font-semibold">{data.seats}</div>
        </div>
      </div>
      <div className="bg-white rounded-r-md border-l-2 border-black border-dashed w-48">
        <img src={qrcodeImage || QRcode} alt="qrcode_payment" className="p- " />
      </div>
    </div>
  );
}
