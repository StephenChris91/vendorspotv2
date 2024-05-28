// shopSlice.js
import { shopType } from '@/app/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: shopType = {
  name: "",
  description: "",
  address: "",
  phone: "",
  email: "",
  logo: "",
  banner: "",
  slug: "",
  bankName: "",
  accountNo: 0,
  country: "",
  city: "",
  state: "",
  zip: "",
  phoneNumber: "",
  website: "",
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateShopField(state: any, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // other reducers...
  },
});

export const { updateShopField } = shopSlice.actions;

export default shopSlice.reducer;
