import { combineReducers, createStore } from "redux";
import { ValuesReducer } from "./reducers/ValuesReducer";
import { getStateFromLocalStorage, saveStateToLocalStorage } from "../../localStorage";

export type AppRootStateType = ReturnType<typeof RootReducer>;

const RootReducer = combineReducers({
  counterValues: ValuesReducer,
});

//в качестве 2-го параметра стор принимает т.н. preloaded state - сюда и засовываем ф-цию
//которая будет доставать данные из ЛС
export const store = createStore(RootReducer, getStateFromLocalStorage());

//подписываемся на изменения стора - каждый раз, когда стор будет меняться, функция, переданная в подписчика будет отрабатывать
//Записываем весь стейт в ЛС
store.subscribe( () => {
	saveStateToLocalStorage(store.getState());
})