import { QrCode } from "lucide-react";

const ScanPopup = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-lg font-bold mb-4">Call Me Teggar</p>
        <div className="flex justify-center mb-4">
          <QrCode className="text-blue-500" size={100} />
        </div>
        <p className="text-sm text-gray-500">UID: 8194638720</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Scan QR Code
        </button>
      </div>
    </div>
  );
};

export default ScanPopup;
