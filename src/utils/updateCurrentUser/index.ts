import { Dispatch } from "@reduxjs/toolkit";
import { login, logout, setUserToken } from "../../store/reducers/authSlice";
import { setCurrentUser } from "../../store/reducers/userSlice";

// utils/auth.ts
export const setUserData = (data: any) => {
  localStorage.setItem("USER", JSON.stringify(data));
};

export const removeUserData = (dispatch: Dispatch) => {
  localStorage.removeItem("USER");
  localStorage.removeItem("token");
  dispatch(logout());
};

export const setToken = (token: string, dispatch: Dispatch) => {
  localStorage.setItem("token", token);
  dispatch(setUserToken(token));
};

export const dispatchUser = (dispatch: Dispatch, userData: any) => {
  dispatch(setCurrentUser(userData));
  dispatch(login({ username: userData.email, userType: userData.userType }));
};

export const getUserDetails = () => {
  const userData = localStorage.getItem("USER");
  if (userData) {
    const parsedUserData = JSON.parse(userData);
    return parsedUserData;
  } else {
    return "";
  }
};

export const checkUserDetails = (dispatch: Dispatch) => {
  const userData: any = localStorage.getItem("USER");
  const token: any = localStorage.getItem("token");
  // const parsedtoken = JSON.parse(token);
  dispatch(setUserToken(token));
  const parsedUserData = JSON.parse(userData);

  if (parsedUserData) {
    dispatchUser(dispatch, parsedUserData);
  }
  return parsedUserData;
};
