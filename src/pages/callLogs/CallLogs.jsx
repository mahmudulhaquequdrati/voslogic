import { Grid, _ } from "gridjs-react";
import Profile from "../../components/common/Profile";
import { useEffect, useState } from "react";
import {
  getAllCalls,
  // getAllCalls,
  // getInCommingPhoneNumbers,
  getRecording,
} from "../../actions/ServerAction";

import { CSVLink } from "react-csv";
// import { toggleApi } from "../../features/layout/layoutSlice";
// import { useDispatch } from "react-redux";

export default function CallLogs() {
  const [calls, setCalls] = useState([]);
  const [dataObject, setDataObject] = useState({});
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getAllCalls()
  //     .then((response) => {
  //       setCalls(response.data.calls);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   getInCommingPhoneNumbers()
  //     .then((response) => {
  //       setDataObject(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   dispatch(toggleApi(true));
  // }, [dispatch]);

  const item = sessionStorage.getItem("calls");
  const phone = sessionStorage.getItem("incomming_phone");

  useEffect(() => {
    if (item) {
      setCalls(JSON.parse(item).calls);
    }
  }, [item]);

  useEffect(() => {
    if (phone) {
      setDataObject(JSON.parse(phone));
    }
  }, [phone]);

  useEffect(() => {
    getAllCalls()
      .then((response) => {
        setCalls(response.data.calls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let data = [];
  function getDate(cell) {
    const date = new Date(cell);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  function getTime(cell) {
    const dateObject = new Date(cell);

    const hours = dateObject.getUTCHours().toString().padStart(2, "0");
    const minutes = dateObject.getUTCMinutes().toString().padStart(2, "0");
    const seconds = dateObject.getUTCSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  if (calls?.length) {
    calls.forEach((x) => {
      data.push({
        date: getDate(x.date_created),
        time: getTime(x.date_created),
        duration: secondsToMinutesAndSeconds(x.duration),
        from: x.from,
        to: x.to,
        toName:
          dataObject?.incoming_phone_numbers?.filter(
            (d) => d?.phone_number === x.to
          )[0]?.friendly_name || "NA",
      });
    });
  }

  function secondsToMinutesAndSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + " mins " + remainingSeconds + " sec";
  }

  function handleRec(url) {
    getRecording(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // For the normal search
  const [dateFilter, setDateFilter] = useState("");
  const [filteredCalls, setFilteredCalls] = useState([]);
  useEffect(() => {
    // Update filteredCalls whenever dateFilter changes
    if (!dateFilter) {
      // If dateFilter is empty, show all calls
      setFilteredCalls(calls);
    } else {
      // Filter calls based on the selected date
      const filtered = calls.filter((call) => {
        const callDate = new Date(call.date_created).toDateString();
        const filterDate = new Date(dateFilter).toDateString();
        return callDate === filterDate;
      });
      setFilteredCalls(filtered);
    }
  }, [dateFilter, calls]);

  return (
    <div className="">
      <div className="flex justify-end items-center">
        <Profile />
      </div>

      <div
        className="mt-6  border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full  "
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="h-full bg-[#1C1C2E] rounded-2xl py-4 px-8 max-w-full">
          {calls.length ? (
            <div className="relative">
              <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
                {calls.length && dataObject?.incoming_phone_numbers ? (
                  <Grid
                    data={filteredCalls.map((x) => [
                      x.date_created,
                      x.date_created,
                      x.duration,
                      x.from,
                      x.to,
                      dataObject?.incoming_phone_numbers?.filter(
                        (d) => d?.phone_number === x.to
                      ).length
                        ? dataObject?.incoming_phone_numbers?.filter(
                            (d) => d?.phone_number === x.to
                          )[0]?.friendly_name
                        : "NA",
                      x.subresource_uris?.recordings || " ",
                      "ai",
                    ])}
                    columns={[
                      {
                        name: "Date",
                        formatter: (cell) => {
                          const date = new Date(cell);
                          const day = date.getDate();
                          const month = date.getMonth() + 1;
                          const year = date.getFullYear();

                          return `${month}/${day}/${year}`;
                        },
                      },
                      {
                        name: "Time",
                        formatter: (cell) => {
                          const dateObject = new Date(cell);

                          const hours = dateObject
                            .getUTCHours()
                            .toString()
                            .padStart(2, "0");
                          const minutes = dateObject
                            .getUTCMinutes()
                            .toString()
                            .padStart(2, "0");
                          const seconds = dateObject
                            .getUTCSeconds()
                            .toString()
                            .padStart(2, "0");

                          return `${hours}:${minutes}:${seconds}`;
                        },
                      },
                      {
                        name: "Duration",
                        formatter: (cell) => {
                          const result = secondsToMinutesAndSeconds(cell);
                          return result;
                        },
                      },
                      "From",
                      "To",
                      "To Number Name",
                      {
                        name: "Recordings",
                        formatter: (cell) => {
                          let rec = [];
                          getRecording(cell)
                            .then((response) => {
                              rec = response.data?.recordings;
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                          return _(
                            <div
                              className="flex justify-center"
                              onClick={() => handleRec(cell)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                fill="none"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                color="#000000"
                              >
                                <rect
                                  width="6"
                                  height="12"
                                  x="9"
                                  y="2"
                                  stroke={rec.length ? "green" : "#000"}
                                  strokeWidth="1.5"
                                  rx="3"
                                ></rect>
                                <path
                                  stroke={rec.length ? "green" : "#000"}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
                                ></path>
                              </svg>
                            </div>
                          );

                          // return cell;
                        },
                      },
                      {
                        name: "Action",
                        formatter: (cell) => {
                          // return cell;
                          return _(
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center border p-2 h-10 w-10 rounded-full">
                                {cell}
                              </div>
                            </div>
                          );
                        },
                      },
                    ]}
                    search={true}
                    pagination={{
                      limit: 10,
                    }}
                    className={{
                      container: "",
                      table:
                        "items-center bg-transparent min-w-[80vw] lg:min-w-[70vw] border-collapse  font-Ar mt-6 mb-8 table-auto",
                      th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-base   whitespace-nowrap font-semibold text-center",
                      td: "border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4  text-center text-[#A6A6AD]",
                      paginationSummary: "hidden md:block",
                      paginationButton: "border px-3 py-1 me-3 ",
                      paginationButtonCurrent:
                        "bg-[#3637EA] px-3 py-1 border-[#3637EA] ",
                      paginationButtonNext: "border-none",
                      paginationButtonPrev: "border-none",
                    }}
                  />
                ) : null}
                <div
                  className={`flex absolute -right-0 items-center justify-between w-2/4 lg:w-[67.67%]`}
                >
                  <div className=" ">
                    <input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="bg-[#1F1F41] rounded px-2.5 border-[#1F1F41] py-2.5 w-full ms-4 focus:outline-none"
                    />
                  </div>
                  <div className="relative hidden lg:block">
                    <button className=" bg-[#3637EA] text-white px-6 py-2.5 rounded-lg font-Ar w-48 ">
                      <CSVLink data={data}>Export CSV</CSVLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
