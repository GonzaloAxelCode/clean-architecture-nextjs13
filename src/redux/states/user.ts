import { User } from "@/models/user.models";
import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState: User = {
  name: "",
};

const createReducer = <UserEmptyState>(
  state: UserEmptyState,
  action: { payload: UserEmptyState }
) => ({
  ...state,
  ...action.payload,
});

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: createReducer,
    modifyUser: createReducer,
    resetUser: () => UserEmptyState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
