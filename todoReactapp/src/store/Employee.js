import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addemployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export const { addemployee } = employeeSlice.actions;

export default employeeSlice.reducer;
