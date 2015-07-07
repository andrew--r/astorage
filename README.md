# ASTORAGE
A tiny API wrapper for `localStorage` that lets you safely save numbers, arrays, objects and other data types.

## Usage and API
```javascript
// define some data
var users = [
  {
    name: 'John Doe',
    age: 21
  },
  {
    name: 'Alex Smith',
    age: 35
  }
];

// save data into localStorage.
// API: astorage.set(key, value)
// key — string
// value — string, number, array, object or anything else
astorage.set('users', users); 

// get value from localStorage by key.
// API: astorage.get(key)
// key — string
astorage.get('users');
> [{name: 'John Doe', age: 21}, {name: 'Alex Smith', age: 35}]

// remove item from localStorage
astorage.remove('users');

// or empty localStorage
astorage.clear();

// get localStorage items count
astorage.length
> 0
```