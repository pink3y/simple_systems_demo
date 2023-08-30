import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

export type repolistItem = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.search.repos
>["data"]["items"][0];
export type userlistItem = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.search.users
>["data"]["items"][0];

export interface UserState {
  value: number;
  username: string;
  userList: userlistItem[];
}

const initialState: UserState = {
  userList: [],
  username: "",
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserList: (state, action: PayloadAction<userlistItem[]>) => {
      state.userList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, setUserList } = userSlice.actions;

export default userSlice.reducer;
