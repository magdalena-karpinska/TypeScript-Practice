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

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Dude',
  isAdmin: false,
};

export const getUserId = (user: User) => user.id;

interface NewUser {
  id: number;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'super-admin';
}

export const newDefaultUser: NewUser = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Dude',
  role: "admin"
};

interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'super-admin';
  posts: Post[]; // or Array<Post>
}

interface Post {
  id: number;
  title: string;
}

  export const defaultUser2: User2 = {
    id: 1,
    firstName: 'Matt',
    lastName: 'Dude',
    role: 'admin',
    posts:[
      {
      id: 1,
      title: 'How I eat so much cheese',
      }
    ]
  };