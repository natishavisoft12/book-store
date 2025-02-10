import {createAsyncThunk} from "@reduxjs/toolkit"
export const topRatedBooks = createAsyncThunk("books/TopRated",async ()=>{
    try{
        const response =await fetch("/BooksData.json")
        const data = await response.json()
        
        return data.booksData
        
    }catch(err){
        console.log(err);
        
    }
})