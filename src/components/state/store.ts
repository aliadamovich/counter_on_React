import { combineReducers, createStore } from "redux";
import { ValuesReducer } from "./reducers/ValuesReducer";

export type AppRootStateType = ReturnType<typeof RootReducer>;

const RootReducer = combineReducers({
  counterValues: ValuesReducer,
});

export const store = createStore(RootReducer);
