import { User } from '@/app/types/types';
import { signupSchema } from './../../app/(shop)/schemas/index';
import { authOptions } from '@/lib/auth';
import { createSlice, createAsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { getServerSession } from 'next-auth'; // Import the NextAuth function

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
export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
});

export const signUpUser = createAsyncThunk('user/signUp', async (userData: User) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
  
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Define reducers for logging in and logging out here if needed
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.status ='succeeded';
    }, 
    logout: (state) => {
      state.user = null;
      state.status ='idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action: PayloadAction<unknown, string, { arg: void; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
    })
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
  },
});

// Export reducer
export default userSlice.reducer;
