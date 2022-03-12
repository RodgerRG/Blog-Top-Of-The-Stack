
import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
    navOpen: boolean;
}

const initialState : HeaderState = {
    navOpen : false
}

const headerSlice = createSlice({
    name: 'header',
    initialState: initialState,
    reducers: {
        toggleNav: (state, _) => {
            state.navOpen = !state.navOpen;
        }
    }
});

export const { toggleNav } = headerSlice.actions;
export const selectNavOpen = (state: any) => state.header.navOpen;
export default headerSlice.reducer;