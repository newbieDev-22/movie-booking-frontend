import axios from "../config/axios";

const stripeApi = {};

stripeApi.config = () => axios.get(`${import.meta.env.VITE_API_URL}/stripe/config`);
stripeApi.paymentIntent = (bookingId) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/stripe/create-payment-intent/payment/${bookingId}`
  );

export default stripeApi;
