import profile from "../../assets/profile.jpg";

export default function Profile() {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 rounded-full  overflow-hidden">
        <img src={profile} alt="profile" className="w-full h-full" />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="hidden md:block font-Dm">Jhon Doe</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          color="#000000"
        >
          <path
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6 9 6 6 6-6"
          ></path>
        </svg>
      </div>
    </div>
  );
}
