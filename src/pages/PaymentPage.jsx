import Button from "../components/Button";
import { useEffect, useState } from "react";
import bookingApi from "../apis/booking";
import { useNavigate } from "react-router-dom";
import { PaymentTypeId } from "../constants";

export default function PaymentPage() {
  const [bookingIdList, setBookingIdList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await bookingApi.getBookingListByUserId();
        const bookingDataList = res.data.bookingDataList;
        const paymentIdList = [];
        bookingDataList.forEach((el) => {
          if (el.paymentTypeId === PaymentTypeId.PENDING) {
            paymentIdList.push(el.id);
          }
        });
        if (paymentIdList.length === 0) {
          navigate("/");
        } else {
          setBookingIdList(paymentIdList);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooking();
  }, []);

  const handleOnClick = () => {
    try {
      if (bookingIdList.length > 0) {
        bookingIdList.forEach(async (el) => {
          await bookingApi.successUpdate(el);
        });
        navigate("/");
      }
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
