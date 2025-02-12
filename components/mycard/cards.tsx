import React from "react";
import { PlusCircle } from "lucide-react";

const Cards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 sm:p-5">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-5">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Card</h1>
            <p className="text-sm text-gray-500">Tap Card for more detailed information</p>
          </div>
          <button
            className="bg-[#3b82f6] text-white p-2 rounded-full shadow hover:bg-blue-700 flex items-center"
            aria-label="Add Card"
          >
            <PlusCircle className="w-6 h-6" />
          </button>
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:flex sm:justify-between sm:items-start sm:flex-col">
          {/* Card 1 */}
          <div className="flex justify-between flex-col bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl p-6 shadow-lg h-64 sm:w-full">
            <div>
            <p className="text-white text-lg font-semibold">XXXX XXXX XXXX XXXX</p>
            <p className="text-white text-sm mt-2">John Doe</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 w-8 bg-gray-300 rounded-sm"></div>
              <div className="h-4 w-8 bg-gray-300 rounded-sm"></div>
              <div className="flex">
                  <span className="bg-red-500 w-12 h-12 rounded-full"></span>
                  <span className="bg-yellow-400 w-12 h-12 rounded-full -ml-4"></span>
                </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-between flex-col bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-xl p-6 shadow-lg h-64 sm:w-full">
            <div>
            <p className="text-white text-lg font-semibold">XXXX XXXX XXXX XXXX</p>
            <p className="text-white text-sm mt-2">British IKEA</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 w-8 bg-gray-300 rounded-sm"></div>
              <div className="h-4 w-8 bg-gray-300 rounded-sm"></div>
              <div className="flex">
                  <span className="bg-red-500 w-12 h-12 rounded-full"></span>
                  <span className="bg-yellow-400 w-12 h-12 rounded-full -ml-4"></span>
                </div>
            </div>
          </div>
        </div>

        {/* Activation Section */}
        <div className="mt-10 text-center">
          <h2 className="text-lg font-medium text-gray-800">Receive your card?</h2>
          <p className="text-sm text-gray-500">
            Tap the button to make sure your card is fully activated
          </p>
          <button className="mt-4 bg-[#3b82f6] text-white px-6 py-2 rounded-full shadow hover:bg-blue-700">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
