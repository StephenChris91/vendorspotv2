import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasicInfoState {
  name: string;
  slug: string;
  description: string;
}

const initialState: BasicInfoState = {
  name: "",
  slug: "",
  description: "",
};

const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    updateBasicInfo(state, action: PayloadAction<Partial<BasicInfoState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateBasicInfo } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
