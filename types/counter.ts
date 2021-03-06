export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  // payload: payload
}

interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
}

interface ResetCounterAction {
  type: typeof RESET_COUNTER;
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction
  | ResetCounterAction;
