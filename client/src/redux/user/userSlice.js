import { createSlice } from "@reduxjs/toolkit";

// Initial state with error and loading
const initialState = {
    currentUser: null,
    loading: false,
    error: false, // Error should be null initially for correct type handling
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = false; // Clear any previous errors on new sign-in attempt
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false; // Clear error on success
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload; // Store error message
        },
    },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
