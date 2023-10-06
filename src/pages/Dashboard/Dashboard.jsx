import { useEffect, useState } from "react";
import ChartLine from "../../components/Chats/LineChart";
import Profile from "../../components/common/Profile";
import lineSvg from "../../assets/line.svg";
import {
  getAllCalls,
  getInCommingPhoneNumbers,
} from "../../actions/ServerAction";
import { useDispatch, useSelector } from "react-redux";
import { allCalls } from "../../features/calls/callSlice";

function Dashboard() {
  const currentDate = new Date();

  const dispatch = useDispatch();

  const callsObejct = useSelector((state) => state.calls);

  const { calls } = callsObejct || {};
  const [, setSearch] = useState("");

  useEffect(() => {
    getAllCalls()
      .then((response) => {
        dispatch(allCalls(response.data));
        sessionStorage.setItem("calls", JSON.stringify(calls));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, calls]);

  useEffect(() => {
    getInCommingPhoneNumbers()
      .then((response) => {
        sessionStorage.setItem(
          "incomming_phone",
          JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  // useEffect(() => {
  //   if (calls.next_page_uri !== null) {
  //     getAllCallsSeparately(calls.next_page_uri)
  //       .then((response) => {
  //         setTimeout(() => {
  //           dispatch(allCalls(response.data));
  //           dispatch(updateAllCalls(response.data));
  //         }, 100);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [dispatch, calls]);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="relative  border border-[#1C1C2E]  p-1 ps-4 rounded-lg flex w-8/12 md:w-4/12 bg-[#1C1C2E] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#fff"
          >
            <path
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
            ></path>
          </svg>
          <input
            className="focus:outline-none  text-sm w-full   px-4 py-2 bg-transparent "
            type="text"
            placeholder="Filter Your Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <i className="ri-search-line text-blue-600"></i> */}
        </div>
        <Profile />
      </div>
      <div className="mt-6 font-Ar ">
        <div className="flex gap-12 md:gap-4 lg:gap-12 flex-col md:flex-row">
          <div
            className="h-[13rem] 2xl:h-60 overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(to right, #2d2d47, #3048AD) `,
            }}
          >
            <div className="w-full h-full bg-[#1C1C2E] rounded-2xl py-8 px-12 md:px-8 lg:px-12">
              <div className="flex justify-between items-start">
                <div className="w-6/12 md:w-7/12 lg:w-6/12">
                  <h1 className="text-2xl md:text-xl lg:text-xl font-medium">
                    Calls Received Today
                  </h1>
                  <h1 className="text-6xl font-Dm font-bold mt-4">
                    {calls?.calls &&
                      calls?.calls?.filter((response) => {
                        const callDate = new Date(response.date_created);
                        return (
                          callDate.toDateString() === currentDate.toDateString()
                        );
                      })?.length}
                  </h1>
                </div>
                <div className="flex items-center justify-center bg-[#3637EA] h-20 w-20  rounded-full ">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      color="#fff"
                      className="z-10"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.243 5.243h3m3 0h-3m0 0v-3m0 3v3M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[13rem] 2xl:h-60 overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(to right, #2d2d47, #3048AD) `,
            }}
          >
            <div className="w-full h-full bg-[#1C1C2E] rounded-2xl py-8 px-12 md:px-8 lg:px-12">
              <div className="flex justify-between items-start">
                <div className="w-6/12 md:w-7/12 lg:w-6/12">
                  <h1 className="text-2xl md:text-xl lg:text-xl font-medium">
                    Calls Received Past 2 Mins
                  </h1>
                  <h1 className="text-6xl font-Dm font-bold mt-4">
                    {calls?.calls &&
                      calls?.calls.filter((call) => {
                        const callDate = new Date(call.date_created);
                        const timeDifferenceInMilliseconds =
                          currentDate - callDate;
                        const timeDifferenceInMinutes =
                          timeDifferenceInMilliseconds / (1000 * 60);
                        return timeDifferenceInMinutes <= 2;
                      })?.length}
                  </h1>
                </div>
                <div className="flex items-center justify-center bg-[#3637EA] h-20 w-20  rounded-full ">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      color="#fff"
                      className="z-10"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.243 5.243h3m3 0h-3m0 0v-3m0 3v3M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="w-full h-[30rem] 2xl:h-[35rem]  bg-[#1C1C2E] rounded-2xl pt-8 px-6 md:px-12 pb-32">
          <h1 className="font-Ar">Inbound calls</h1>
          <div className="flex  gap-1 mt-4">
            <img src={lineSvg} className="w-10 mt-6" alt="" />
            <p className="text-[#34AA69]">17%</p>
          </div>
          <ChartLine />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
