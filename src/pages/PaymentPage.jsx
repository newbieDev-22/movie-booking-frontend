import Button from "../components/Button";
import bookingApi from "../apis/booking";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../components/Spinner";

export default function PaymentPage() {
  const { paymentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      await bookingApi.successUpdate(+paymentId);
      navigate("/");
      toast.success("Payment Success");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}
      <div className="bg-black h-screen w-screen flex justify-center items-center ">
        <div className="w-1/5">
          <Button color="white" onClick={handleOnClick}>
            Payment
          </Button>
        </div>
      </div>
    </>
  );
}
