import { Grid, _ } from "gridjs-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cancelIcons from "../../assets/cancel_icons.png";
import deleteIcons from "../../assets/delete_icons.png";
import editIcons from "../../assets/edit_icons.png";

export default function Agents() {
  const [originalData, setOriginalData] = useState([
    {
      departments: "Sales",
      createDate: "Tue, 24 Oct 2023 13:27:05 +0000",
      AgentName: "John Doe",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Marketing",
      createDate: "Tue, 24 Oct 2023 13:27:04 +0000",
      AgentName: "Jane Doe",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Customer Support",
      createDate: "Tue, 24 Oct 2023 12:57:16 +0000",
      AgentName: "Peter Jones",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Engineering",
      createDate: "Tue, 24 Oct 2023 01:16:09 +0000",
      AgentName: "Mary Smith",
      _id: "26874ysadhfkajsl",
    },
    {
      departments: "Product Management",
      createDate: "Mon, 23 Oct 2023 23:35:38 +0000",
      AgentName: "David Williams",
      _id: "26874ysadhfkajsl",
    },
  ]);

  // Delete Button
  const handleDelete = (data) => {
    console.log("Delete ", data);
  };

  // Edit Handle
  const handleEdit = (data) => {
    console.log("Edit ", data);
  };

  // Cancel handle
  const handleCancel = (data) => {
    console.log("Cancel ", data);
  };

  // Create Agent
  const handleCreateAgent = () => {};

  return (
    <div className="">
      <div className="flex justify-center gap-7 md:justify-between flex-col-reverse text-center md:flex-row md:items-end mb-[42px]">
        {/* Create Agent Buttons */}
        <div className="relative w-full md:max-w-[400px] sm:min-w-max md:w-[100vw]">
          <button
            onClick={() => handleCreateAgent}
            className=" bg-[#3637EA] text-white text-center px-6 py-2.5 rounded-lg font-Ar block w-full"
          >
            Create Agent
          </button>
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

      <div
        className="mt-6  border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full  "
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="h-full bg-[#1C1C2E] rounded-2xl py-4 px-8 max-w-full">
          {originalData.length ? (
            <div className="relative">
              <div className="relative flex justify-between mb-3 mt-1    w-full flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
                {originalData.length ? (
                  <Grid
                    data={originalData.map((x) => [
                      x.departments,
                      x.createDate,
                      x.AgentName || " ",
                      x._id,
                    ])}
                    columns={[
                      {
                        name: `Departments`,
                      },
                      {
                        name: "Created Date",
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
                        name: "Actions",
                        formatter: (cell) => {
                          // return cell;
                          return _(
                            <div className="flex justify-center items-center gap-5 ">
                              <button
                                onClick={() => handleDelete(cell)}
                                className="w-8 h-8 flex justify-center items-center"
                              >
                                <img
                                  className="w-8 h-8 rounded-sm"
                                  src={deleteIcons}
                                />
                              </button>

                              <button
                                className="w-8 h-8 flex justify-center items-center"
                                onClick={() => handleEdit(cell)}
                              >
                                <img
                                  className="w-8 h-8 rounded-sm"
                                  src={editIcons}
                                />
                              </button>

                              <button
                                className="w-8 h-8 flex justify-center items-center "
                                onClick={() => handleCancel(cell)}
                              >
                                <img className="rounded-sm" src={cancelIcons} />
                              </button>
                            </div>
                          );
                        },
                      },
                    ]}
                    search={false}
                    pagination={{
                      limit: 10,
                    }}
                    className={{
                      container: "",
                      table:
                        "items-center bg-transparent min-w-[80vw] lg:min-w-[70vw] border-collapse  font-Ar mt-6 mb-8 table-auto",
                      th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-base  bg-[#3637EA] whitespace-nowrap font-semibold text-center",
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
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
