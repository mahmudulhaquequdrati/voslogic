import { useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch } from "react-redux";
import SelectList from "../../components/SelectList/SelectList";
import Modal from "../../components/modal/Modal";
import { openModal } from "../../features/modal/modalSlice";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [QAType, setQAType] = useState("agent");
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(openModal());
  };

  const options = {
    xaxis: {
      categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 1,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    markers: { show: false },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#898c9566",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const docutSeris = [
    {
      name: "Passed",
      value: 44,
    },
    {
      name: "Failed",
      value: 23,
    },
    {
      name: "Processing",
      value: 22,
    },
    {
      name: "NA",
      value: 12,
    },
  ];

  const donutOption = {
    options: {
      fill: {
        type: "solid",
        colors: ["#27DBBB", "#FF5C7A", "#D7D7D7", "#9279ED"],
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
      },
      labels: docutSeris?.map((series) => `${series.name} ${series.value}%`),
      legend: {
        position: "right",
        labels: {
          colors: "#898C95",
        },
        markers: {
          width: 12,
          height: 12,
          fillColors: ["#27DBBB", "#FF5C7A", "#D7D7D7", "#9279ED"],
        },
        itemMargin: {
          vertical: 10,
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
      },
      responsive: [
        {
          breakpoint: 1366,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
            },
          },
        },
      ],
    },
    series: docutSeris?.map((series) => series.value),
  };

  const series = [
    {
      name: "Recordings Processed",
      data: [2, 4, 34, 19, 22, 29, 12, 49],
    },
    {
      name: "Minutes Processed",
      data: [4, 2, 18, 34, 21, 38, 23, 51],
    },
    {
      name: "Pass",
      data: [6, 3, 22, 33, 21, 34, 11, 60],
    },
    {
      name: "Fail",
      data: [27, 6, 33, 17, 21, 43, 23, 57],
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center gap-7 md:justify-between flex-col-reverse text-center md:flex-row md:items-end mb-[42px]">
        <div className="relative  border border-[#1C1C2E]  p-1 ps-4 rounded-lg flex bg-[#1C1C2E] items-center w-full md:max-w-[400px] sm:min-w-max md:w-[100vw]">
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
            className="outline-none  text-sm w-full   px-4 py-2 bg-transparent "
            type="text"
            placeholder="Filter Your Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <i className="ri-search-line text-blue-600"></i> */}
        </div>

        {/* Current Balance */}
        <div className="flex items-center gap-5 justify-center">
          <span className="bg-[#3637EA] w-[58px] h-[58px] rounded-full flex items-center justify-center">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1342 13.2712H34.8334C34.8334 7.89227 31.6105 4.75 26.1497 4.75H11.8505C6.38971 4.75 3.16675 7.89227 3.16675 13.2026V24.7974C3.16675 30.1077 6.38971 33.25 11.8505 33.25H26.1497C31.6105 33.25 34.8334 30.1077 34.8334 24.7974V24.3034H28.1342C25.025 24.3034 22.5045 21.8461 22.5045 18.8148C22.5045 15.7834 25.025 13.3261 28.1342 13.3261V13.2712ZM28.1342 15.6313H33.6512C34.3041 15.6313 34.8334 16.1474 34.8334 16.7839V20.7907C34.8258 21.4242 34.3009 21.9359 33.6512 21.9433H28.2608C26.6868 21.964 25.3104 20.9133 24.9534 19.4185C24.7746 18.4906 25.0256 17.5331 25.6391 16.8027C26.2526 16.0722 27.1659 15.6435 28.1342 15.6313ZM28.3734 19.8439H28.8942C29.5626 19.8439 30.1045 19.3156 30.1045 18.6638C30.1045 18.0121 29.5626 17.4838 28.8942 17.4838H28.3734C28.0537 17.4801 27.7458 17.6013 27.5184 17.8205C27.291 18.0396 27.163 18.3384 27.163 18.6501C27.163 19.3041 27.7027 19.8364 28.3734 19.8439ZM10.6682 13.2712H19.6053C20.2737 13.2712 20.8156 12.7428 20.8156 12.0911C20.8156 11.4394 20.2737 10.911 19.6053 10.911H10.6682C10.0052 10.911 9.46557 11.431 9.45786 12.0774C9.45781 12.7314 9.99749 13.2637 10.6682 13.2712Z"
                fill="#35BE5E"
              />
            </svg>
          </span>
          <div className="text-white text-right leading-9 text-2xl">
            <p className="font-normal"> Current Balance </p>
            <strong className="font-bold"> $456,234,11.04 </strong>
          </div>
        </div>
      </div>

      {/* Dashboard header cards */}
      <div className="mt-6 font-Ar">
        <div className="flex gap-12 md:gap-3 lg:gap-5 flex-col md:flex-row">
          <div
            className="h-[13rem] 2xl:h-60 overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(to right, #2d2d47, #3048AD) `,
            }}
          >
            <div className="flex flex-col justify-between gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                  Recordings Processed
                </h1>
                <div className="flex  gap-1 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="30"
                    viewBox="0 0 43 30"
                    fill="none"
                  >
                    <path
                      d="M41.7159 1.39551L26.1567 16.9548L19.4884 10.2865L1.70642 28.0685"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.7158 10.2865V1.39551H32.8248"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#34AA69]">17%</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px]  lg:text-[40px] xl:text-[62px] font-Tw font-[900] leading-[90px]">
                  15
                </h1>
                <div className="flex items-center justify-center bg-[#3637EA] rounded-full ">
                  <span
                    className="flex items-center justify-center h-[56px] w-[56px] "
                    onClick={() => handleCloseModal()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.5984 1.6835C18.7161 2.14078 21.9693 5.38956 22.4311 9.50728"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.5984 5.62543C16.5688 6.00816 18.1086 7.54911 18.4925 9.51952"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9029 12.7788C15.3411 17.2158 16.3479 12.0826 19.1737 14.9065C21.8979 17.6301 23.4649 18.1758 20.0121 21.6265C19.5798 21.974 16.8328 26.1543 7.17901 16.5029C-2.47596 6.8504 1.70181 4.10056 2.04936 3.66832C5.50934 0.208027 6.04679 1.78295 8.77106 4.50653C11.5956 7.3316 6.4648 8.34174 10.9029 12.7788Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
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
            <div className="flex flex-col justify-between gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                  Agents
                </h1>
                <div className="flex  gap-1 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="30"
                    viewBox="0 0 43 30"
                    fill="none"
                  >
                    <path
                      d="M41.7159 1.39551L26.1567 16.9548L19.4884 10.2865L1.70642 28.0685"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.7158 10.2865V1.39551H32.8248"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#34AA69]">18%</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px]  lg:text-[40px] xl:text-[62px] font-Tw font-[900] leading-[90px]">
                  15
                </h1>
                <div className="flex items-center justify-center bg-[#3637EA] rounded-full ">
                  <span
                    className="flex items-center justify-center h-[56px] w-[56px] "
                    onClick={() => handleCloseModal()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.98226 15.9039C5.47003 15.9039 1.6167 16.5861 1.6167 19.3183C1.6167 22.0506 5.44559 22.7572 9.98226 22.7572C14.4945 22.7572 18.3467 22.0739 18.3467 19.3428C18.3467 16.6117 14.5189 15.9039 9.98226 15.9039Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.98225 12.0069C12.9434 12.0069 15.3434 9.60579 15.3434 6.64468C15.3434 3.68357 12.9434 1.28357 9.98225 1.28357C7.02114 1.28357 4.62003 3.68357 4.62003 6.64468C4.61003 9.59579 6.99447 11.9969 9.94447 12.0069H9.98225Z"
                        stroke="white"
                        strokeWidth="1.42857"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
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
            <div className="flex flex-col justify-between gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl md:text-xl lg:text-xl font-medium">
                  Minutes
                </h1>
                <div className="flex  gap-1 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="30"
                    viewBox="0 0 43 30"
                    fill="none"
                  >
                    <path
                      d="M41.7159 1.39551L26.1567 16.9548L19.4884 10.2865L1.70642 28.0685"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.7158 10.2865V1.39551H32.8248"
                      stroke="#35BE5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#34AA69]">12%</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px]  lg:text-[40px] xl:text-[62px] font-Tw font-[900] leading-[90px]">
                  1h30m
                </h1>
                <div className="flex items-center justify-center bg-[#3637EA] rounded-full ">
                  <span
                    className="flex items-center justify-center h-[56px] w-[56px] "
                    onClick={() => handleCloseModal()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.7913 12.0006C22.7913 17.9611 17.9602 22.7923 11.9997 22.7923C6.03917 22.7923 1.20801 17.9611 1.20801 12.0006C1.20801 6.04009 6.03917 1.20892 11.9997 1.20892C17.9602 1.20892 22.7913 6.04009 22.7913 12.0006Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0033 15.4334L11.605 12.8096V7.15472"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circle cards component  */}
      <div className="flex gap-12 md:gap-3 lg:gap-5 flex-col md:flex-row mt-6">
        <div
          className="overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
            <div className="donut w-full">
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="100%"
              />
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
            <div className="donut w-full">
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden w-full md:w-3/6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-8 md:px-8 lg:px-12">
            <div className="donut w-full">
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Area chart component  */}
      <div
        className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-[#1C1C2E] rounded-2xl pt-8 px-6 md:px-12">
          <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      {/* Create agents and Department component  */}
      <div
        className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="w-full bg-[#1C1C2E] rounded-2xl pt-8 px-6 md:px-12 md:pb-[150px] flex flex-col items-center">
          <div className="max-w-[585px] w-full flex items-center gap-2 mb-32">
            {/* Department tab  */}
            <div
              className="flex items-center gap-5 py-5 px-2 md:px-8 border-b-[3px] border-transparent hover:border-[#3637EA]"
              onClick={() => setQAType("department")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
              >
                <path
                  d="M6.37145 9.70172V16.5619"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0382 6.41913V16.5618"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6285 13.3268V16.5619"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6857 1.5H6.31429C3.04762 1.5 1 3.81208 1 7.08516V15.9148C1 19.1879 3.0381 21.5 6.31429 21.5H15.6857C18.9619 21.5 21 19.1879 21 15.9148V7.08516C21 3.81208 18.9619 1.5 15.6857 1.5Z"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`text-[#9CA3AF] font-Tw text-[18px] ${
                  QAType === "department" && "text-[#3637EA]"
                }`}
              >
                Department
              </span>
            </div>

            {/* Agent tab  */}
            <div
              className={`flex items-center gap-5 py-5 px-8 border-b-[3px] border-transparent ${
                QAType === "agent" && "border-[#3637EA]"
              }`}
              onClick={() => setQAType("agent")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
              >
                <path
                  d="M16.8877 7.39667C18.2827 7.20067 19.3567 6.00467 19.3597 4.55567C19.3597 3.12767 18.3187 1.94367 16.9537 1.71967"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.7285 10.7503C20.0795 10.9523 21.0225 11.4253 21.0225 12.4003C21.0225 13.0713 20.5785 13.5073 19.8605 13.7813"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8867 11.1638C7.67273 11.1638 4.92773 11.6508 4.92773 13.5958C4.92773 15.5398 7.65573 16.0408 10.8867 16.0408C14.1007 16.0408 16.8447 15.5588 16.8447 13.6128C16.8447 11.6668 14.1177 11.1638 10.8867 11.1638Z"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8869 8.38788C12.9959 8.38788 14.7059 6.67888 14.7059 4.56888C14.7059 2.45988 12.9959 0.749878 10.8869 0.749878C8.7779 0.749878 7.0679 2.45988 7.0679 4.56888C7.0599 6.67088 8.7569 8.38088 10.8589 8.38788H10.8869Z"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.88484 7.39667C3.48884 7.20067 2.41584 6.00467 2.41284 4.55567C2.41284 3.12767 3.45384 1.94367 4.81884 1.71967"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.044 10.7503C1.693 10.9523 0.75 11.4253 0.75 12.4003C0.75 13.0713 1.194 13.5073 1.912 13.7813"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                className={`text-[#9CA3AF] font-Tw text-[18px] ${
                  QAType === "agent" && "text-[#3637EA]"
                }`}
              >
                Agents
              </span>
            </div>
          </div>
          {/* Create agent form and Department form*/}
          {QAType === "agent" ? (
            <div className="max-w-[585px] w-full bg-[#1C1C2E] rounded-2xl pt-8 px-6 md:px-12 pb-44">
              <div className="flex flex-col gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                  />
                </div>

                <SelectList />

                <div>
                  <button className="w-full bg-[#3637EA] font-bold outline-none rounded-[10px] px-[18px] py-[10px] capitalize   font-Tw text-[18px]">
                    Create agent
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[950px] w-full flex flex-col items-center gap-4">
              <div className="w-full flex flex-col justify-center sm:flex-row gap-4 ">
                <div className="w-full flex sm:items-stretch flex-col gap-6">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>

                  <SelectList />
                  <div>
                    <input
                      type="text"
                      placeholder="Flagged Words"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>
                </div>
                <div className="w-full flex sm:items-stretch flex-col gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Department Leader First Name"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Department Leader Email"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>

                  <div className="flex h-full">
                    <textarea
                      type="text"
                      placeholder="Prompt"
                      className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-[80%]">
                <button className="w-full bg-[#3637EA] font-bold outline-none rounded-[10px] px-[18px] py-[10px] capitalize   font-Tw text-[18px]">
                  Create Department
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal />
    </div>
  );
}

export default Dashboard;
