import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";

const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    // return user;
    return JSON.parse(user);
  }
};

const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userProfileSession = getLoggedinUser();

  useEffect(() => {
    if (userProfileSession) {
      // setUserProfile(JSON.parse(userProfile));
      dispatch(
        userLoggedIn({
          accessToken: userProfileSession.accessToken,
          user: userProfileSession.user,
        })
      );
    }

    setLoading(false);
  }, [dispatch, userProfileSession]);
  return { loading };
};

export { useProfile };
