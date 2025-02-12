"use client"

import React from "react";
import { LuSquarePlus } from "react-icons/lu";
import { LuArrowDownUp } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import RecentActivities from "./recentActivities";
import MySavingsPlans from "./mySavingsPlans";
import DashboardHeader from "./header";
import Card from "./card";
import { savingsPlansFn, recentActivitiesDataFn } from "@/services/query";

const Dashboard = () => {
  const { data } = savingsPlansFn();
  const { data: recent } = recentActivitiesDataFn();

  console.log(recent?.data);
  
  
  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:p-5">
      {/* Header */}
      <DashboardHeader />

      {/* Main Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card Section */}
        <div className="col-span-8 sm:col-[span_12_/_span_8]">
        <Card />          

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            {[{name: "Add Money", icons: <LuSquarePlus  className="mr-2" />}, {name: "Transfer", icons: <LuArrowDownUp className="mr-2" />}, {name: "Budget", icons: <TbPigMoney className="mr-2" />}].map((item, index) => {
              return (
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-md sm:px-[15px] sm:py-[10px]" key={index}>
               {item.icons}{item.name}
            </button>
              )
            })}
          </div>

          {/* Recent Activities */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Recent Activities</h3>
              <button className="text-blue-500">View All</button>
            </div>
            <div className="space-y-4">
              {recent?.data.map((item: {label: string, link: string, amount: number}, index: number) => (
                <RecentActivities item={item.label} image={item.link} amount={item.amount.toLocaleString("en-US")} key={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Savings Plan */}
        <div className="col-span-4 sm:mt-4 sm:col-[span_12_/_span_8]">
          <h3 className="text-xl font-bold mb-4">My Savings Plans</h3>
          <div className="grid gap-4">
            {data?.data.map((plan: {name: string, amount: number}, index: number) => (
              <MySavingsPlans name={plan.name} amount={plan.amount.toLocaleString("en-US")} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;