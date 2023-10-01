import { Grid } from "gridjs-react";

import Profile from "../../components/common/Profile";
import { useEffect, useState } from "react";
import { getInCommingPhoneNumbers } from "../../actions/ServerAction";
export default function PhoneNumbers() {
  const [dataObject, setDataObject] = useState({});

  useEffect(() => {
    getInCommingPhoneNumbers()
      .then((response) => {
        setDataObject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   const [search, setSearch] = useState("");

  return (
    <div className="">
      <div className="flex justify-end items-center">
        <Profile />
      </div>

      <div className="flex gap-4  justify-start flex-col lg:flex-row">
        <div
          className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full  "
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="w-full h-full bg-[#1C1C2E] rounded-2xl py-4 px-4 lg:px-12">
            <div className="relative">
              <div className=" mb-3 mt-1    min-w-0  bg-transparent rounded overflow-x-auto ">
                <Grid
                  data={dataObject?.incoming_phone_numbers || []}
                  columns={["phone_number", "friendly_name", "Number of Calls"]}
                  pagination={{
                    limit: 10,
                  }}
                  search={false}
                  className={{
                    container: "mx-auto",
                    search: "hidden",
                    table:
                      "items-center bg-transparent w-full border-collapse  font-Ar mt-6 mb-8",
                    th: "px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-base   whitespace-nowrap font-semibold text-center",
                    td: "border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4  text-center text-[#A6A6AD]",
                    paginationSummary: "hidden md:block w-3/6",

                    paginationButton:
                      "border px-3 py-1 me-3 md:me-1.5  md:text-sm lg:text-base",
                    paginationButtonCurrent:
                      "bg-[#3637EA] px-3 py-1 border-[#3637EA] ",
                    paginationButtonNext: "border-none",
                    paginationButtonPrev: "border-none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
