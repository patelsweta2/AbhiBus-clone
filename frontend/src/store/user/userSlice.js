import { createSlice } from "@reduxjs/toolkit";
import ENDPOINT from "../../network/endPoints";

const initialState = {
  value: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.value = action.payload;
      state.loading = false;
      state.error = "";
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;

// users actions
const setType = (action) => (action.type = "api/Requested");

export const createUserSignUpAction = ({ data, params }) => {
  const action = {};
  setType(action);
  action.payload = {
    url: ENDPOINT.signUP,
    method: "POST",
    body: data,
    params,
    onSuccess: setUser.type,
    onLoading: setLoading.type,
    onError: setError.type,
    showToast: true,
  };
  return action;
};
