import { Grid, _ } from "gridjs-react";
import { useState } from "react";
import cancelIcons from "../../assets/cancel_icons.png";
import deleteIcons from "../../assets/delete_icons.png";
import editIcons from "../../assets/edit_icons.png";
import CreateAgentAndDepartment from "../../components/Create/CreateAgentAndDepartment";

export default function Department() {
  const [isDepartmentCreate, setIsDepartmentCreate] = useState(false);
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

  return (
    <div className="">
      <div className="flex justify-center gap-7 md:justify-between flex-col-reverse text-center md:flex-row md:items-end mb-[42px]">
        {/* Create Department Buttons */}
        <div
          className="relative w-full md:max-w-[400px] sm:min-w-max md:w-[100vw]"
          onClick={() => setIsDepartmentCreate(!isDepartmentCreate)}
        >
          <button className=" bg-[#3637EA] text-white text-center px-6 py-2.5 rounded-lg font-Ar block w-full">
            {isDepartmentCreate ? "Department List" : "Create Department"}
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
                d="M28.1339 13.2712H34.8332C34.8332 7.89227 31.6102 4.75 26.1495 4.75H11.8502C6.38947 4.75 3.1665 7.89227 3.1665 13.2026V24.7974C3.1665 30.1077 6.38947 33.25 11.8502 33.25H26.1495C31.6102 33.25 34.8332 30.1077 34.8332 24.7974V24.3034H28.1339C25.0248 24.3034 22.5043 21.8461 22.5043 18.8148C22.5043 15.7834 25.0248 13.3261 28.1339 13.3261V13.2712ZM28.1339 15.6313H33.6509C34.3039 15.6313 34.8332 16.1474 34.8332 16.7839V20.7907C34.8256 21.4242 34.3007 21.9359 33.6509 21.9433H28.2606C26.6866 21.964 25.3102 20.9133 24.9532 19.4185C24.7744 18.4906 25.0254 17.5331 25.6389 16.8027C26.2524 16.0722 27.1656 15.6435 28.1339 15.6313ZM28.3732 19.8439H28.8939C29.5624 19.8439 30.1043 19.3156 30.1043 18.6638C30.1043 18.0121 29.5624 17.4838 28.8939 17.4838H28.3732C28.0535 17.4801 27.7456 17.6013 27.5181 17.8205C27.2907 18.0396 27.1628 18.3384 27.1628 18.6501C27.1628 19.3041 27.7024 19.8364 28.3732 19.8439ZM10.668 13.2712H19.605C20.2735 13.2712 20.8154 12.7428 20.8154 12.0911C20.8154 11.4394 20.2735 10.911 19.605 10.911H10.668C10.005 10.911 9.46532 11.431 9.45761 12.0774C9.45757 12.7314 9.99725 13.2637 10.668 13.2712Z"
                fill="#FF0000"
              />
            </svg>
          </span>
          <div className="text-white text-right leading-9 text-2xl">
            <p className="font-normal"> Current Balance </p>
            <strong className="font-bold"> -$456,234,11.04 </strong>
          </div>
        </div>
      </div>

      {isDepartmentCreate ? (
        <CreateAgentAndDepartment make="department" />
      ) : (
        <div
          className="mt-6 border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full"
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
                                  className="w-6 h-6 flex justify-center items-center"
                                >
                                  <img
                                    className="w-full h-full rounded-sm"
                                    src={deleteIcons}
                                  />
                                </button>

                                <button
                                  onClick={() => handleEdit(cell)}
                                  className="w-6 h-6 flex justify-center items-center"
                                >
                                  <img
                                    className="w-full h-full rounded-sm"
                                    src={editIcons}
                                  />
                                </button>

                                <button
                                  onClick={() => handleCancel(cell)}
                                  className="w-6 h-6 flex justify-center items-center"
                                >
                                  <img
                                    className="w-full h-full rounded-sm"
                                    src={cancelIcons}
                                  />
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
      )}
    </div>
  );
}
