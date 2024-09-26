import { AppRootStateType } from "./components/state/store";

export const getStateFromLocalStorage = () => {
 
    const receivedState = localStorage.getItem("app-state");
    if (receivedState) {
			return JSON.parse(receivedState)
		}
  
};

export const saveStateToLocalStorage = (state: AppRootStateType) => {
  localStorage.setItem("app-state", JSON.stringify(state));
};
