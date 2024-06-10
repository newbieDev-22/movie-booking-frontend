import { useState } from "react";
import Button from "../../../components/Button";
import { ChairIcon } from "../../../icons";
import PaymentModal from "../../payment/components/PaymentModal";
import Modal from "../../../components/Modal";
import QRCodePopup from "../../payment/components/QRCodePopup";
import Ticket from "../../../components/Ticket";

export default function SeatSummary() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isQRCodePaymentOpen, setIsQRCodePaymentOpen] = useState(false);

  return (
    <div>
      <div className=" flex justify-between items-center px-8 pt-4">
        <div className="flex flex-col">
          <div className="text-4xl text-[#DBD9DD] font-bold">SUMMARY</div>
        </div>

        <div className="flex gap-8 text-white px-8 shrink-0">
          <div className="flex gap-4 justify-center items-center">
            <ChairIcon className={"h-14"} />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-bold">400 &#x0E3F;</div>
              <div>2 Seats</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <ChairIcon className={"h-14"} fill="#985EFF" />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-bold">500 &#x0E3F;</div>
              <div>1 Seat</div>
            </div>
          </div>
        </div>

        <div className="shrink-0 px-8 py-1 rounded-lg text-white flex justify-center items-center gap-8">
          <div className="text-xl">Total price : </div>
          <div className="text-5xl font-bold">900 &#x0E3F;</div>
        </div>

        <div className="flex pl-8 ">
          <Button color="white" onClick={() => setIsPaymentOpen(true)}>
            <div className="text-2xl font-bold px-12">Booking</div>
          </Button>
        </div>
      </div>
      {/* <Modal
        title="Payment"
        open={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        width={40}
      >
        <PaymentModal
          onClick={() => {
            setIsQRCodePaymentOpen(true);
            setIsPaymentOpen(false);
          }}
        />
      </Modal>
      <Modal
        title="QRCode for payment"
        open={isQRCodePaymentOpen}
        onClose={() => setIsQRCodePaymentOpen(false)}
        width={40}
      >
        <QRCodePopup />
      </Modal> */}
      <Modal
        title="Ticket"
        open={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        width={50}
      >
        <Ticket />
      </Modal>
    </div>
  );
}
