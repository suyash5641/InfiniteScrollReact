import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../data/userData";
import { IUser } from "../interface/interface";

interface UserState {
  visibleUsers: IUser[];
  isLoading: boolean;
  pageRef: number;
  error: string | null;
}

const initialState: UserState = {
  visibleUsers: [],
  isLoading: false,
  pageRef: 1,
  error: null,
};

// Thunk to load users
export const loadUsers = createAsyncThunk(
  "users/loadUsers",
  async (page: number) => {
    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const users = await new Promise<IUser[]>((resolve, reject) => {
      setTimeout(() => {
        const fetchedUsers = userData.slice(
          startIndex,
          startIndex + itemsPerPage
        );

        if (fetchedUsers.length > 0) {
          resolve(fetchedUsers);
        } else {
          reject(new Error("No users found. Please try again."));
        }
      }, 1000);
    });

    return users;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.visibleUsers = [...state.visibleUsers, ...action.payload];
        state.isLoading = false;
        state.pageRef += 1;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load users";
      });
  },
});

export default userSlice.reducer;
