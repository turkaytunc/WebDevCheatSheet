# React

## 📝 Index

- [Use State](#Use-State)
- [useState with objects](#useState-with-objects)
- [useEffect hook](#useEffect-hook)
- [Conditionally run effect hook](#Conditionally-run-effect-hook)
- [call useEffect once at start](#call-useEffect-once-at-start)
- [useEffect cleanup](#useEffect-cleanup)
- [Dependency Check in useEffect](#Dependency-Check-in-useEffect)
- [Data fetch with hooks and async-await](#Data-fetch-with-hooks-and-async-await)
- [Data fetch with hooks and axios with promises](#Data-fetch-with-hooks-and-axios-with-promises)
- [useeffect empty dependency array lint error fix](#useeffect-empty-dependency-array-lint-error-fix)

- [Redux](#Redux)
  - [Redux simple example](#Redux-simple-example)

## Use State

```javascript
import React, { useState } from "react";

export const StateHook = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        Increment 5
      </button>
    </div>
  );
};
```

## useState with objects

```javascript
import React, { useState } from "react";

export const StateHook = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });
  return (
    <div>
      <form>
        <label style={{ fontSize: ".7rem" }} htmlFor="firstName">
          FirstName
        </label>
        <input
          type="text"
          value={data.firstName}
          name="firstName"
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
        <label style={{ fontSize: ".7rem" }} htmlFor="lastName">
          LastName
        </label>
        <input
          type="text"
          value={data.lastName}
          name="lastName"
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
        <label style={{ fontSize: ".7rem" }} htmlFor="age">
          Age
        </label>
        <input
          type="number"
          value={data.age}
          name="age"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
      </form>
      firstName {data.firstName} <br />
      lastName {data.lastName} <br />
      age {data.age}
    </div>
  );
};
```

## useEffect hook

```javascript
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times.`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {`${count}`} times.
      </button>
    </div>
  );
};
```

## Conditionally run effect hook

```javascript
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    document.title = `Clicked ${count} times.`;
  }, [count]);
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>
        Clicked {`${count}`} times.
      </button>
    </div>
  );
};
```

## call useEffect once at start

```javascript
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [cursorPosition, setCursorPosition] = useState({ xPos: 0, yPos: 0 });

  const getMousePosition = (e) => {
    setCursorPosition({ ...cursorPosition, xPos: e.clientX, yPos: e.clientY });
    console.log("mousemove called!");
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
  }, []);
  return (
    <div>
      Mouse X: {cursorPosition.xPos}
      <br />
      Mouse Y: {cursorPosition.yPos}
    </div>
  );
};
```

## useEffect cleanup

```javascript
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [cursorPosition, setCursorPosition] = useState({ xPos: 0, yPos: 0 });

  const getMousePosition = (e) => {
    setCursorPosition({ ...cursorPosition, xPos: e.clientX, yPos: e.clientY });
    console.log("mousemove called!");
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);
  return (
    <div>
      Mouse X: {cursorPosition.xPos}
      <br />
      Mouse Y: {cursorPosition.yPos}
    </div>
  );
};
```

## Dependency Check in useEffect

```javascript
import React, { useState, useEffect } from "react";

export const EffectHook = () => {
  const [count, setCount] = useState(0);

  const incrementOne = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementOne, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div>{count}</div>;
};
```

## Data fetch with hooks and async-await

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

export const EffectHook = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (error) {
      console.log("something went wrong! \n error is : ", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const usersList = users.map((user) => {
    return (
      <li key={user.id}>
        UserName: {user.name} UserEmail: {user.email}
      </li>
    );
  });

  return (
    <div>
      <ul>{usersList}</ul>
    </div>
  );
};
```

## Data fetch with hooks and axios with promises

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

export const EffectHook = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => setUsers(response.data))
      .catch();
  }, []);

  const usersList = users.map((user) => {
    return (
      <li key={user.id}>
        UserName: {user.name} UserEmail: {user.email}
      </li>
    );
  });

  return (
    <div>
      <ul>{usersList}</ul>
    </div>
  );
};
```

### useeffect empty dependency array lint error fix

- Use function as useEffect callback

```js
useEffect(fetchBusinesses, []);
```

- Declare function inside useEffect

```js
useEffect(() => {
  function fetchBusinesses() {
    ...
  }
  fetchBusinesses()
}, [])
```

- Memoize with useCallback

In this case, if you have dependencies in your function, you will have to include them in the useCallback dependencies array and this will trigger the useEffect again if the function's params change. Besides, it is a lot of boilerplate... So just pass the function directly to useEffect as in 1. useEffect(fetchBusinesses, []).

```js

const fetchBusinesses = useCallback(() => {
  ...
}, [])
useEffect(() => {
  fetchBusinesses()
}, [fetchBusinesses])

```

### Redux

### Redux simple example

```js
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return { type: INCREMENT };
};

const decAction = () => {
  return { type: DECREMENT };
};

const store = Redux.createStore(counterReducer);
```
