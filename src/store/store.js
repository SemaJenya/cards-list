import { configureStore } from "@reduxjs/toolkit"; 
import landingCardReduser from '../store/redusers/landingCard/landingCardSlice.js'

export default configureStore({
    reducer:{
        landingCardStore: landingCardReduser,
    }
});