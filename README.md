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

#### `.getElement(str)`
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
#### `.getAtomic(number)`
Takes an element's atomic number as an argument, such as 17 or 118, returning the elements data if it's found, null if it's not.
```js
var helium = PeriodicTable.getAtomic(2); // { name: 'helium', ... }
var unknown = PeriodicTable.getAtomic(1028); // null
```

#### `.getType(string)`
Takes an element type as an argument, returning an array of matching elements.
Possible element types include: `alkali-metal`, `alkaline-earth`, `transition-metal`, `post-transition-metal`, `metalloid`, `other-nonmetal`, `halogen`, `noble-gas`, `lanthanoid`, `actinoid`. 
```js
var halogens = PeriodicTable.getType('halogen'); // [{ name: 'fluorine', ... }, { name: 'chlorine', ... }, ...]
var unknown = PeriodicTable.getType('fake-type'); // []
```

#### `.getPeriod(number)`
Takes an elemental period (1 to 7) as an argument, returning an array of matching elements.
```js
var periodOne = PeriodicTable.getPeriod(1); // [{ name: 'hydrogen', ... }, { name: 'helium', ... }, ...]
var unknown = PeriodicTable.getPeriod(1000); // []
```

#### `.getGroup(number)`
Takes an elemental group (1 to 18) as an argument, returning an array of matching elements.
```js
var alkalineEarth = PeriodicTable.getGroup(2); // [{ name: 'beryllium', ... }, { name: 'magnesium', ... }, ...]
var unknown = PeriodicTable.getGroup(1000); // []
```

### Compound
Compound is an object that represents a chemical compound.
After being initialized, it can have elements added and subtracted.
It also has methods for getting the molecular mass, mass percentages, and for creating an HTML representation of the compound.

#### Initialization
You can initialize an empty compound, or pre-populate it with elements.
```js
import { Compound } from 'mendeleev'; // ES2015
var Compound = require('mendeleev').Compound; // CommonJS

var empty = new Compound();
var water = new Compound({'H': 2, 'O', 1});
```

#### `.add(str, ?number)`
Allows you to add an element to a compound, with an optional quantity. The default quantity is 1.
```js
var water = new Compound();
water.add('H', 2);
water.add('O');
```

#### `.remove(str, ?number)`
Allows you to remove an element from a compound, with an optional quantity. The default quantity is 1.
```js
var c = new Compound({'H': 2, 'O': 1});
c.remove('O') // Compound would be H2
```

#### `.getMass()`
Returns the molecular mass of the compound.
```js
var silverNitrate = new Compound({"Ag": 1, "N": 1, "O": 3})
var m = silverNitrate.getMass(); // 169.87490
```

#### `.getPercentages()`
Returns an array in the form of `[{element: <str>, percentage: <number>}, ....]`
```js
var water = new Compound({'H': 2, 'O', 1});
var p = water.getPercentages(); // [{element: 'H', percentage:11.19}, {element: 'O', percentage:88.81}]
```

#### `.toHTML()`
Returns the compound as HTML, giving the quantities `<sub>` tags.
```js
var water = new Compound({'H': 2, 'O', 1});
var h = water.toHTML(); // H<sub>2</sub>O
```

### Utility
Utility is where a few static utility methods are kept. It currently only has one.

#### Initialization
```js
import { Utility } from 'mendeleev'; // ES2015
var Utility = require('mendeleev').Utility; // CommonJS
```

#### `.stringToElementList(string)`
Accepts a string, such as 'H2O', and turns it into an element list, of the form {'H': 2, 'O', 1}. An element list is what you would use to initialize a compound. 
*This currently does not work with parentheses*
```js
var formula = "AlO";
var elementList = Utility.stringToElementList(formula);
var aluminiumMonoxide = new Compound(elementList);
```
