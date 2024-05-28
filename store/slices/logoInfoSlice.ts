import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LogoInfoState {
  logo: string;
  userName: string;
}

const initialState: LogoInfoState = {
  logo: "",
  userName: "",
};

const logoInfoSlice = createSlice({
  name: "logoInfo",
  initialState,
  reducers: {
    updateLogoInfo(state, action: PayloadAction<Partial<LogoInfoState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateLogoInfo } = logoInfoSlice.actions;
export default logoInfoSlice.reducer;
