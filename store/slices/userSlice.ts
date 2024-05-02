import { login } from '@/actions/login';
import { register } from '@/actions/register';
import { User } from '@/app/types/types';
import { createSlice, createAsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { signOut as signOutNextAuth } from 'next-auth/react';
// Define a type for the user state
interface UserState {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state
const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// Async thunk for fetching the current user
export const signOutUser = createAsyncThunk('user/signOut', async () => {
  await signOutNextAuth();
});

export const signUpUser = createAsyncThunk('user/signUp', async (userData: User) => {
  const response = await register(userData);

  return response;
  
})

export const signInUser = createAsyncThunk('user/signIn', async (userData: User) => {
  const response = await login(userData);

  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Define reducers for logging in and logging out here if needed
    // login: (state, action: PayloadAction<any>) => {
    //   state.user = action.payload;
    //   state.status ='succeeded';
    // }, 
    // logout: (state) => {
    //   state.user = null;
    //   state.status ='idle';
    // }
  },
  extraReducers: (builder) => {
    builder
     .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.status ='succeeded';
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action: PayloadAction<unknown, string, { arg: User; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
    })
     .addCase(signInUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.status ='succeeded';
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action: PayloadAction<unknown, string, { arg: User; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
    })
     .addCase(signOutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.status ='idle';
        state.user = null;
      })
      .addCase(signOutUser.rejected, (state, action: PayloadAction<unknown, string, { arg: void; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

// Export reducer
export default userSlice.reducer;
