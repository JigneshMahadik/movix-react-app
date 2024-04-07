import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie : [
        {
            id:1,
            name:"Marvel",
            type:"Sci-Fi",
            rating:5
        }
    ]
};

const movieSlice = createSlice({
    name : 'Movix',
    initialState,
    reducers:{
        setMovie:(state, action)=>{
            state.movie = action.payload.name
        }
    }
});


export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;