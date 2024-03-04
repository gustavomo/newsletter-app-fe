import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import to from "await-to-js";

import config from "../config";

const URL_BASE = config.REACT_APP_BACKEND_URL;

const executeRequest: TExecuteRequestFunc = async (
  endpoint,
  params,
  method = "POST",
  formDataFile?
) => {
  const headers: THeader = {
    "Content-Type": "application/json",
  };
  const options: AxiosRequestConfig = {
    method,
    headers,
  };

  const url = new URL(`${URL_BASE}${endpoint}`);
  options.url = url.href;

  if (method !== "GET") {
    options.data = JSON.stringify(params);

    if (formDataFile) {
      const finalData = new FormData();
      finalData.append("file", formDataFile);
      finalData.append("data", options.data);
      options.data = finalData;

      delete headers["Content-Type"];
    }
  } else if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    options.url = url.href;
  }

  const [error, response] = await to<AxiosResponse, AxiosError>(axios(options));
  if (error) {
    console.log("error", error);
  }

  return response.data;
};

export default executeRequest;
