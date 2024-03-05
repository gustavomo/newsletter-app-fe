import executeRequest from "./index";

export const createNewsletter: TCreateNewsletter = async (params) => {
  try {
    await executeRequest("/api/v1/newsletters", params, "POST");
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
    await executeRequest(`/api/v1/newsletters/${id}/emails`, params, "POST");
  } catch (error) {
    throw error;
  }
};

export const submitNewsletter: TSubmitNewsletter = async (id) => {
  try {
    await executeRequest(`/api/v1/newsletters/${id}/submit`, {}, "POST");
  } catch (error) {
    throw error;
  }
};

export const unsubscribeEmail: TUnsubscribeEmail = async (id) => {
  try {
    await executeRequest(`/api/v1/newsletters/subscribers/${id}`, {}, "DELETE");
  } catch (error) {
    throw error;
  }
};

export const getNewsletterSubscribers: TGetNewsletterSubscribers = async (id) => {
  try {
    const response = await executeRequest(`/api/v1/newsletters/${id}/subscribers`, null, "GET");
    return response;
  } catch (error) {
    throw error;
  }
};
