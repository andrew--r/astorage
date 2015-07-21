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

## LICENSE
Released under the MIT license.

```
The MIT License (MIT)

Copyright © 2015 Andrew Romanov, Kiril Osiyuk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```