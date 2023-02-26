import axios from "axios";


const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  });

  export const get = async (path, opsions = {}) => {
      const response = await request.get(path, opsions);
      return response.data;
  };
  export default request;