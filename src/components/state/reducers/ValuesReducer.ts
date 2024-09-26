
export type InitialStateType = typeof initialValues;

const initialValues = {
  minValue: 0,
  maxValue: 5,
};

type SetValuesActionType = ReturnType<typeof setValuesAC>;
type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>;
type ResetCounterActionType = ReturnType<typeof resetCounterAC>;

type ActionsType = SetValuesActionType | IncrementCounterActionType | ResetCounterActionType;

export const ValuesReducer = (values = initialValues, action: ActionsType): InitialStateType => {

	switch (action.type) {
    case "INCREMENT-COUNTER":
			return { ...values, minValue: values.minValue + 1 };
      case "RESET-COUNTER":
				return {...values, minValue: 0}

    case "SET-VALUES":
      return { ...values, minValue: action.min, maxValue: action.max };

    default:
      return values;
  }

}

export const setValuesAC = (min: number, max: number) => ({ type: "SET-VALUES", min, max } as const);
export const incrementCounterAC = () => ({ type: "INCREMENT-COUNTER" } as const);
export const resetCounterAC = () => ({ type: "RESET-COUNTER" } as const);