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
