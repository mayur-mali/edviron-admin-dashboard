import React from "react";

export default function TransactionTable() {
  const data = [
    {
      user: {
        name: "mulay",
        avtar: "https://randomuser.me/api/portraits/women/57.jpg",
      },
      status: "verified",
      ratings: 60,
      quantity: 400,
      amount: "400,000",
    },
    {
      user: {
        name: "tarun",
        avtar: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      status: "pending",
      ratings: 30,
      quantity: 200,
      amount: "400,000",
    },
    {
      user: {
        name: "jayesh",
        avtar: "https://randomuser.me/api/portraits/men/5.jpg",
      },

      status: "verified",
      ratings: 70,
      quantity: "40,000",
      amount: "1400,000",
    },
    {
      user: {
        name: "rani",
        avtar: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      status: "unverified",
      ratings: 0,
      quantity: 0,
      amount: 0,
    },
    {
      user: {
        name: "adity",
        avtar: "https://randomuser.me/api/portraits/men/54.jpg",
      },

      status: "verified",
      ratings: 84,
      quantity: "200",
      amount: "100,000",
    },
    {
      user: {
        name: "sujan",
        avtar: "https://randomuser.me/api/portraits/women/10.jpg",
      },

      status: "pending",
      ratings: 50,
      quantity: 30,
      amount: "250,000",
    },
  ];

  return (
    <div className=" px-4 sm:px-2 py-4 overflow-x-auto">
      <div className="inline-block h-auto min-w-full rounded-md ">
        <div className=" h-96  overflow-y-auto">
          <table className="min-w-full  leading-normal">
            <thead>
              <tr>
                {Object.keys(data[0]).map((title, i) => (
                  <th
                    key={i}
                    className="px-5 py-4 bg-[#E5E5E5] text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-[10%] overflow-y-auto">
              {data.map((item, i) => (
                <tr key={i}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-[#FCFCFC] text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
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
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-[#FCFCFC] text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className={
                          "absolute inset-0  opacity-50 rounded-md  " +
                          (item.status === "verified"
                            ? " bg-green-200"
                            : item.status === "unverified"
                            ? "bg-transparent"
                            : "bg-yellow-200")
                        }
                      ></span>
                      <span
                        className={
                          "relative text-xs capitalize " +
                          (item.status === "verified"
                            ? " text-green-400"
                            : item.status === "unverified"
                            ? "text-black"
                            : "text-yellow-400")
                        }
                      >
                        {item.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-5 py-5  border-b border-gray-200 bg-[#FCFCFC] text-sm">
                    {item.ratings > 1 ? (
                      <div className="flex  items-center gap-x-2">
                        <div className="w-40 h-1  bg-[#F2F2F2] rounded overflow-hidden">
                          <div
                            className={`bg-custom-gray h-full `}
                            style={{ width: `${item.ratings}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.ratings}%
                        </p>
                        <div
                          className={
                            "inset-0 flex-none opacity-50 rounded-md  px-2 py-1 " +
                            (item.status === "verified"
                              ? " bg-green-200"
                              : item.status === "unverified"
                              ? "bg-transparent"
                              : "bg-red-200")
                          }
                        >
                          ↑
                          {item.status === "verified"
                            ? "4"
                            : item.status === "unverified"
                            ? "0"
                            : "8"}
                          %
                        </div>
                      </div>
                    ) : (
                      "No ratings available"
                    )}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-[#FCFCFC] text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item.quantity}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-[#FCFCFC] text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      $ {item.amount}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-5 bg-[#F7F7F7] border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          <div className="inline-flex space-x-4 mt-2 xs:mt-0">
            <button className="text-sm text-custom-gray-light hover:text-custom-gray font-semibold  ">
              Previous page
            </button>
            <div className="flex  space-x-2">
              {[1, 2, 3, 4, 5, 6, 7].map((page, i) => (
                <span
                  className="h-5 w-5 cursor-pointer rounded-full text-xs bg-[#E6E6E6] flex justify-center items-center"
                  key={i}
                >
                  {page}
                </span>
              ))}
            </div>
            <button className="text-sm text-custom-gray-light hover:text-custom-gray font-semibold  ">
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
