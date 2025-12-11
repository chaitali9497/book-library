import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "./data";

const savedBooks = JSON.parse(localStorage.getItem("newBooks")) || [];


const initialState = [...savedBooks, ...booksData];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);

     
      const stored = JSON.parse(localStorage.getItem("newBooks")) || [];
      const updated = [action.payload, ...stored];
      localStorage.setItem("newBooks", JSON.stringify(updated));
    },

    deleteBook: (state, action) => {
      const id = action.payload;

      
      const filtered = state.filter(book => book.id !== id);

      
      const saved = JSON.parse(localStorage.getItem("newBooks")) || [];
      const updatedSaved = saved.filter(book => book.id !== id);
      localStorage.setItem("newBooks", JSON.stringify(updatedSaved));

      return filtered;
    }
  }
});


export const { addBook, deleteBook } = booksSlice.actions;


export default booksSlice.reducer;
