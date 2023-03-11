import React from "react";

export default function HighestTransaction() {
  const data = [
    {
      user: {
        name: "mulay",
        avtar: "https://randomuser.me/api/portraits/women/57.jpg",
      },
      sales: "40k+ sales",
      revenue: "$1.4m revenue",
    },
    {
      user: {
        name: "tarun",
        avtar: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      sales: "40k+ sales",
      revenue: "$1.4m revenue",
    },
    {
      user: {
        name: "jayesh",
        avtar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      sales: "40k+ sales",
      revenue: "$1.4m revenue",
    },
  ];
  return (
    <div className="w-full bg-[#FCFCFC] pt-8 rounded h-72">
      <h2 className="text-center text-lg font-semibold">
        Highest Transactions
      </h2>
      <div className="p-4 w-full space-y-2">
        {data.map((item, i) => (
          <div className="flex justify-between space-x-8  items-center" key={i}>
            <div className=" flex  items-center w-30 h-10">
              <div className="w-10 h-10 bg-[#E6E6E6] p-1 rounded border border-[#E6E6E6]">
                <img
                  className="w-full h-full "
                  src={item.user.avtar}
                  alt={item.user.name}
                />
              </div>
              <div className="ml-3">
                <p className="text-custom-gray-light capitalize text-xs whitespace-no-wrap">
                  {item.user.name}
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-custom-gray-light capitalize text-xs whitespace-no-wrap">
                {item.sales}
              </p>
            </div>
            <div className="">
              <p className="text-custom-gray-light capitalize text-xs whitespace-no-wrap">
                {item.revenue}
              </p>
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center items-center">
          <button className="p-2 bg-custom-green rounded">
            View all transactions
          </button>
        </div>
      </div>
    </div>
  );
}
