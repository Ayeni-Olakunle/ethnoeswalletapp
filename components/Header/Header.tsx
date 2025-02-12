"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import { currentState } from "@/types/types";

export default function Header() {
  const path = usePathname();
  const client = useQueryClient();
  return (
    <div
      className="flex justify-between items-center px-[30px] py-[15px] [border-bottom:1px_solid_#CECECE] sm:p-[10px]"
      data-aos="fade-down"
    >
      <div className="flex justify-center items-center sm:gap-[.8rem]">
        <IoMenu
          className="text-3xl text-[#535353] cursor-pointer hidden sm:block"
          onClick={() => {
            client.setQueryData<currentState>(["sidebar"], () => {
              return {
                current: true,
              };
            });
          }}
        />
        <h1 className=" text-3xl font-bold leading-[36.31px] text-left sm:text-[1.3rem]">
          {path === "/" && "Dashboard"}
          {path === "/statistics" && "Statistics"}
          {path === "/mycard" && "My Card"}
          {path === "/qrcode" && "Profile"}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-[20px] sm:gap-[.5rem]">
        <h1 className="border-[2px] border-solid border-blue-500 rounded-[50px] flex justify-center items-center bg-blue-500 text-[white] w-[40px] h-[40px] text-[15px]">
          DJ
        </h1>
        <div>
          <h4 className=" text-sm font-bold leading-[24.2px] text-left">
            Hello
          </h4>
          <p className=" text-base font-medium leading-[24.2px] text-left text-[#747474]">
            Deji John
          </p>
        </div>
        <MdOutlineArrowDropDown className="text-[#747474] text-[25px]" />
      </div>
    </div>
  );
}
