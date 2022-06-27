it is persistent local storage. I can end the live server and bring it back up and it persists.


video64
refactoring makes the code easier to read. Just like building code into smaller objectives, it helps organize my thoughts and focus on each item, one by one.



1. As long as the code is short with a return value, calls another function, or within reason(?), it can become a short hand arrow function. Can also be used in an object, but property must be structured as a method when writing function. ( an ex: age(num) => num + 1)
2. an arrow function requires braces if multiline



## Notes OOP
- before you have to define each person every single time
- after you use a lot of less code and you do not have to redefine everything for each new person
- make 2 new calls to each person, and now you have 2 new instances for 2 different people
- each 'new' person comes with the same set of properties but with different values
- create a seperate box called person prototype that defines what all people should look like, setting up methods available for each person
    - allows for many different methods that are accessed by each new person



## Notes OOP Video 91
- adding 'this' to an arrow function will call back to the previous functions 'this'. When you reuse 'this' in a regular nested function, it cancels out the 'this' be called in the parent function leaving it undefined.

## Notes OOP Video 93
- prototype property for internal use only, not visible to you.
- all instances have a prototypal property
- automatically set to Person.prototype
- sees if there is a property that matches up with first name
- if it doesn't find one, looks to see if a prototype setup, that is how it's able to access getBio() for example
- follows the prototype chain, if it doesn't exist.. it's undefined


## Notes OOP Video 94
- hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property instead of inheriting it
- it will not be available just like any other prototpe method where reimplemented or when objects created using Object.create(null).
- any object.prototype or method can be redefined, though not recommended.

## Notes OOP Video 95
- objects arent the only type taking advantage of prototypal inheritance all the other types as well
- this is why arrays have access to filter method
- also why strings have access to methods like include
- Array.prototype actually has a prototype and it's not null -- it's nested down one step further as null, so array.prototype containts object.prototype which translates to null
- when accessing property on string, it converts string to object, primitives have object wrappers
