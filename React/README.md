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
