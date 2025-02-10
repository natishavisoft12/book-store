import { createSlice } from "@reduxjs/toolkit"
import { topRatedBooks } from "./booksThunk"
import { booksData } from "../data/booksDataa"

const initialState ={
     allbok:[booksData],
    bookdata:[],
    loading:false,
    error:null
}
const boookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBook:(state,actions)=>{
            state.allbok.push(actions.payload)
            
              
        }
    },
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