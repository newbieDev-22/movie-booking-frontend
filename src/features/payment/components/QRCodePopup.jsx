import React from "react";
import QRcode from "../../../assets/qrcode_dummy.jpg";

export default function QRCodePopup() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={QRcode} alt="qrcode_payment" className="p-6" />
      <div className="text-white font-semibold text-4xl flex gap-6">
        <div>Countdown</div>
        <div>-</div>
        <div>10:00</div>
      </div>
    </div>
  );
}
