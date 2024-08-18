import { AppRootStateType } from "./components/state/store";

export const getStateFromLocalStorage = () => {
  try {
    const receivedState = JSON.parse(localStorage.getItem("values") || "");
    if (!receivedState) return undefined;
		console.log(receivedState)
    return receivedState;
  } catch (error) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: AppRootStateType) => {
  // const values = { minValue: value, maxValue: maxValue };
  const valuesState = JSON.stringify(state);
  localStorage.setItem("values", valuesState);
};
