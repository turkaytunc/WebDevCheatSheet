# React

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
