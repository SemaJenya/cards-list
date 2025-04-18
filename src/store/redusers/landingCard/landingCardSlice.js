import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLandingCard } from "../../../utils/api";



export const fetchLandingCards = createAsyncThunk(
    'landigCard/fetchLandingCards',
    async function () {
        const data = await getLandingCard();
        return data;
    }
)

export const landingCardSlice = createSlice({
    name: 'landingCard',
    initialState: {
        landingCards: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLandingCards.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchLandingCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.landingCards = action.payload;
            })
            .addCase(fetchLandingCards.error, (state, action) => {
                state.isLoading = false;
                state.error = error;
            })
    }
});

export const {createLandingCard} = landingCardSlice.actions;
export default landingCardSlice.reducer;