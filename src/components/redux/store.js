import { configureStore } from "redux";
const initialState = {
    contacts: [],
    filter: ""
  };
  const rootReducer = (state = initialState, action) => {
    return state;
  };
  export const store = configureStore(rootReducer);