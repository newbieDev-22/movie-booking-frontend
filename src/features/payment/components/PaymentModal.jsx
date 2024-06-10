import Button from "../../../components/Button";

export default function PaymentModal({ onClick }) {
  return (
    <div>
      <div className="flex flex-col gap-4 p-2">
        <div className="text-xl font-bold text-white">Summary</div>
        <div className="text-[#DBD9DD] py-2 bg-[#0D0E11] px-4 rounded-md">
          Spider-Man: Across the Spider-Verse | 10 JUN | 10:30
        </div>
        <div className="text-[#DBD9DD] py-2 bg-[#0D0E11] px-4 rounded-md">
          2 Normal seats | 1 Premium seat
        </div>
      </div>
      <hr className="border-b border-[#5E5E62] my-4" />
      <div className="flex justify-between items-center font-bold text-white px-2 pb-4">
        <div className="text-xl">Total</div>
        <div className="text-4xl">900 &#x0E3F;</div>
      </div>
      <div>
        <Button color="white" onClick={onClick}>
          <div className="text-2xl font-bold">Pay</div>
        </Button>
      </div>
    </div>
  );
}
