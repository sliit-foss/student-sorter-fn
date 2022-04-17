import axiosIns from "../libs/axios";

export const getChatrooms = () => {
  return axiosIns.get("/chatrooms");
};
