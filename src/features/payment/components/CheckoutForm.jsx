import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bookingApi from "../../../apis/booking";
import Button from "../../../components/Button";

export default function CheckoutForm({ bookingId, fetchHistory }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }

      setIsProcessing(true);

      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (paymentIntent) {
        if (paymentIntent.status === "succeeded") {
          await bookingApi.successUpdate(+bookingId);
          if (fetchHistory) {
            fetchHistory();
          }
          toast.success("Payment successfully!");
          navigate("/search");
        }
      }

      setIsProcessing(false);

      if (error?.type === "card_error" || error?.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="bg-white px-4 py-2 rounded-lg"
    >
      <PaymentElement
        options={{ paymentMethodOrder: ["apple_pay", "google_pay", "card"] }}
      />
      <div className="flex justify-between h-16 mt-2 items-center">
        <Button
          type="submit"
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          color="white"
        >
          <span id="button-text">{isProcessing ? "Processing ... " : "Pay now"}</span>
        </Button>
      </div>
      {message && (
        <div id="payment-message" className="text-red-500 mt-1">
          {message}
        </div>
      )}
    </form>
  );
}
