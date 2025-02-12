"use client";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Dropdown } from "./dropdown";
import { financialDataFn, getBalanceFn } from "@/services/query";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatisticsPage() {
  const [timeframe, setTimeframe] = useState("Month");
  const { data: datasets } = financialDataFn();
  const { data: Balance } = getBalanceFn();
  const [amount, setAmount] = useState(0)
  const [expenses, setExpenses] = useState(0)

useEffect(() => {
  if (datasets?.data[0]?.data) {
    const totalAmount = datasets.data[0].data.reduce((sum: number, item: number) => sum + item, 0);
    setAmount(totalAmount);
  }
  if (datasets?.data[1]?.data) {
    const totalAmount = datasets.data[1].data.reduce((sum: number, item: number) => sum + item, 0);
    setExpenses(totalAmount);
  }
}, [datasets]);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: datasets?.data === undefined ? [] : datasets?.data
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Income vs Expenses Overview",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 sm:p-3">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-5">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Statistics</h1>
        </header>

        <section className="grid grid-cols-12 gap-8 sm:flex justify-between sm:items-start sm:flex-col sm:gap-4">
          {/* Total Balance */}
          <div className="col-span-12 lg:col-span-8 sm:w-full">
            <div className="p-6 bg-gray-50 border rounded-lg">
              <h2 className="text-xl font-medium text-gray-600 mb-4">
                Total Balance
              </h2>
              <p className="text-4xl font-bold text-gray-900 sm:text-2xl">
                ₦{Balance?.data.amount.toLocaleString("en-US")}
              </p>
            </div>
          </div>

          {/* Dropdown */}
          <div className="col-span-12 lg:col-span-4 flex justify-end items-center sm:w-full">
            <Dropdown
              options={["Month", "Year"]}
              selected={timeframe}
              onSelect={(value: string) => setTimeframe(value)}
            />
          </div>
        </section>

        {/* Overview */}
        <section className="my-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
          <Bar data={data} options={options} />
        </section>

        {/* Income and Expenses */}
        <section className="grid grid-cols-2 gap-8">
          <div className="p-6 bg-indigo-100 text-center rounded-lg">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Income</h3>
            <p className="text-2xl font-bold text-indigo-800">
              ₦{amount.toLocaleString("en-US")}
            </p>
          </div>

          <div className="p-6 bg-red-100 text-center rounded-lg">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Expenses</h3>
            <p className="text-2xl font-bold text-red-800">
              ₦{expenses.toLocaleString("en-US")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
