import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import stripeApi from "../../../apis/stripe";

function PaymentFeature({ bookingId, fetchHistory }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const fetchConfig = async () => {
    const config = await stripeApi.config();
    setStripePromise(loadStripe(config.data.publishableKey));
  };

  const fetchPaymentIntent = async () => {
    const paymentIntent = await stripeApi.paymentIntent(bookingId);
    setClientSecret(paymentIntent.data.clientSecret);
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  useEffect(() => {
    fetchPaymentIntent();
  }, [bookingId]);

  return (
    <div className="w-full">
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm bookingId={bookingId} fetchHistory={fetchHistory} />
        </Elements>
      )}
    </div>
  );
}

export default PaymentFeature;
