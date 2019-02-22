import axios from "@/config/utils/axios";
import {BASEURL} from "@/config/js/const";

export default {
  getMockData: (params: any) => {
    console.log(`get api`)
    return axios.get("/api/mockdata", { params }).then((res) => res.data);
  },
  postMockData: (params: any) => {
    console.log(`post api`)
    return axios.post("/api/mockdata", params).then((res) => res.data);
  },
  mockdata:`${BASEURL}/mockdata`
};
