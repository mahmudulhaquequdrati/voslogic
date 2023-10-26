import React, { useState } from "react";
import SelectList from "../../components/SelectList/SelectList";

const CreateAgent = () => {
  const [QAType, setQAType] = useState("agent");

  return (
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
            className={`flex items-center gap-5 py-5 px-2 md:px-8 border-b-[3px] ${
              QAType === "department"
                ? "border-[#3637EA]"
                : "border-transparent"
            }`}
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
            className={`flex items-center gap-5 py-5 px-8 border-b-[3px] ${
              QAType === "agent" ? "border-[#3637EA]" : "border-transparent"
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
          <div className="max-w-[585px] w-full bg-[#1C1C2E] rounded-2xl pt-8 px-6 md:px-12">
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
                    placeholder="Department Name"
                    className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Department Leader Last Name"
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
                    className="w-full bg-transparent border-[1px] border-[#0070D2] outline-none rounded-[10px] px-[18px] py-[10px] placeholder:font-Tw text-[18px] placeholder:italic resize-none"
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
  );
};

export default CreateAgent;
