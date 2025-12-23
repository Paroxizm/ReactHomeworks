import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    name: null,
    email: null,
    isAuthenticated: false,
};

function getUsernameFromEmail(email: string): string | null {
    if (!email) {
        return null;
    }

    const atIndex = email.lastIndexOf('@');
    if (atIndex === -1) {
        return null;
    }

    return email.substring(0, atIndex);
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<{
            email: string,
            password: string
        }>) {
            state.name = getUsernameFromEmail(action.payload.email);
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.name = null;
            state.email = null;
            state.isAuthenticated = false;
        }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
