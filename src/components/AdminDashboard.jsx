import React, { useState } from "react";
import MagnifyGlassIcon from "../assets/icon/MagnifyGlassIcon";
import FilterIcon from "../assets/icon/FilterIcon";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RecentTransaction from "./RecentTransaction";
import HighestTransaction from "./HighestTransaction";
import TimeAndDate from "./TimeAndDate";
import TransactionTable from "./TransactionTable";
import bgImg from "../assets/png/athletics-patterns.png";
export default function AdminDashboard() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex relative font-Manrope">
      <Sidebar toggleSidebar={toggleSidebar} />
      <div className="xl:pl-80 pl-4   w-full pt-[60px] pb-10 xl:pr-20 pr-4">
        <Navbar
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
        <div className="grid gap-x-16 mt-9 grid-cols-6">
          <div className="col-span-6 xl:col-span-4 ">
            <h3 className="text-custom-gray text-lg">In the last 30 days,</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
              <div className="col-span-1 relative h-20  rounded overflow-hidden">
                <img
                  src={bgImg}
                  alt="bg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute px-3 pt-5  text-white text-2xl top-0 left-0 w-full h-full bg-black bg-opacity-50">
                  30,000
                  <p className="text-xs mt-1 font-normal">payment</p>
                </div>
              </div>
              <div className="col-span-1 relative h-20  rounded overflow-hidden">
                <img
                  src={bgImg}
                  alt="bg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute px-3 pt-5  text-white text-2xl top-0 left-0 w-full h-full bg-black bg-opacity-50">
                  250
                  <p className="text-xs mt-1 font-normal">New users</p>
                </div>
              </div>
              <div className="col-span-1 relative h-20  rounded overflow-hidden">
                <img
                  src={bgImg}
                  alt="bg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute px-3 pt-5  text-white text-2xl top-0 left-0 w-full h-full bg-black bg-opacity-50">
                  $400,000
                  <p className="text-xs mt-1 font-normal">Revenue generated</p>
                </div>
              </div>
            </div>
            <h3 className="text-custom-gray text-lg mt-10 mb-2">All users</h3>
            <div className="flex gap-y-4 md:flex-row flex-col justify-between items-end">
              <h4 className="text-[#B3B3B3] w-full text-left text-xs font-normal">
                Monitor sales, transactions, etc.
              </h4>
              <div className="flex justify-between w-full gap-4">
                <div className="rounded flex items-center px-4 bg-[#FAFAFA] w-72 border border-[#E6E6E6]">
                  <MagnifyGlassIcon />
                  <input
                    type="text"
                    placeholder="Search transactions"
                    className="bg-transparent py-2 pl-4 focus:outline-none border-none w-full"
                  />
                </div>
                <div className=" p-2 flex items-center rounded border border-[#E6E6E6]">
                  <FilterIcon />
                  <h3 className="text-custom-gray text-sm font-normal">
                    Filter
                  </h3>
                </div>
              </div>
            </div>
            <TransactionTable />
          </div>
          <div className="col-span-6  xl:col-span-2">
            <div className="grid xl:grid-cols-1 gap-8 md:grid-cols-2">
              <RecentTransaction />
              <HighestTransaction />
              <TimeAndDate />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setToggleSidebar(false)}
        className={
          "bg-black  fixed top-0 left-0 bg-opacity-50 z-40 h-full cursor-pointer w-full " +
          (toggleSidebar ? " false" : " hidden")
        }
      ></div>
    </div>
  );
}
