import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
  subjects: [],
  isLoading: false
};

export const getAllSubjects = createAsyncThunk(
    'getAllSubjects',
    async () => {
       const res = await fetch('http://localhost:3008/subjects')
       const data = await res.json()

       return data;
    }
)


export const subjectSlice = createSlice({
  name: "Subjects",
  initialState: initState,
  reducers: {
    clearSubjects: (state) => {
      state.subjects = initState;
    },
  },
  extraReducers: {
    [getAllSubjects.pending]: (state) => {
        state.isLoading = true
    },
    [getAllSubjects.fulfilled]: (state, action) => {
        state.subjects = action.payload
        state.isLoading = false
    },
    [getAllSubjects.rejected]: (state) => {

        state.isLoading = false
    }
  }
});

export const { setSubjects, clearSubjects } = subjectSlice.actions;
export default subjectSlice.reducer;
