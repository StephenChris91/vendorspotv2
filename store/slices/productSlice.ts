import { createSlice, createAsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ProductState {
  products: { [productId: string]: any };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state
const initialState: ProductState = {
  products: {},
  status: 'idle',
  error: null,
};

// Async thunk for fetching all products
export const fetchAllProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await fetch('/api/products');
  return await response.json();
});

// Async thunk for fetching a product by ID
export const fetchProductById = createAsyncThunk('products/fetchById', async (productId: string) => {
  const response = await fetch(`/api/products/${productId}`);
  return await response.json();
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<{ [productId: string]: any }>) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action: PayloadAction<unknown, string, { arg: void; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
            state.status = 'failed';
            state.error = action.error.message ?? null;
        })
        // .addCase(fetchProductById.pending, (state) => {
        //     state.status = 'loading';
        // })

      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<{ [productId: string]: any }>) => {
        state.status = 'succeeded';
        state.products[action.payload.id] = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action: PayloadAction<unknown, string, { arg: string; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
  },
});

// Export reducer
export default productSlice.reducer;