import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AIBOTIMAGE from "../../assets/ModalImage/ai_bot.png";
import audio from "../../assets/ModalImage/audio.png";
import { closeModal } from "../../features/modal/modalSlice";
import Draggable from "react-draggable";

const Modal = () => {
  const [modalContent, setModalContent] = useState("callTranscript");
  const [modalTitle, setModalTitle] = useState("Call Transcription");
  const { isOpenModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // Changing modal content when tab changes
  const handleSetModalContent = (content) => {
    setModalContent(content);
    if (content === "callTranscript") {
      setModalTitle("Call Transcription");
    } else if (content === "chatWithAI") {
      setModalTitle("Chat with AI");
    } else if (content === "AIResponse") {
      setModalTitle("AI Response");
    } else if (content === "aboutSection") {
      setModalTitle("About section");
    } else if (content === "chatWithAI") {
      setModalTitle("Chat with AI");
    } else if (content === "addNotes") {
      setModalTitle("Add notes");
    } else if (content === "flags") {
      setModalTitle("Flags");
    }
  };

  // Closing the modal
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  // setting up the modal content to the relevant tab
  let selectModalContent;

  if (modalContent === "callTranscript") {
    selectModalContent = (
      <>
        {/* Call transcript content */}
        <div className="flex flex-col flex-wrap gap-[30px] p-8">
          {/* AI CHAT */}
          <div className="flex gap-5">
            <div className="w-[50px] h-[50px]">
              <img
                className="w-full h-auto object-cover"
                src={AIBOTIMAGE}
                alt="ai bot image"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-[14px] font-normal text-[#3F3F3F] bg-[#F3F8FE] p-5 rounded-r-lg rounded-tl-lg">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur.
              </p>
              <span className="text-[#E7E7E7] text-[13px] leading-4">
                8.50 AM
              </span>
            </div>
          </div>
          {/* My Chat */}
          <div className="w-full flex justify-end">
            <div className="w-[70%] flex flex-col gap-1 items-end">
              <p className="text-[14px] font-normal text-[#ffffff] bg-[#1C1C2E] p-5 rounded-l-lg rounded-tr-lg">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur.
              </p>
              <span className="text-[#E7E7E7] text-[13px] leading-4">
                8.52 AM
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[435px] w-full">
              <img className="w-full h-auto" src={audio} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (modalContent === "chatWithAI") {
    selectModalContent = (
      <>
        {/* Chat with AI content */}
        <div className="flex flex-col flex-wrap gap-[30px] p-8">
          {/* AI CHAT */}
          <div className="flex gap-5">
            <div className="w-[50px] h-[50px]">
              <img
                className="w-full h-auto object-cover"
                src={AIBOTIMAGE}
                alt="ai bot image"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-[14px] font-normal text-[#3F3F3F] bg-[#F3F8FE] p-5 rounded-r-lg rounded-tl-lg">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur.
              </p>
              <span className="text-[#E7E7E7] text-[13px] leading-4">
                8.50 AM
              </span>
            </div>
          </div>
          {/* My Chat */}
          <div className="w-full flex justify-end">
            <div className="w-[70%] flex flex-col gap-1 items-end">
              <p className="text-[14px] font-normal text-[#ffffff] bg-[#1C1C2E] p-5 rounded-l-lg rounded-tr-lg">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur.
              </p>
              <span className="text-[#E7E7E7] text-[13px] leading-4">
                8.52 AM
              </span>
            </div>
          </div>
          {/* Input */}
          <div className=" flex justify-center">
            <div className="w-[80%] relative">
              <input
                type="text"
                className="w-full bg-[#1B23BB] rounded-full py-3 px-5 outline-none border-0 placeholder:text-white"
                placeholder="Reply here..."
              />
              <span className="absolute top-4 right-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M15.1518 6.85585L8.95146 13.1225L1.89939 8.71165C0.88898 8.07949 1.09916 6.54472 2.24203 6.2105L18.9855 1.30716C20.032 1.00043 21.0019 1.9789 20.691 3.02883L15.7375 19.7606C15.3982 20.9051 13.8721 21.1096 13.246 20.0949L8.94817 13.1236"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* Audio */}
          <div className="flex justify-center">
            <div className="max-w-[435px] w-full">
              <img className="w-full h-auto" src={audio} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (modalContent === "AIResponse") {
    selectModalContent = (
      <div className="bg-[#2931C2]">
        <div className="flex gap-[140px] py-3 px-4 bg-[#01108D]">
          <div className="flex items-center gap-3">
            <p>Question</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M13.002 -9.53674e-06L6.50084 6.5011L-0.000266075 -9.53674e-06L13.002 -9.53674e-06Z"
                  fill="#B7C1CC"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p>Ai Responses</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M13.002 -9.53674e-06L6.50084 6.5011L-0.000266075 -9.53674e-06L13.002 -9.53674e-06Z"
                  fill="#B7C1CC"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] p-8">
          <div className="w-full flex gap-14">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
          </div>
          <div className="flex gap-14">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
          </div>
          <div className="flex gap-14">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
          </div>
          <div className="flex gap-14">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
          </div>
        </div>
        <div className="bg-[#3637EA] flex items-center justify-between py-5 px-6">
          <p>Showing 1 to 5 of 10 entries</p>
          <div className="flex items-center gap-4">
            <p>Previous</p>
            <div className="flex items-center gap-2">
              <span className="bg-[#1C1C2D] border-[1px] border-[#ddd] py-2 px-4">
                1
              </span>
              <span className="bg-transparent border-[1px] border-[#ddd] py-2 px-4">
                2
              </span>
            </div>
            <p>Next</p>
          </div>
        </div>
      </div>
    );
  } else if (modalContent === "aboutSection") {
    selectModalContent = (
      <>
        <div className="px-12 py-4 flex flex-col gap-5 mt-6">
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">
              Agent:
            </p>
            <p className="text-[15px] leading-6 font-semibold">AGENTNAME</p>
          </div>
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">
              Department:
            </p>
            <p className="text-[15px] leading-6 font-semibold">
              DEPARTMENT NAME
            </p>
          </div>
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">
              Call Creation Date:
            </p>
            <p className="text-[15px] leading-6 font-semibold">OCT 15, 2023</p>
          </div>
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">Date:</p>
            <p className="text-[15px] leading-6 font-semibold">OCT 15, 2023</p>
          </div>
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">
              Last Modified:
            </p>
            <p className="text-[15px] leading-6 font-semibold">OCT 16, 2023</p>
          </div>
          <div className="flex gap-9">
            <p className="w-[125px] text-[15px] leading-6 font-normal">
              Activity Log:
            </p>
            <p className="text-[15px] leading-6 font-semibold">
              Note added on 09/10/23 by Corey
            </p>
          </div>
        </div>
      </>
    );
  } else if (modalContent === "addNotes") {
    selectModalContent = (
      <>
        <div className="px-12 py-4">
          <div>
            <p className="text-[20px] leading-7">Add a Note here</p>
            <textarea
              type="text"
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-[100px] py-4 px-5 bg-[#F2F7FD] outline-none border-0 rounded-lg mt-4"
              placeholder="Add your note here press save it."
            />
            <div className="w-full flex justify-center">
              <button className="w-[200px] bg-[#1C1C2E] py-1 rounded-xl font-bold leading-7 text-[20px] mt-4">
                Add Note
              </button>
            </div>
          </div>

          {/* Previous Notes here */}
          <div className="mt-5">
            <p className="text-[20px] leading-7">Previous Notes here</p>
            <div className="flex gap-3 mt-4 w-full">
              <p className="font-bold text-[14px] w-[120px]">Corey Seamon</p>
              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={
                    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur"
                  }
                  className="w-full h-[100px] rounded-r-lg rounded-tl-lg py-3 px-5 bg-transparent outline-none border-[1px] border-[#FFFFFF]mt-4"
                ></textarea>
                <span>10/06/2023</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end py-5 px-6">
            <div className="flex items-center gap-4">
              <p>Previous</p>
              <div className="flex items-center gap-2">
                <span className="bg-[#1C1C2D] border-[1px] border-[#ddd] py-2 px-4">
                  1
                </span>
                <span className="bg-transparent border-[1px] border-[#ddd] py-2 px-4">
                  2
                </span>
              </div>
              <p>Next</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (modalContent === "flags") {
    selectModalContent = (
      <div className="bg-[#2931C2]">
        <div className="flex gap-[140px] py-3 px-4 bg-[#01108D]">
          <div className="flex items-center gap-5">
            <p>Question</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M13.002 -9.53674e-06L6.50084 6.5011L-0.000266075 -9.53674e-06L13.002 -9.53674e-06Z"
                  fill="#B7C1CC"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <p>Ai Responses</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M13.002 -9.53674e-06L6.50084 6.5011L-0.000266075 -9.53674e-06L13.002 -9.53674e-06Z"
                  fill="#B7C1CC"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <p>Profanity</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M13.002 -9.53674e-06L6.50084 6.5011L-0.000266075 -9.53674e-06L13.002 -9.53674e-06Z"
                  fill="#B7C1CC"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] p-8">
          <div className="w-full flex gap-14 items-start">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>

            <button className="outline-none border-0 py-2 px-7 bg-[#23FD00] text-black rounded-lg text-[15px] font-bold">
              Compliance
            </button>
          </div>
          <div className="flex gap-14 items-start">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
            <button className="outline-none border-0 py-2 px-7 bg-[#DBFF00] text-black rounded-lg text-[15px] font-bold">
              Compliance
            </button>
          </div>
          <div className="flex gap-14 items-start">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
            <button className="outline-none border-0 py-2 px-7 bg-[#FF0000] text-black rounded-lg text-[15px] font-bold">
              Compliance
            </button>
          </div>
          <div className="flex gap-14 items-start">
            <p className="text-[15px] w-[225px]">
              Please tell me moe about you?
            </p>
            <p className="text-[15px] w-[225px]">
              The AI Response will be here The AI Response will be here
            </p>
            <button className="outline-none border-0 py-2 px-7 bg-[#23FD00] text-black rounded-lg text-[15px] font-bold">
              Compliance
            </button>
          </div>
        </div>
        <div className="bg-[#3637EA] flex items-center justify-between py-5 px-6">
          <p>Showing 1 to 5 of 10 entries</p>
          <div className="flex items-center gap-4">
            <p>Previous</p>
            <div className="flex items-center gap-2">
              <span className="bg-[#1C1C2D] border-[1px] border-[#ddd] py-2 px-4">
                1
              </span>
              <span className="bg-transparent border-[1px] border-[#ddd] py-2 px-4">
                2
              </span>
            </div>
            <p>Next</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Draggable>
      <div
        className={`cursor-grabbing w-full md:max-w-[865px] min-h-[500px] h-auto fixed top-[200px] right-[200px] md:right-[200px] md:top-[100px] z-[3000] bg-[#3637EA] ${
          isOpenModal ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end gap-2 items-center bg-[#D9D9D9] p-2">
          <span className="text-[#1C1C2E] font-bold">{modalTitle}</span>

          <span onClick={() => handleCloseModal()} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M8.39738 5.59702L5.60205 8.39235"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.39825 8.39404L5.60059 5.59579"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.52849 1.60428H4.47158C2.70933 1.60428 1.60449 2.85203 1.60449 4.61778V9.38245C1.60449 11.1482 2.70408 12.3959 4.47158 12.3959H9.52791C11.296 12.3959 12.3962 11.1482 12.3962 9.38245V4.61778C12.3962 2.85203 11.296 1.60428 9.52849 1.60428Z"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="w-full border-[1px] border-[#454CCA]">
          {/* Menu items  */}
          <div className="flex items-center m-0 p-0">
            <div
              onClick={() => handleSetModalContent("callTranscript")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "callTranscript"
                  ? "bg-[#1C1C2E]"
                  : "bg-[#2931C2]"
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.0444 21.2482C18.3515 24.8141 12.8833 25.5845 8.40842 23.5864C7.74782 23.3296 7.20621 23.122 6.69133 23.122C5.25718 23.1302 3.47208 24.4728 2.54431 23.5781C1.61655 22.6823 3.0082 20.9574 3.0082 19.5643C3.0082 19.0671 2.80176 18.5535 2.53581 17.9145C0.465341 13.5946 1.26439 8.31314 4.95723 4.74841C9.67135 0.195173 17.3303 0.195173 22.0444 4.74724C26.767 9.30751 26.7585 16.6961 22.0444 21.2482Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.2599 13.4818H18.2707"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4156 13.4818H13.4265"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.57139 13.4818H8.58226"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                Call Transcription
              </span>
            </div>

            <div
              onClick={() => handleSetModalContent("chatWithAI")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "chatWithAI" ? "bg-[#1C1C2E]" : "bg-[#2931C2]"
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.6884 10.0619C15.6884 12.0989 14.0364 13.7498 11.9994 13.7498C9.96236 13.7498 8.31152 12.0989 8.31152 10.0619C8.31152 8.02378 9.96236 6.37295 11.9994 6.37295C14.0364 6.37295 15.6884 8.02378 15.6884 10.0619Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9978 18.5807C16.4405 18.5807 20.504 15.3864 22.7918 10.0617C20.504 4.73705 16.4405 1.54272 11.9978 1.54272H12.0025C7.55983 1.54272 3.49633 4.73705 1.2085 10.0617C3.49633 15.3864 7.55983 18.5807 12.0025 18.5807H11.9978Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                Chat with AI
              </span>
            </div>

            <div
              onClick={() => handleSetModalContent("AIResponse")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "AIResponse" ? "bg-[#1C1C2E]" : "bg-[#2931C2]"
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.6884 10.0619C15.6884 12.0989 14.0364 13.7498 11.9994 13.7498C9.96236 13.7498 8.31152 12.0989 8.31152 10.0619C8.31152 8.02378 9.96236 6.37295 11.9994 6.37295C14.0364 6.37295 15.6884 8.02378 15.6884 10.0619Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9978 18.5807C16.4405 18.5807 20.504 15.3864 22.7918 10.0617C20.504 4.73705 16.4405 1.54272 11.9978 1.54272H12.0025C7.55983 1.54272 3.49633 4.73705 1.2085 10.0617C3.49633 15.3864 7.55983 18.5807 12.0025 18.5807H11.9978Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                AI Response
              </span>
            </div>

            <div
              onClick={() => handleSetModalContent("aboutSection")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "aboutSection"
                  ? "bg-[#1C1C2E]"
                  : "bg-[#2931C2]"
              }`}
            >
              <span>
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
                    d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.6348C5.20557 5.2128 7.16957 3.2498 9.59157 3.2498C12.0126 3.2498 13.9766 5.2128 13.9766 7.6348C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4829 10.8816C18.0839 10.6566 19.3169 9.2826 19.3199 7.6196C19.3199 5.9806 18.1249 4.6206 16.5579 4.3636"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5952 14.7322C20.1462 14.9632 21.2292 15.5072 21.2292 16.6272C21.2292 17.3982 20.7192 17.8982 19.8952 18.2112"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                About section
              </span>
            </div>

            <div
              onClick={() => handleSetModalContent("addNotes")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "addNotes" ? "bg-[#1C1C2E]" : "bg-[#2931C2]"
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M12.7161 14.2234H5.49609"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.7161 10.0369H5.49609"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25109 5.8601H5.49609"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9085 0.749802C12.9085 0.749802 5.23149 0.753802 5.21949 0.753802C2.45949 0.770802 0.750488 2.5868 0.750488 5.3568V14.5528C0.750488 17.3368 2.47249 19.1598 5.25649 19.1598C5.25649 19.1598 12.9325 19.1568 12.9455 19.1568C15.7055 19.1398 17.4155 17.3228 17.4155 14.5528V5.3568C17.4155 2.5728 15.6925 0.749802 12.9085 0.749802Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                Add Notes
              </span>
            </div>
            <div
              onClick={() => handleSetModalContent("flags")}
              className={`flex grow items-center gap-2 py-2 px-3 border-x-[1px] border-[#454CCA] cursor-pointer ${
                modalContent === "flags" ? "bg-[#1C1C2E]" : "bg-[#2931C2]"
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="19"
                  viewBox="0 0 14 19"
                  fill="none"
                >
                  <path
                    d="M14 9.13127L10.4431 4.56542L14 0H0V7.98101V9.13127V19H0.89189V9.13127H14ZM0.89189 0.868549H12.2042L9.32382 4.56585L12.2042 8.26359H0.89189V7.98101V0.868549Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-[10px] sm:text-[15px] leading-6">
                Flags
              </span>
            </div>
          </div>
        </div>
        {/* All modal body content wrapper */}
        <div className="bg-[#3637EA]">{selectModalContent}</div>
      </div>
    </Draggable>
  );
};

export default Modal;
