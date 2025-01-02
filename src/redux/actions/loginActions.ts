import { Dispatch } from "redux";
import { userLoginService } from "../services/userLoginService";
import { loginSuccess, loginFailure } from "../slices/authSlice";

export const loginUser =

  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const user = await userLoginService(email, password);
      dispatch(loginSuccess(user));
      return user;
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      throw error;
    }
  };
