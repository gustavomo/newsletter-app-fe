import { createAsyncThunk } from "@reduxjs/toolkit";

import { uploadFile } from "../../../services/file";
import { createNewsletter, getNewsletter, submitNewsletter, subscribeEmail, unsubscribeEmail } from "../../../services/newsletter";

import { setGoToError, setOpenSpinner } from "../App/actions";

import {
  newsletterSlice,
} from "./reducer";

const {
  setResult,
} = newsletterSlice.actions;

const createNewsletterAction = createAsyncThunk<any, { file: File, inputParams: { subject: string } }, null>(
  "newsletter/createNewsletter",
  async (params, thunk) => {
    thunk.dispatch(setOpenSpinner(true));

    try {
      const response = await uploadFile(params.inputParams, params.file);
      await createNewsletter({ ...params.inputParams, file_url: response });

      thunk.dispatch(setOpenSpinner(false));
      thunk.dispatch(getNewslettersAction());
      return response;
    } catch (error) {
      thunk.dispatch(setGoToError(true));
      thunk.dispatch(setOpenSpinner(false));
      return "";
    }
  }
);

const getNewslettersAction = createAsyncThunk<any, null, null>(
  "newsletter/getNewsletters",
  async (_, thunk) => {
    thunk.dispatch(setOpenSpinner(true));

    try {
      const response = await getNewsletter();

      thunk.dispatch(setOpenSpinner(false));
      return response;
    } catch (error) {
      thunk.dispatch(setGoToError(true));
      thunk.dispatch(setOpenSpinner(false));
      return "";
    }
  }
);

const subscribeEmailAction = createAsyncThunk<any, { id: number, inputParams: { email: string } }, null>(
  "newsletter/subscribeEmail",
  async (params, thunk) => {
    thunk.dispatch(setOpenSpinner(true));

    try {
      const response = await subscribeEmail(params.id, params.inputParams);

      thunk.dispatch(setOpenSpinner(false));
      return response;
    } catch (error) {
      thunk.dispatch(setGoToError(true));
      thunk.dispatch(setOpenSpinner(false));
      return "";
    }
  }
);

const submitNewsletterAction = createAsyncThunk<any, { id: number }, null>(
  "newsletter/submitNewsletter",
  async (params, thunk) => {
    thunk.dispatch(setOpenSpinner(true));

    try {
      const response = await submitNewsletter(params.id);

      thunk.dispatch(setOpenSpinner(false));
      return response;
    } catch (error) {
      thunk.dispatch(setGoToError(true));
      thunk.dispatch(setOpenSpinner(false));
      return "";
    }
  }
);

const unsubscribeEmailAction = createAsyncThunk<any, { id: number }, null>(
  "newsletter/unsubscribeEmail",
  async (params, thunk) => {
    thunk.dispatch(setOpenSpinner(true));

    try {
      const response = await unsubscribeEmail(params.id);

      thunk.dispatch(setOpenSpinner(false));
      return response;
    } catch (error) {
      thunk.dispatch(setGoToError(true));
      thunk.dispatch(setOpenSpinner(false));
      return "";
    }
  }
);

export {
  unsubscribeEmailAction,
  submitNewsletterAction,
  getNewslettersAction,
  createNewsletterAction,
  subscribeEmailAction,
  setResult,
};
