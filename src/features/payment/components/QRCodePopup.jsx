import React from "react";
import QRcode from "../../../assets/qrcode_dummy.jpg";

export default function QRCodePopup({ qrcodeImage, fetchHistory, bookingId }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white py-2 text-lg">Please pay within 10 minutes</h1>
      <img
        src={qrcodeImage || QRcode}
        alt="qrcode_payment"
        className="rounded-3xl my-4 w-3/5 aspect-square"
      />
      <div className="text-white font-semibold text-4xl flex gap-6">
        <a href={`http://localhost:5173/payment/${bookingId}`} onClick={fetchHistory}>
          Click Me
        </a>
      </div>
    </div>
  );
}
