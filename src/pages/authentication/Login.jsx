import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";
import { getLogin } from "../../actions/ServerAction";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleReg = (e) => {
    e.preventDefault();
    getLogin(username, password)
      .then((response) => {
        sessionStorage.setItem(
          "authUser",
          JSON.stringify({
            accessToken: response.data.accessToken,
            user: true,
          })
        );
        dispatch(
          userLoggedIn({
            accessToken: response.data.accessToken,
            user: true,
          })
        );

        navigate("/dashboard");
      })
      .catch(() => {
        alert("something went wrong!");
      });
  };
  return (
    <div className="h-screen mx-auto flex flex-col sm:flex-row">
      <div className="w-full h-full lg:w-1/2 bg-[#191919] flex justify-center items-center">
        <div className="text-center">
          <img src="./logo.png" alt="" />
          <h2 className="text-[#20f0ff] text-3xl">Welcome Back!</h2>
          <p className="text-white">Welcome Back! Please enter your details!</p>
          <form
            className="text-center w-11/12 mx-auto mt-10"
            onSubmit={handleReg}
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Username"
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-b border-gray-300 bg-transparent w-full py-2 px-3 focus:outline-none focus:border-[#20f0ff] text-white"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-gray-300 bg-transparent w-full py-2 px-3 focus:outline-none focus:border-[#1bc1cc] text-white"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" className="h-5 w-5" />
                <label className="ml-2 text-white">
                  <small>Remember for 30 days</small>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1bc1cc] text-white hover:bg-[#1b9ba3] py-2 px-4 rounded-lg my-8"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
      <div className="w-full hidden lg:block lg:w-1/2 mt-8 sm:mt-0 bg-[#01108D] mx-auto">
        <img
          className="h-screen object-cover mx-auto"
          src="./sidePic.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
