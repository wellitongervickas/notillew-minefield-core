
# Notillew Minefield Core
*A javascript minefield generator* 

![coverage](https://badgen.net/badge/coverage/100/green) ![build passing](https://badgen.net/badge/build/passing/green) ![contributions](https://badgen.net/badge/contributions/welcome/green) ![types](https://badgen.net/badge/types/included/blue)

## Installation
> yarn add notillew-minefield-core

*or*

> npm install notillew-minefield-core

## Documentation
This minefield generator exports a minefield array and a object with mines mapping
You can use minesMap to validate if a position is mine.


### Minefields

```
const { minefields } = minefield.generate(12, 12, 12);
// Output Array[number[]]
// [
//  [2, -1,  3, 1],
//  [2, -1, -1, 1]
// ]

```

### Minesmap

```
const { minesMap } = minefield.generate(12, 12, 12);
// Output Object { 'index': Array[number] }
// { 
//  '0', [1], 
//  '1': [1, 2]
// }

```


### Properties Generate(columns, rows, mines)

| Name | Required | Min | Max | Type | 
|--|--|--|--|--|
| columns | true  | 12 | - | int |
| rows | true  | 12 | - | int |
| mines | true  | 6 | less than columns * rows | int |


## React example usage 

```
import React from 'react';
import { FaBomb } from 'react-icons/fa';

import minefield from 'notillew-minefield-core';
import './App.css';

function App() {
  const { minefields } = minefield.generate(12, 12, 12);

  const getClassName = (number) => {
    switch (number) {
      case -1:
        
        return 'mine';

      case 0: 
        return 'empty'
    
      default:
        return 'number';
    }
  }
  return (
    <div className="App">
      <ul className="minefields">
        {minefields.map(rows => (
          <li className="row">
            {rows.map(col => (
              <div 
                className={`col-${getClassName(col)}`}
              >
                {col === -1 ? <FaBomb color="black" /> : col}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
