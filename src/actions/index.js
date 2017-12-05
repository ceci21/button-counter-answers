// Constants for actions.
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET = 'SET';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}