"use client";

import { AiFillDashboard } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { currentState, navLinks } from "@/types/types";
import { BsGraphUp } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Navbar() {
  const path = usePathname();
  const queryClient = useQueryClient();

  const { data } = useQuery<currentState>({
    queryKey: ["sidebar"],
    initialData: () =>
      queryClient.getQueryData(["sidebar"]) ?? { current: false },
  });

  const NavLink: navLinks[] = [
    {
      id: "1",
      name: "Dashboard",
      icon: <AiFillDashboard />,
      link: "/",
    },
    {
      id: "2",
      name: "Statistics",
      icon: <BsGraphUp />,
      link: "/statistics",
    },
    {
      id: "3",
      name: "My Card",
      icon: <FaRegCreditCard />,
      link: "/mycard",
    },
    {
      id: "4",
      name: "Scan User QR",
      icon: <MdQrCode2 />,
      link: "/qrcode",
    },
  ];

  return (
    <nav
      className={`w-[30%] bg-blue-500 h-screen sm:absolute z-[1] ${
        data.current ? "sm:w-[70%]" : "hidden"
      }`}
    >
      <p className="hidden justify-end p-[20px] text-[25px] text-[white] -mb-[55px] sm:flex">
        <IoMdClose
          onClick={() => {
            queryClient.setQueryData<currentState>(["sidebar"], () => {
              return {
                current: false,
              };
            });
          }}
        />
      </p>
      <div className="flex justify-start items-center px-[40px] py-[10px] gap-[20px] mt-[30px]">
        {/* <h1>Ethnoes Bank</h1> */}
        <h1 className="text-3xl font-bold text-[white] text-center">EB</h1>
      </div>

      <ul className="mt-[50px] pr-[40px]">
        {NavLink.map((item: navLinks, index: number) => {
          return (
            <li key={index}>
              <Link
                href={item.link}
                className={`flex justify-start items-center gap-[10px] p-[17px] rounded-tl-none rounded-br-[10px] rounded-tr-[10px] rounded-bl-none text-lg font-normal leading-[21.78px] text-left  ${
                  path === item.link
                    ? "text-blue-500 bg-[white]"
                    : "text-[white] bg-blue-500"
                }`}
                onClick={() => {
                  queryClient.setQueryData<currentState>(["sidebar"], () => {
                    return {
                      current: false,
                    };
                  });
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
