import request from "./axiosClient";

class QuestionAPI {
  randomQuestion = (params) => {
    const url = "/question/random-question";
    return request.post(url, params);
  };
}

const questionAPI = new QuestionAPI();
export default questionAPI;
