import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchcharacters = createAsyncThunk(

    'characters/fetchCharacters',
    async (query) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
        return response.data.results;

    }
)

const characterSlice = createSlice({
name: 'characters',
initialState: {
list: [],
selected: null,
status: 'idle',
error: null
},

reducers:
{
    selectedCharacter: (state, action) => {
        state.selected  = state.list.find((char) => char.id === action.payload);
    },

}




})