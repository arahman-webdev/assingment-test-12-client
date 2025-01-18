import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAgreementData from "../../Hooks/useAgreementData";
import LoadingSpinner from "../../Components/SharedComponents/Spinner";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [agreementItems, isLoading] = useAgreementData(); // Fetching agreement data
  const [rent, setRent] = useState(0); 
  const [discountedRent, setDiscountedRent] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [error, setError] = useState("");

  // Update rent and discountedRent when agreementItems are fetched
  useEffect(() => {
    if (agreementItems && agreementItems.rent) {
      setRent(agreementItems.rent);
      setDiscountedRent(agreementItems.rent); // Set initial discountedRent
    }
  }, [agreementItems]);

  // Fetch coupons with React Query
  const { data: coupons = [], isLoading: couponsLoading } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/coupons");
      return data;
    },
  });

  // Apply Coupon
  const applyCoupon = () => {
    setError(""); // Reset error
    const coupon = coupons.find((c) => c.name === couponCode);

    if (coupon) {
      const discountAmount = (rent * coupon.discount) / 100;
      const newRent = rent - discountAmount;
      setDiscountedRent(newRent);
      setIsCouponApplied(true);
    } else {
      setError("Invalid coupon code. Please try again.");
    }
  };

  // Handle Payment
  const handlePayment = async () => {
    try {
      // Mock payment submission
      await axiosSecure.post("/store-payment", {
        email: user?.email,
        amount: discountedRent,
        date: new Date(),
        status: "Paid",
      });

      navigate("/"); // Redirect to homepage after successful payment
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  // Show loading spinner until data is ready
  if (isLoading || loading || couponsLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Payment
        </h1>
        <div className="space-y-6">
          {/* Rent */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rent</label>
            <input
              type="text"
              value={`$${discountedRent}`}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Coupon Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Coupon Code
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full border border-gray-300 rounded-l-lg px-4 py-2"
                placeholder="Enter coupon code"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="bg-blue-900 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Payment Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handlePayment}
              className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
