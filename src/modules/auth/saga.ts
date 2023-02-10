import { takeEvery, call, put } from "redux-saga/effects";
import { authServices } from "@/services/auth";
import {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutRequest,
  signOutSuccess,
  forGotPasswordRequest,
  forGotPasswordSuccess,
  forGotPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} from "./reducer";
import {
  setSessionCookies,
  unSetSeesionCookies,
  redirectToReset,
} from "../../utils/common";

export function* signIn({ payload }: any): any {
  try {
    const { data }: any = yield call(authServices.signIn, payload);
    setSessionCookies(data);
    yield put(signInSuccess({ ...data }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signOut({ payload }: any): any {
  try {
    unSetSeesionCookies();
    yield put(signOutSuccess({}));
  } catch (error) {}
}
export function* forgotPassword({ payload }: any): any {
  try {
    console.log("Forgot PAssword");
    const { data }: any = yield call(authServices.forgotPassword, payload);
    console.log("Forgot Response..", data.data);
    yield put(forGotPasswordSuccess(data.data));
  } catch (error) {
    console.log("Forgot Password", error);
    yield put(forGotPasswordFailure(error));
  }
}
export function* resetPassword({ payload }: any): any {
  try {
    const { data }: any = yield call(authServices.resetPassword, payload);
    console.log("Reset Password", data);
    yield put(resetPasswordSuccess({ ...data }));
  } catch (error) {
    console.log("ResetPassword Error", error);
    yield put(resetPasswordFailure(error));
  }
}
export default function* yourSaga() {
  yield takeEvery(signInRequest.type, signIn);
  yield takeEvery(signOutRequest.type, signOut);
  yield takeEvery(forGotPasswordRequest.type, forgotPassword);
  yield takeEvery(resetPasswordRequest.type, resetPassword);
}
