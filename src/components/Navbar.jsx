import React from "react";
import BellIcon from "../assets/icon/BellIcon";
import MagnifyGlassIcon from "../assets/icon/MagnifyGlassIcon";
import MenuIcon from "../assets/icon/MenuIcon";
import UserImage from "../assets/png/Ellipse 1.png";
export default function Navbar(props) {
  return (
    <div className="h-12 flex items-center  justify-between">
      <div className="max-w-xs sm:max-w-sm lg:max-w-lg py-2 px-4 bg-[#FAFAFA] flex items-center space-x-2 border rounded border-[#E6E6E6] w-full">
        <MagnifyGlassIcon />
        <input
          type="text"
          placeholder="Search users,payments"
          className="bg-transparent focus:outline-none border-none w-full"
        />
      </div>
      <div className="xl:flex hidden space-x-8">
        <div className="flex space-x-2">
          <img
            src={UserImage}
            alt="user"
            className="h-10 w-10 rounded-full object-contain"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-sm text-[#4C4C4C] font-semibold">Mayur Mali</h3>
            <h4 className="text-sm text-[#B3B3B3] font-semibold">Admin</h4>
          </div>
        </div>
        <div className="h-10 bg-[#F2F2F2] w-10 rounded-full flex justify-center items-center">
          <BellIcon />
        </div>
      </div>
      <MenuIcon options={props} />
    </div>
  );
}
