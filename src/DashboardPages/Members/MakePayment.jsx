import React, { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import LoadingSpinner from "../../Components/SharedComponents/Spinner";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const [coupon, setCoupon] = useState("");
  const [discountedRent, setDiscountedRent] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const { data: acceptedItem = {}, isLoading } = useQuery({
    queryKey: ["acceptedItems", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/accepted-request/${user?.email}`);
      return data;
    },
  });

  const {
    floorNo = "",
    roomNo = "",
    blockName = "",
    rent = "",
    apartmentNo = "",
  } = acceptedItem;

  if (loading || isLoading) return <LoadingSpinner />;

  const applyCoupon = async () => {
    try {
      const { data } = await axiosSecure.post("/validate-coupon", { coupon });
      if (data.valid) {
        const discountedAmount = rent - (rent * data.discountPercentage) / 100;
        setDiscountedRent(discountedAmount);
        setIsCouponApplied(true);
        alert(`Coupon applied! New rent: $${discountedAmount}`);
      } else {
        alert("Invalid coupon code");
      }
    } catch (error) {
      console.error("Failed to validate coupon", error);
      alert("Error applying coupon");
    }
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const { data } = await axiosSecure.post("/create-payment-intent", {
        email: user?.email,
        amount: discountedRent || rent,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Make Payment
        </h1>
        <form className="space-y-6">
          {/* Display Member Information */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Member Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Floor</label>
            <input
              type="text"
              value={floorNo}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          {/* Add more fields as necessary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rent</label>
            <input
              type="text"
              value={`$${discountedRent || rent}`}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Coupon Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Coupon</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Payment Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handlePayment}
              className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
              disabled={!isCouponApplied}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
