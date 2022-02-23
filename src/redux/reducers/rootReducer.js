// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import blog from "../reducers/blog.reducer";
// import apps from "./../app/reducers";
// import user from "./user.reducer";
// import customer from './customers/customer.reducer'
// import navbar from "./navbar";
// import layout from "./layout";
// import profile from 'redux/app/reducers/profile/profile.reducer'

const rootReducer = combineReducers({
    blog,
//   apps,
//   profile,
//   user,
//   navbar,
//   layout,
//   customer
});

export default rootReducer;