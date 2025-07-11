// authThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../firebase/config"; 

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
