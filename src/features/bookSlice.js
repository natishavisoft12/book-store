import { createSlice } from "@reduxjs/toolkit"
import { topRatedBooks } from "./booksThunk"

const initialState ={
    bookdata:[],
    loading:false,
    error:null
}
const boookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(topRatedBooks.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(topRatedBooks.fulfilled,(state,action)=>{
            state.loading=false;
            state.bookdata=action.payload
        })
        .addCase(topRatedBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    }
})
export default boookSlice.reducer;