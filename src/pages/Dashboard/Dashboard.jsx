import { useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch } from "react-redux";
import Profile from "../../components/common/Profile";
import Modal from "../../components/modal/Modal";
import { openModal } from "../../features/modal/modalSlice";

function Dashboard() {
  const [search, setSearch] = useState("");
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
        width: 160,
        labels: {
          colors: "#898C95",
        },
        markers: {
          width: 12,
          height: 12,
          fillColors: ["#27DBBB", "#FF5C7A", "#D7D7D7", "#9279ED"],
        },
        itemMargin: {
          vertical: 5,
          horizontal: 0,
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
      },
      responsive: [
        {
          breakpoint: 1250,
          options: {
            legend: {
              position: "bottom",
              itemMargin: {
                vertical: 10,
              },
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
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl py-7">
            <div className="w-full h-[300px] md:h-auto flex justify-center items-center">
              {/* In the mobile and ablet mode the width of the chart would be 150px and in the desktop mode would be 400px and the height would be greater than 450px and in the desktop mode that whould be 100%*/}
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="400px"
                height="100%"
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
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-2">
            <div className="donut w-full h-[400px] md:h-auto flex justify-center items-center">
              {/* In the mobile and ablet mode the width of the chart would be 150px and in the desktop mode would be 400px and the height would be greater than 450px and in the desktop mode that whould be 100%*/}
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="400px"
                height="100%"
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
          <div className="flex flex-col justify-center gap-3 w-full h-full bg-[#1C1C2E] rounded-2xl p-2">
            <div className="donut w-[150px] h-[300px] md:w-[400px] md:h-auto flex justify-center items-center">
              {/* In the mobile and ablet mode the width of the chart would be 150px and in the desktop mode would be 400px and the height would be greater than 450px and in the desktop mode that whould be 100%*/}
              <Chart
                options={donutOption?.options}
                series={donutOption?.series}
                type="donut"
                width="400px"
                height="100%"
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

      <Modal />
    </div>
  );
}

export default Dashboard;
