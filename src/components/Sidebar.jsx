import React from "react";
import Logo from "../assets/png/logo.png";
import SequreIcon from "../assets/icon/SequreIcon";
import SalesIcon from "../assets/icon/SalesIcon";
import UserIcon from "../assets/icon/UserIcon";
import GalleryIcon from "../assets/icon/GalleryIcon";
import SettingIcon from "../assets/icon/SettingIcon";
import LogoutIcon from "../assets/icon/LogoutIcon";
export default function Sidebar(props) {
  return (
    <div
      className={
        "flex-none bg-[#E5E5E5] px-8 pt-[60px] z-50 fixed lg:w-72 h-screen " +
        (props.toggleSidebar ? " xl:block hidden" : "w-72 animate__slideInLeft")
      }
    >
      <div className="">
        <img src={Logo} alt="logo" className="mx-auto" />
        <div className="mt-9">
          <ul className="text-base space-y-6 ">
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <SequreIcon /> <span className="ml-2">Dashboard</span>
            </li>
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <UserIcon /> <span className="ml-2"> Users</span>
            </li>
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <GalleryIcon /> <span className="ml-2"> Projects </span>
            </li>
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <SalesIcon /> <span className="ml-2"> Sales </span>
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <ul className="text-base space-y-6 ">
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <SettingIcon /> <span className="ml-2">Settings</span>
            </li>
            <li className="px-6 flex items-center rounded py-2 text-custom-gray-light hover:text-custom-gray cursor-pointer hover:bg-custom-green">
              <LogoutIcon /> <span className="ml-2">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
