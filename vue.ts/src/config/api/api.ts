import axios from "@/utils/ajax";

export default {
  getMockData: (params: any) => {
    console.log(`get api`)
    return axios.get("/api/mockdata", { params }).then((res) => res.data);
  },
  postMockData: (params: any) => {
    console.log(`post api`)
    return axios.post("/api/mockdata", params).then((res) => res.data);
  }
};
