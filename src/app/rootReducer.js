import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { subjectSlice } from "../features/subJectsSlice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    subjects: subjectSlice.reducer
});

export default rootReducer;