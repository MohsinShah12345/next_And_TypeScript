import axios from "axios";
import { baseUrl } from "@/utils/common";
export const authServices = {
  signIn: async (payload: any) => {
    return new Promise((resolve, reject): any => {
      axios.post(`${baseUrl}/auth/signIn`, payload).then((response) => {
        try {
          console.log("Resonse...", response);
          resolve({
            data: { ...response.data.data, token: response.data.token },
          });
        } catch (error) {
          console.log("Error...", error);
        }
      });
    });
  },
  forgotPassword: async (payload: any) => {
    console.log("Call Recived....", payload);
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/auth/forgotPassword`, payload)
        .then((response) => {
          try {
            resolve(response);
          } catch (error) {
            reject(error);
          }
        });
    });
  },
  resetPassword: async (payload: any) => {
    return new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/auth/resetPassword`, payload).then((response) => {
        try {
          console.log("Request Received for reset PAssword", payload);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });
  },
};
