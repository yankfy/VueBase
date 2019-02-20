import axios from "@/utils/ajax";
import MockAdapter from "axios-mock-adapter";
import { mockData } from "./data/mockData";
export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet("/success").reply(200, {
      msg: "success"
    });

    // mock error request
    mock.onGet("/error").reply(500, {
      msg: "failure"
    });

    mock
      //   .onGet("/api/mockdata") 没有参数时
      .onGet("/api/mockdata", { params: { id: 1 } }) // 有确定参数时 这里只做筛选
      .reply(200, { code: 0, message: "success", result: mockData });
    // mock.onPost('/RpaOcr/kp/api/ocrReview').reply(200, {
    //     code: 0,
    //     message: '',
    //     result: {}
    // });
  }
};
