// The implicit 'any' type error
export const addTwoNumbers = (a: number, b: number) => a + b;

type Params = {

  first: number;
  second: number;
};

// Working with object params
export const addTwoNums = (params: Params) => params.first + params.second;

// Set properties as optional
export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// Optional parameters
export const getName2 = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// Assigning types to variables
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

// Constraining value types
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

// Working with arrays
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

  // Function return type annotation
  export const makeUser = ():User2 => {
    return {
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
  };

  // Typing promises and async requests
  interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  
  export const fetchLukeSkywalker = async (): Promise <LukeSkywalker> => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });
  
    return data;
  };

  // Passing type arguments
  export const guitarists = new Set<string>();

  guitarists.add('Jimi Hendrix');
  guitarists.add('Eric Clapton');

  // Assigning dynamic keys to an object
  export const createCache = () => {
    const cache: Record<string, string> = {};
  
    const add = (id: string, value: string) => {
      cache[id] = value;
    };
  
    const remove = (id: string) => {
      delete cache[id];
    };
  
    return {
      cache,
      add,
      remove,
    };
  };

  // Narrowing Down Union Types
  export const coerceAmount = (amount: number | { amount: number }) => {
    if (typeof amount === 'object') {
      return amount.amount;
    }
    return amount;
  };