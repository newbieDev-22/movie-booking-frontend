import Button from "../components/Button";
import bookingApi from "../apis/booking";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const { paymentId } = useParams();
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      await bookingApi.successUpdate(+paymentId);
      navigate("/");
      toast.success("Payment Success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center ">
      <div className="w-1/5">
        <Button color="white" onClick={handleOnClick}>
          Payment
        </Button>
      </div>
    </div>
  );
}
