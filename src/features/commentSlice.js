import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: JSON.parse(localStorage.getItem("comments")) || {} 
};

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment: (state, action) => {
            const { bookId, comment } = action.payload;
            
            if (!state.comments[bookId]) {
                state.comments[bookId] = []; 
            }

            state.comments[bookId].push(comment); 
            
            localStorage.setItem("comments", JSON.stringify(state.comments));
        }
    }
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
