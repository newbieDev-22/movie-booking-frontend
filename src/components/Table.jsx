import { useState } from "react";
import Modal from "./Modal";
import Ticket from "./Ticket";
import { PaymentTypeId } from "../constants";
import PaymentFeature from "../features/payment/components/PaymentFeature";

export default function Table({ data, fetchHistory }) {
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isQRCodePaymentOpen, setIsQRCodePaymentOpen] = useState(false);

  const dummyData = { ...data };
  const tmp = dummyData.qrCodeImage;
  delete dummyData.qrCodeImage;
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        {Object.values(dummyData).map((el, index) => (
          <td key={index} className="px-6 py-4">
            {el}
          </td>
        ))}
        <td
          className="px-6 py-4 text-2xl font-bold text-[#DC2026]"
          onClick={() => {
            if (PaymentTypeId[dummyData.paymentStatus] === PaymentTypeId.SUCCESS) {
              setIsTicketOpen(true);
            } else {
              setIsQRCodePaymentOpen(true);
            }
          }}
        >
          SHOW
        </td>
      </tr>
      <Modal
        title="Ticket"
        open={isTicketOpen}
        onClose={() => setIsTicketOpen(false)}
        width={45}
      >
        <Ticket data={dummyData} qrcodeImage={tmp} />
      </Modal>
      <Modal
        title="Payment"
        open={isQRCodePaymentOpen}
        onClose={() => setIsQRCodePaymentOpen(false)}
        width={40}
      >
        <PaymentFeature fetchHistory={fetchHistory} bookingId={dummyData.id} />
      </Modal>
    </>
  );
}
