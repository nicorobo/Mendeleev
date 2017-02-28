# Mendeleev
A virtual periodic table of the elements module.

### PeriodicTable
PeriodicTable contains information on individual elements.
It allows retrieval by symbol, name, or atomic number.
It also allows filtering by type, period, and group.

#### Initialization
```js
import { PeriodicTable } from 'mendeleev'; // ES2015
var PeriodicTable = require('mendeleev').PeriodicTable; // CommonJS
```

####`.getElement(str)`
Takes an element's symbol as an argument, such as 'H' or 'Ni', returning the elements data if it's found, null if it's not.
```js
var hydrogen = PeriodicTable.getElement('H');
hydrogen == {  
    name:"hydrogen",
    symbol:"H",
    type:"other-nonmetal",
    number:1,
    mass:1.008,
    period:1,
    group:1,
    melting:14.01,
    boiling:20.28,
    density:0.00008988,
    electronegativity:2.20,
    radius:25,
    valence:1,
    specificheat:14.304
}

var unknown = PeriodicTable.getElement('Nope');
unknown == null;
```
####`.getAtomic(number)`
Takes an element's atomic number as an argument, such as 17 or 118, returning the elements data if it's found, null if it's not.
```js
var helium = PeriodicTable.getElement(2); // { name: 'helium', ... }
var unknown = PeriodicTable.getElement(1028); // null
```

####`.getType(string)`
Takes an element type as an argument, returning an array of matching elements.
Possible element types include: `alkali-metal`, `alkaline-earth`, `transition-metal`, `post-transition-metal`, `metalloid`, `other-nonmetal`, `halogen`, `noble-gas`, `lanthanoid`, `actinoid`. 
```js
var halogens = PeriodicTable.getType('halogen'); // [{ name: 'fluorine', ... }, { name: 'chlorine', ... }, ...]
var unknown = PeriodicTable.getElement('fake-type'); // []
```
