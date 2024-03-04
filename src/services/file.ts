import executeRequest from "./index";

export const uploadFile: TUploadFile = async (params, file) => {
  try {
    const response = await executeRequest("/api/v1/upload", params, "POST", file);

    return response.url;
  } catch (error) {
    throw error;
  }
};
