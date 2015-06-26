# ASTORAGE
A tiny API wrapper for `localStorage` that lets you safely save numbers, arrays, objects and other data types.

## Usage and API
```javascript
// create instance of Astorage
var s = new Astorage();

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
// API: set(key, value)
// key — string
// value — string, number, array, object or anything else
s.set('users', users); 

// get value from localStorage by key.
// API: get(key)
// key — string
s.get('users');
> [{name: 'John Doe', age: 21}, {name: 'Alex Smith', age: 35}]

// empty localStorage
s.clear();

// get localStorage items count
s.length
> 0
```