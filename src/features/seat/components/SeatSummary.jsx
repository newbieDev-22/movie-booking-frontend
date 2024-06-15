import { useState } from "react";
import Button from "../../../components/Button";
import { ChairIcon } from "../../../icons";
import PaymentModal from "../../payment/components/PaymentModal";
import Modal from "../../../components/Modal";
import QRCodePopup from "../../payment/components/QRCodePopup";
import { seatPrice } from "../../../constants";

export default function SeatSummary({
  movie,
  date,
  time,
  normalCount,
  premiumCount,
  handleSubmit,
}) {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentImage, setPaymentImage] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [isQRCodePaymentOpen, setIsQRCodePaymentOpen] = useState(false);
  const totalPrice = seatPrice.NORMAL * normalCount + seatPrice.PREMIUM * premiumCount;
  return (
    <div>
      <div className=" flex justify-between items-center px-8 pt-4">
        <div className="flex flex-col">
          <div className="text-2xl text-[#DBD9DD] font-bold">SUMMARY</div>
        </div>

        <div className="flex gap-8 text-white px-8">
          <div className="flex gap-4 justify-center items-center">
            <ChairIcon className={"h-14"} />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-bold">
                {seatPrice.NORMAL * normalCount} &#x0E3F;
              </div>
              <div>{normalCount} Seats</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <ChairIcon className={"h-14"} fill="#985EFF" />
            <div className="flex flex-col gap-1">
              <div className="text-lg font-bold">
                {seatPrice.PREMIUM * premiumCount} &#x0E3F;
              </div>
              <div>{premiumCount} Seat</div>
            </div>
          </div>
        </div>

        <div className=" px-8 py-1 rounded-lg text-white flex justify-center items-center gap-8">
          <div className="text-xl">Total price : </div>
          <div className="text-5xl font-bold">{totalPrice} &#x0E3F;</div>
        </div>

        <div className="flex pl-8 ">
          <Button color="white" onClick={() => setIsPaymentOpen(true)}>
            <div className="text-2xl font-bold px-12">Booking</div>
          </Button>
        </div>
      </div>
      <Modal
        title="Payment"
        open={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        width={40}
      >
        <PaymentModal
          movie={movie}
          normalCount={normalCount}
          premiumCount={premiumCount}
          date={date}
          time={time}
          total={totalPrice}
          onClick={async () => {
            const bookingData = await handleSubmit();
            if (bookingData) {
              setPaymentImage(bookingData.qrCodeImagePath);
              setBookingId(bookingData.id);
              setIsPaymentOpen(false);
              setIsQRCodePaymentOpen(true);
            }
          }}
        />
      </Modal>
      <Modal
        title="QRCode for payment"
        open={isQRCodePaymentOpen}
        onClose={() => setIsQRCodePaymentOpen(false)}
        width={40}
      >
        <QRCodePopup qrcodeImage={paymentImage} bookingId={bookingId} />
      </Modal>
    </div>
  );
}
