import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Coupons = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], isLoading, refetch } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/coupons');
      return data;
    },
  });

  // Filter only available coupons
  const availableCoupons = coupons.filter((coupon) => coupon.available);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Exclusive Coupons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableCoupons.length > 0 ? (
            availableCoupons.map((coupon) => (
              <div
                key={coupon._id} // Use `_id` from MongoDB
                className="bg-white hover:shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-blue-900">{coupon.name}</h3>
                <p className="text-gray-700 mt-2">{coupon.description}</p>
                <p className="text-gray-500 mt-1 text-sm">{coupon.discount}%</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-900 font-bold py-2 px-4 rounded-lg">
                    {coupon.name}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No coupons available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
