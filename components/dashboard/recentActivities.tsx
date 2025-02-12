import React from "react";

const RecentActivities = (recent: {
  item: string;
  image: string;
  amount: string;
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={recent.image}
          alt={recent.item}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="font-bold">{recent.item}</h4>
          <p className="text-sm text-gray-500">Payment Received</p>
        </div>
      </div>
      <span className="text-red-500 font-bold">-₦{recent.amount}</span>
    </div>
  );
};

export default RecentActivities;
