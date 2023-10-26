import { Grid, _ } from "gridjs-react";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { openModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

export default function AllCalls() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(openModal());
  };
  const [originalData, setOriginalData] = useState([
    {
      departments: "Sales",
      createDate: "Tue, 24 Oct 2023 13:27:05 +0000",
      AgentName: "John Doe",
      _id: "26874ysadhfkajsl",
      from: "+16264377481",
      duration: 46,
      recordings:
        "/api/laml/2010-04-01/Accounts/5c46b95f-6635-4c38-a973-e3004fb9d2ac/Calls/2b5da509-493b-422d-b150-e1f374ca2d63/Recordings",
    },
    {
      departments: "Marketing",
      createDate: "Tue, 24 Oct 2023 13:27:04 +0000",
      AgentName: "Jane Doe",
      _id: "26874ysadhfkajsl",
      from: "+16264377481",
      duration: 46,
      recordings:
        "/api/laml/2010-04-01/Accounts/5c46b95f-6635-4c38-a973-e3004fb9d2ac/Calls/2b5da509-493b-422d-b150-e1f374ca2d63/Recordings",
    },
    {
      departments: "Sales",
      createDate: "Tue, 24 Oct 2023 13:27:05 +0000",
      AgentName: "John Doe",
      _id: "26874ysadhfkajsl",
      from: "+16264377481",
      duration: 46,
      recordings:
        "/api/laml/2010-04-01/Accounts/5c46b95f-6635-4c38-a973-e3004fb9d2ac/Calls/2b5da509-493b-422d-b150-e1f374ca2d63/Recordings",
    },
    {
      departments: "Marketing",
      createDate: "Tue, 24 Oct 2023 13:27:04 +0000",
      AgentName: "Jane Doe",
      _id: "26874ysadhfkajsl",
      from: "+16264377481",
      duration: 46,
      recordings:
        "/api/laml/2010-04-01/Accounts/5c46b95f-6635-4c38-a973-e3004fb9d2ac/Calls/2b5da509-493b-422d-b150-e1f374ca2d63/Recordings",
    },
  ]);

  function secondsToMinutesAndSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + " mins " + remainingSeconds + " sec";
  }

  // Layout show data
  const handleShowData = (data) => {
    console.log("handleShowData ", data);

    if (data === "list") {
      console.log("data === list ", data);
      //   Function here ...
    }

    if (data === "card") {
      console.log("data === card ", data);
      // function here ...
    }
  };

  // Searching
  const handleFilter = (data) => {
    console.log("handleFilter ", data);
  };

  // Recoding Play
  function handleRec(url) {
    console.log("handleRec ", url);

    // getRecording(url)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // visible handle
  const handleVisible = (data) => {
    console.log("handleVisible ", data);
  };

  // Create Export
  const handleExport = (data) => {
    console.log("handleExport ", data);
  };

  return (
    <div className="">
      <Modal />
      <div className="flex justify-start items-center">
        <h1 className="text-2xl font-bold"> All Calls </h1>
      </div>

      <div
        className="mt-6  border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full  "
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="h-full bg-[#1C1C2E] rounded-2xl py-4 px-8 max-w-full">
          {originalData ? (
            <div className="relative">
              <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
                {originalData ? (
                  <Grid
                    data={originalData.map((x) => [
                      x.createDate,
                      x.AgentName || " ",
                      x.departments,
                      x.from,
                      x.duration,
                      x?.recordings || " ",
                      x._id,
                    ])}
                    columns={[
                      {
                        name: "Create Date",
                        formatter: (cell) => {
                          const date = new Date(cell);
                          const day = date.getDate();
                          const month = date.getMonth() + 1;
                          const year = date.getFullYear();

                          return `${month}/${day}/${year}`;
                        },
                      },
                      {
                        name: "Agents Name",
                      },
                      {
                        name: `Departments`,
                      },
                      {
                        name: `From No`,
                      },
                      {
                        name: "Duration",
                        formatter: (cell) => {
                          const result = secondsToMinutesAndSeconds(cell);
                          return result;
                        },
                      },
                      {
                        name: "Recordings",
                        formatter: (cell) => {
                          //   let rec = [];
                          //   getRecording(cell)
                          //     .then((response) => {
                          //       rec = response.data?.recordings;
                          //     })
                          //     .catch((error) => {
                          //       console.log(error);
                          //     });

                          return _(
                            <div
                              className="flex justify-center"
                              onClick={() => handleRec(cell)}
                            >
                              <span>
                                <svg
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 8L21 15L12 22L12 8Z"
                                    fill="#3637EA"
                                  />
                                  <circle
                                    cx="15"
                                    cy="15"
                                    r="14.5"
                                    stroke="#2E59DA"
                                  />
                                </svg>
                              </span>
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
                            <div
                              onClick={() => handleCloseModal()}
                              className="flex justify-center items-center"
                            >
                              <div className="flex justify-center items-center p-2 h-10 w-10 rounded-full">
                                <button className="text-[#3637EA]">
                                  <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="15"
                                      cy="15"
                                      r="14.5"
                                      stroke="#2E59DA"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M17.3712 15.0398C17.3712 16.3493 16.3092 17.4106 14.9997 17.4106C13.6902 17.4106 12.6289 16.3493 12.6289 15.0398C12.6289 13.7296 13.6902 12.6683 14.9997 12.6683C16.3092 12.6683 17.3712 13.7296 17.3712 15.0398Z"
                                      stroke="#3637EA"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.9985 20.5162C17.8545 20.5162 20.4668 18.4627 21.9375 15.0397C20.4668 11.6167 17.8545 9.56317 14.9985 9.56317H15.0015C12.1455 9.56317 9.53325 11.6167 8.0625 15.0397C9.53325 18.4627 12.1455 20.5162 15.0015 20.5162H14.9985Z"
                                      stroke="#3637EA"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </button>
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
                      th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle  bg-[#01108D] py-3 text-base   whitespace-nowrap font-semibold text-center",
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
                  className={`w-full md:w-auto -right-0 md:-top-0 absolute flex items-center justify-between md:justify-end lg:gap-8 md:gap-4 sm:ml-auto top-[68px]`}
                >
                  {/* show data layout */}
                  <div className="flex flex-row">
                    {/* show list items */}
                    <button onClick={() => handleShowData("list")} className="">
                      <span>
                        <svg
                          width="46"
                          height="39"
                          viewBox="0 0 46 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.7">
                            <path
                              d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H45.5V38.5H12C5.64873 38.5 0.5 33.3513 0.5 27V12Z"
                              fill="#F1FFFF"
                            />
                            <path
                              d="M19.4121 9.26743C18.866 9.26743 18.4258 9.74736 18.4258 10.342V12.5052C18.4258 13.0996 18.866 13.5801 19.4121 13.5801H33.5072C34.0534 13.5801 34.4936 13.0996 34.4936 12.5052V10.342C34.4936 9.74736 34.0531 9.26743 33.5072 9.26743H19.4121Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M19.4121 16.0412C18.866 16.0412 18.4258 16.52 18.4258 17.116V19.2781C18.4258 19.8742 18.866 20.3524 19.4121 20.3524H33.5072C34.0534 20.3524 34.4936 19.8742 34.4936 19.2781V17.116C34.4936 16.52 34.0531 16.0412 33.5072 16.0412H19.4121Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M19.4121 22.8138C18.866 22.8138 18.4258 23.2937 18.4258 23.8883V26.0504C18.4258 26.6462 18.866 27.125 19.4121 27.125H33.5072C34.0534 27.125 34.4936 26.6462 34.4936 26.0504V23.8883C34.4936 23.294 34.0531 22.8138 33.5072 22.8138H19.4121Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M14.2311 22.8138C13.6601 22.8138 13.1114 23.0412 12.7059 23.4451C12.3023 23.8503 12.0752 24.3976 12.0752 24.97C12.0752 25.5426 12.3026 26.0902 12.7076 26.4935C13.1117 26.8987 13.6601 27.1259 14.2314 27.1247C15.4218 27.1247 16.3876 26.1604 16.3876 24.97C16.3876 24.3976 16.1601 23.8503 15.7566 23.4451C15.3507 23.0412 14.8035 22.8138 14.2311 22.8138Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M14.2311 16.0412C13.6601 16.0412 13.1114 16.2675 12.7059 16.6724C12.3023 17.076 12.0752 17.625 12.0752 18.1976C12.0752 18.7683 12.3026 19.3176 12.7076 19.7208C13.1117 20.125 13.6601 20.3521 14.2314 20.3521C15.4218 20.3521 16.3876 19.388 16.3876 18.1973C16.3876 17.6247 16.1601 17.0771 15.7566 16.6722C15.3507 16.2689 14.8035 16.0412 14.2311 16.0412Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M14.2314 9.26743C13.6604 9.26743 13.1117 9.49513 12.7076 9.89869C12.3026 10.3037 12.0752 10.851 12.0752 11.4233C12.0752 11.9946 12.3026 12.5435 12.7059 12.9485C13.1114 13.3521 13.6601 13.5798 14.2311 13.5798C14.8035 13.5798 15.3508 13.3521 15.7563 12.9468C16.1598 12.5433 16.3873 11.9943 16.3873 11.423C16.3876 10.2332 15.4218 9.26743 14.2314 9.26743Z"
                              fill="#9CA3AF"
                            />
                            <path
                              d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H45.5V38.5H12C5.64873 38.5 0.5 33.3513 0.5 27V12Z"
                              stroke="#3637EA"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>

                    {/* show card items */}
                    <button onClick={() => handleShowData("card")} className="">
                      <span>
                        <svg
                          width="42"
                          height="39"
                          viewBox="0 0 42 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.7">
                            <path
                              d="M0.5 0.5H30C36.3513 0.5 41.5 5.64873 41.5 12V27C41.5 33.3513 36.3513 38.5 30 38.5H0.5V0.5Z"
                              fill="white"
                            />
                            <g clip-path="url(#clip0_2_2393)">
                              <path
                                d="M15.6599 9H9C8.44772 9 8 9.44772 8 10V16.6599C8 17.2121 8.44772 17.6599 9 17.6599H15.6599C16.2121 17.6599 16.6599 17.2121 16.6599 16.6599V10C16.6599 9.44772 16.2121 9 15.6599 9Z"
                                fill="#9CA3AF"
                              />
                              <path
                                d="M25.9997 9H19.3398C18.7876 9 18.3398 9.44772 18.3398 10V16.6599C18.3398 17.2121 18.7876 17.6599 19.3398 17.6599H25.9997C26.552 17.6599 26.9997 17.2121 26.9997 16.6599V10C26.9997 9.44772 26.552 9 25.9997 9Z"
                                fill="#9CA3AF"
                              />
                              <path
                                d="M15.6599 19.3617H9C8.44772 19.3617 8 19.8094 8 20.3617V27.0215C8 27.5738 8.44772 28.0215 9 28.0215H15.6599C16.2121 28.0215 16.6599 27.5738 16.6599 27.0215V20.3617C16.6599 19.8094 16.2121 19.3617 15.6599 19.3617Z"
                                fill="#9CA3AF"
                              />
                              <path
                                d="M25.9997 19.3617H19.3398C18.7876 19.3617 18.3398 19.8094 18.3398 20.3617V27.0215C18.3398 27.5738 18.7876 28.0215 19.3398 28.0215H25.9997C26.552 28.0215 26.9997 27.5738 26.9997 27.0215V20.3617C26.9997 19.8094 26.552 19.3617 25.9997 19.3617Z"
                                fill="#9CA3AF"
                              />
                            </g>
                            <path
                              d="M0.5 0.5H30C36.3513 0.5 41.5 5.64873 41.5 12V27C41.5 33.3513 36.3513 38.5 30 38.5H0.5V0.5Z"
                              stroke="#9CA3AF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_2393">
                              <rect
                                width="19"
                                height="19"
                                fill="white"
                                transform="translate(8 9)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Filter */}
                  <div>
                    <button
                      onClick={() => handleFilter()}
                      className="text-md flex gap-2 rounded-xl"
                    >
                      <svg
                        width="87"
                        height="39"
                        viewBox="0 0 87 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="86"
                            height="38"
                            rx="11.5"
                            fill="#F2FCFC"
                          />
                          <path
                            d="M28.3499 22.9974V24.2045L29.2035 23.3509L29.4269 23.1275C29.4443 23.1101 29.4697 23.1103 29.487 23.1276C29.5045 23.1452 29.5041 23.1705 29.487 23.1876L28.3361 24.3386C28.3314 24.3433 28.327 24.346 28.3231 24.3478C28.319 24.3497 28.3144 24.3509 28.3096 24.3514L28.3095 24.3514C28.3033 24.3519 28.2974 24.3511 28.2922 24.3492C28.2875 24.3475 28.2821 24.3446 28.2761 24.3386L27.1251 23.1876C27.1077 23.1702 27.1079 23.1448 27.1252 23.1276C27.1428 23.11 27.1682 23.1104 27.1852 23.1275L27.4114 23.3536L28.2649 24.2072V23.0001V14.5424C28.2649 14.5178 28.2831 14.5 28.3074 14.5C28.3319 14.5 28.3499 14.5185 28.3499 14.5424V22.9974ZM18.5 14.5425C18.5 14.531 18.5041 14.5207 18.5128 14.5121C18.5215 14.5033 18.531 14.5 18.5402 14.5H25.5972C25.6187 14.5 25.6375 14.5162 25.6375 14.5425C25.6375 14.554 25.6333 14.5643 25.6247 14.5729C25.6159 14.5817 25.6064 14.585 25.5972 14.585H18.5402C18.5187 14.585 18.5 14.5688 18.5 14.5425ZM18.5 17.7975C18.5 17.7734 18.5195 17.755 18.5417 17.755H24.5108C24.5343 17.755 24.5525 17.7725 24.5525 17.7975C24.5525 17.8215 24.533 17.84 24.5108 17.84H18.5417C18.5181 17.84 18.5 17.8225 18.5 17.7975ZM18.5 21.0525C18.5 21.0266 18.5198 21.01 18.5401 21.01H23.4274C23.4487 21.01 23.4675 21.0261 23.4675 21.0525C23.4675 21.0783 23.4476 21.095 23.4274 21.095H18.5401C18.5188 21.095 18.5 21.0789 18.5 21.0525ZM18.5 24.3074C18.5 24.2829 18.5199 24.2649 18.5409 24.2649H21.7991C21.8215 24.2649 21.84 24.2817 21.84 24.3074C21.84 24.332 21.8201 24.3499 21.7991 24.3499H18.5409C18.5185 24.3499 18.5 24.3331 18.5 24.3074Z"
                            fill="#9CA3AF"
                            stroke="#9CA3AF"
                          />
                          <path
                            d="M40.9 23.5V15.16H45.808V16.276H42.268V18.736H45.028V19.852H42.268V23.5H40.9ZM47.0758 23.5V16.888H48.4438V23.5H47.0758ZM47.7718 16.012C47.2798 16.012 46.8958 15.628 46.8958 15.136C46.8958 14.644 47.2798 14.26 47.7718 14.26C48.2518 14.26 48.6358 14.644 48.6358 15.136C48.6358 15.628 48.2518 16.012 47.7718 16.012ZM50.2398 23.5V14.62H51.6078V23.5H50.2398ZM53.6199 21.664V18.004H52.8399V16.888H53.6199V15.244H54.9999V16.888H56.6079V18.004H54.9999V21.664C54.9999 22.156 55.1919 22.36 55.7679 22.36H56.6079V23.5H55.5279C54.3519 23.5 53.6199 23.008 53.6199 21.664ZM60.6528 17.932C59.7288 17.932 58.9848 18.556 58.8408 19.6H62.5008C62.4768 18.58 61.6728 17.932 60.6528 17.932ZM63.7487 21.532C63.3768 22.684 62.3328 23.608 60.7128 23.608C58.8168 23.608 57.4128 22.264 57.4128 20.188C57.4128 18.112 58.7568 16.78 60.7128 16.78C62.5968 16.78 63.9288 18.088 63.9288 20.032C63.9288 20.26 63.9168 20.476 63.8808 20.704H58.8288C58.9248 21.796 59.7048 22.456 60.7128 22.456C61.5528 22.456 62.0208 22.048 62.2728 21.532H63.7487ZM66.643 20.02V23.5H65.275V16.888H66.643V17.848C67.027 17.188 67.687 16.78 68.623 16.78V18.196H68.275C67.267 18.196 66.643 18.616 66.643 20.02Z"
                            fill="#9CA3AF"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="86"
                            height="38"
                            rx="11.5"
                            stroke="#9CA3AF"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>

                  {/* Export */}
                  <div>
                    <button onClick={() => handleExport()}>
                      <svg
                        width="94"
                        height="39"
                        viewBox="0 0 94 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="93"
                            height="38"
                            rx="11.5"
                            fill="white"
                          />
                          <g clipPath="url(#clip0_2_2030)">
                            <path
                              d="M22.9801 19.4743L23.0001 19.4651M22.9801 19.4743L23.0001 19.4651M22.9801 19.4743L22.9704 19.5M22.9801 19.4743L22.9704 19.5M22.9801 19.4743L23.0001 19.4651M22.9801 19.4743L23.0001 19.4651M22.9704 19.5L22.9635 19.5181L22.9704 19.5Z"
                              stroke="#9CA3AF"
                            />
                            <path
                              d="M26.4377 24.0833H19.5627C19.1372 24.0833 18.7292 23.9297 18.4283 23.6562C18.1275 23.3827 17.9585 23.0118 17.9585 22.625V16.375C17.9585 15.9882 18.1275 15.6173 18.4283 15.3438C18.7292 15.0703 19.1372 14.9167 19.5627 14.9167H22.5418C22.6634 14.9167 22.78 14.9606 22.8659 15.0387C22.9519 15.1168 23.0002 15.2228 23.0002 15.3333C23.0002 15.4438 22.9519 15.5498 22.8659 15.628C22.78 15.7061 22.6634 15.75 22.5418 15.75H19.5627C19.3803 15.75 19.2055 15.8158 19.0765 15.933C18.9476 16.0503 18.8752 16.2092 18.8752 16.375V22.625C18.8752 22.7907 18.9476 22.9497 19.0765 23.0669C19.2055 23.1841 19.3803 23.25 19.5627 23.25H26.4377C26.62 23.25 26.7949 23.1841 26.9238 23.0669C27.0527 22.9497 27.1252 22.7907 27.1252 22.625V19.9167C27.1252 19.8061 27.1735 19.7002 27.2594 19.622C27.3454 19.5439 27.4619 19.5 27.5835 19.5C27.7051 19.5 27.8216 19.5439 27.9076 19.622C27.9935 19.7002 28.0418 19.8061 28.0418 19.9167V22.625C28.0418 23.0118 27.8728 23.3827 27.572 23.6562C27.2711 23.9297 26.8631 24.0833 26.4377 24.0833Z"
                              fill="#969FA9"
                            />
                          </g>
                          <path
                            d="M44.008 15.148V16.264H40.768V18.712H43.648V19.828H40.768V22.384H44.008V23.5H39.4V15.148H44.008ZM49.113 23.5L47.685 21.256L46.341 23.5H44.913L47.049 20.248L44.913 16.888H46.461L47.889 19.132L49.233 16.888H50.661L48.525 20.152L50.661 23.5H49.113ZM53.0493 17.86C53.4693 17.308 54.2733 16.78 55.3533 16.78C57.0933 16.78 58.4613 18.124 58.4613 20.164C58.4613 22.204 57.0933 23.608 55.3533 23.608C54.2613 23.608 53.4813 23.056 53.0493 22.54V26.644H51.6813V16.888H53.0493V17.86ZM57.0693 20.164C57.0693 18.736 56.0853 17.968 55.0533 17.968C54.0333 17.968 53.0493 18.772 53.0493 20.188C53.0493 21.616 54.0333 22.42 55.0533 22.42C56.0853 22.42 57.0693 21.592 57.0693 20.164ZM66.1141 20.188C66.1141 22.264 64.5781 23.608 62.6821 23.608C60.7981 23.608 59.3701 22.264 59.3701 20.188C59.3701 18.112 60.8581 16.78 62.7421 16.78C64.6261 16.78 66.1141 18.112 66.1141 20.188ZM60.7621 20.188C60.7621 21.688 61.6501 22.42 62.6821 22.42C63.7021 22.42 64.7101 21.688 64.7101 20.188C64.7101 18.688 63.7381 17.968 62.7181 17.968C61.6861 17.968 60.7621 18.688 60.7621 20.188ZM68.8344 20.02V23.5H67.4664V16.888H68.8344V17.848C69.2184 17.188 69.8784 16.78 70.8144 16.78V18.196H70.4664C69.4584 18.196 68.8344 18.616 68.8344 20.02ZM72.2879 21.664V18.004H71.5079V16.888H72.2879V15.244H73.6679V16.888H75.2759V18.004H73.6679V21.664C73.6679 22.156 73.8599 22.36 74.4359 22.36H75.2759V23.5H74.1959C73.0199 23.5 72.2879 23.008 72.2879 21.664Z"
                            fill="black"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="93"
                            height="38"
                            rx="11.5"
                            stroke="#CDCDCD"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_2030">
                            <rect
                              width="11"
                              height="10"
                              fill="white"
                              transform="translate(17.5 14.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
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
