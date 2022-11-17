import { configureStore } from '@reduxjs/toolkit';
import  userSlice  from '../features/userSlice';
import subjectSlice from '../features/subJectsSlice';



export const store = configureStore({
  reducer: {
    user: userSlice,
    subjects: subjectSlice
  },
});
