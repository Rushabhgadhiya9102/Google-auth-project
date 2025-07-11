import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle, logoutUser } from "./authThunk";

const initialState = {
  user: null,
  loading: false,
  error:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // clearUser: (state) => {
    //   state.user = null;
    // },
  },
  extraReducers: (builder) => {

    // -------- sign in with google -----------

    builder.addCase(loginWithGoogle.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(loginWithGoogle.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload;
    })
    builder.addCase(loginWithGoogle.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message;
    })

    // --------- logout state -----------

    builder.addCase(logoutUser.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(logoutUser.fulfilled,(state)=>{
      state.loading = false;
      state.user = null;
    })
    builder.addCase(logoutUser.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.error.message;
    })

  }
});

// export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
