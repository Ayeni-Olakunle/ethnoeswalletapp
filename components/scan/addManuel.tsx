const AddManualPopup = () => {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <p className="text-lg font-bold mb-4">Add Manually</p>
          <div>
            <label className="text-sm text-gray-500">Input UID:</label>
            <input
              type="text"
              className="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default AddManualPopup;
  