import executeRequest from "./index";

export const createNewsletter: TCreateNewsletter = async (params) => {
  try {
    const response = await executeRequest("/api/v1/newsletters", params, "POST");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getNewsletter: TGetNewsletters = async () => {
  try {
    const response = await executeRequest("/api/v1/newsletters", null, "GET");
    return response;
  } catch (error) {
    throw error;
  }
};

export const subscribeEmail: TSubscribeEmail = async (id, params) => {
  try {
    const response = await executeRequest(`/api/v1/newsletters/${id}/emails`, params, "POST");
    return response;
  } catch (error) {
    throw error;
  }
};

export const submitNewsletter: TSubmitNewsletter = async (id) => {
  try {
    const response = await executeRequest(`/api/v1/newsletters/${id}/submit`, {}, "POST");
    return response;
  } catch (error) {
    throw error;
  }
};
