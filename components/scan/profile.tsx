import { QrCode } from "lucide-react";
import profile from "@/public/profile.png";
import zenith from "@/public/ZENITH.png"

const ProfileCode = () => {
  return (
    <div className="flex justify-center items-center sm:mt-8 h-auto">
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl">
      <div className="flex flex-col items-center">
        <img
          src={profile.src}
          alt="Profile"
          className="w-40 h-40 mb-4"
        />
        <div className="flex justify-between items-center flex-col gap-4 mb-4">
        <p className="font-[Inter] font-normal text-lg leading-[19.36px] text-[#333333] tracking-[3px]">Send to:</p>
        <p className="font-[Inter] font-normal text-xl leading-[29.05px] tracking-[4px]">Call Me Teggar</p>
        <p className="font-[Inter] font-normal text-lg leading-[21.78px] tracking-[2px] text-[#828282]">UID: 8194638720</p>
        </div>
      </div>
      <p className="font-[Inter] font-normal text-[40px] leading-[48.41px] tracking-[3px] text-[#3A414A] my-8">$999.99</p>
      <div className="flex items-center justify-start gap-4 w-full mt-4 bg-gray-100 rounded-md [box-shadow:0px_4px_4px_0px_#00000040] p-6 mb-[15px]">
      <img
          src={zenith.src}
          alt="Profile"
          className="w-8 h-8"
        />
        <p className="font-[Inter] font-normal text-[17px] leading-[17.94px] tracking-[3px] text-[#333333] sm:text-xs">Zenith Bank Account ****703804</p>
      </div>
      <p className="font-[Inter] font-normal text-[15px] leading-[13.43px] tracking-[2px] text-center mx-[0] my-8 text-[#333333]">Amet minim mollit non deserunt ullamco est sit aliqua</p>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
        <QrCode className="mr-2" />
        Show QR Code
      </button>
    </div>
    </div>
  );
};

export default ProfileCode;
