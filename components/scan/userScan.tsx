const ScanUserQR = () => {
    return (
      <div className="relative w-full max-w-2xl p-6 rounded-2xl shadow-lg bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="border-4 border-blue-500 w-64 h-64" />
        </div>
        <div className="flex justify-center mt-64">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Manually
          </button>
        </div>
      </div>
    );
  };
  
  export default ScanUserQR;
  