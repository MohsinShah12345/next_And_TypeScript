export const baseUrl = "http://localhost:8000/api/v1";

import { redirect } from "react-router-dom";
import { authInterface } from "../interfaces";

export const setSessionCookies = (data: authInterface["data"]): any | void => {
  console.log("Data in set Session Cookies", data);
  localStorage.setItem("firstName", data.firstName);
  localStorage.setItem("lastName", data.lastName);
  localStorage.setItem("email", data.email);
  localStorage.setItem("token", data.token);
  localStorage.setItem("contactNo", data.contactNo);
};
export const unSetSeesionCookies = (): any | void => {
  localStorage.setItem("firstName", "");
  localStorage.setItem("lastName", "");
  localStorage.setItem("email", "");
  localStorage.setItem("token", "");
  localStorage.setItem("contactNo", "");
};
export const user = () => {
  if (typeof window !== "undefined") {
    return {
      firstName: localStorage.getItem("firstName") ?? "",
      lastName: localStorage.getItem("lastName") ?? "",
      email: localStorage.getItem("email") ?? "",
      token: localStorage.getItem("token") ?? "",
      contactNo: localStorage.getItem("contactNo") ?? "",
    };
  }
  return {};
};
export const redirectToReset = (email: string) => {
  redirect("/admin/signIn");
};
