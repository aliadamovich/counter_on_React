import { incrementCounterAC, InitialStateType, resetCounterAC, setValuesAC, ValuesReducer } from "./ValuesReducer";

test('value should be incremented by one', () => {
	const startState: InitialStateType = {
    minValue: 0,
    maxValue: 5,
  };

	const action = incrementCounterAC();
	const endState = ValuesReducer(startState, action);

	expect(endState.minValue).toBe(1)
	expect(endState.maxValue).toBe(5)
})

test("value should be reseted", () => {
  const startState: InitialStateType = {
    minValue: 8,
    maxValue: 15,
  };

  const action = resetCounterAC();
  const endState = ValuesReducer(startState, action);

  expect(endState.minValue).toBe(0);
  expect(endState.maxValue).toBe(15);
});

test("value should be setted", () => {
  const startState: InitialStateType = {
    minValue: 0,
    maxValue: 5,
  };

  const action = setValuesAC(13, 28);
  const endState = ValuesReducer(startState, action);

  expect(endState.minValue).toBe(13);
  expect(endState.maxValue).toBe(28);
});