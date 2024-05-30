import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shopType } from '@/app/types/types';

const initialState: shopType = {
  
    shopname: '',
    description: '',
    address: '',
    logo: '',
    banner: '',
    slug: '',
    bankName: '',
    accountNo: "",
    country: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    website: '',
    accountName: ''
  
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateShopField: (
      state,
      action: PayloadAction<{ field: string; value: any }>
    ) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
    },
  },
});

export const { updateShopField } = shopSlice.actions;
export default shopSlice.reducer;
