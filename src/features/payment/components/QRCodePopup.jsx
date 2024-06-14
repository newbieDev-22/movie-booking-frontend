import React from "react";
import QRcode from "../../../assets/qrcode_dummy.jpg";

export default function QRCodePopup({ qrcodeImage, fetchHistory }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={qrcodeImage || QRcode} alt="qrcode_payment" className="rounded-3xl m-6" />
      <div className="text-white font-semibold text-4xl flex gap-6">
        <a href="http://localhost:5173/payment" onClick={fetchHistory}>
          Click Me
        </a>
      </div>
    </div>
  );
}
