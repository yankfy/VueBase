import axios from "@/utils/ajax";

export default {
  getMockData: (params: any) => {
    return axios
      .get("/api/mockdata", { params: params })
      .then((res) => res.data);
  }
};
