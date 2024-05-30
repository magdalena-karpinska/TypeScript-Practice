export const addTwoNumbers = (a: number, b: number) => a + b;

type Params = {

  first: number;
  second: number;
};

export const addTwoNums = (params: Params) => params.first + params.second;

export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

export const getName2 = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}


export const getUserId = (user: User) => user.id;
