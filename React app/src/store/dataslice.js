import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    username: "",
    email: "",
    school: "",
    address: "",
    standard: ""
  },
  reducers: {
    roleSet(state, action) {
      state.role = action.payload.role;
      state.username = action.payload.name;
      state.email = action.payload.email;
      state.school = action.payload.school;
      state.address = action.payload.address;
      if (action.payload.standard !== "")
        state.standard = action.payload.standard;
    },
    roleClear(state, action) {
      state.role = "";
      state.username = "";
      state.email = "";
      state.school = "";
      state.address = "";
    }
  }
});
export const datachange = dataSlice.actions;
export default dataSlice;
