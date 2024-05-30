export const addTwoNumbers = (a: number, b: number) => a + b;

type Params = {
  first: number;
  second: number;
};

export const addTwoNums = (params: Params) => params.first + params.second;
