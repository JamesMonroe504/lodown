'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * Return: There is no return
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * Identity: function that identifies the type the data that is psed in the paramater as an argument.
 * 
 * Parameter: it takes one parameter of any datatype
 * 
 * Returns: the parameters datatype  is in  string
 * 
 */ 
function identity(value) {
    
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: a function that takes in any value or datatypes and tells you what kind of data it is in a string
 * 
 * Param: A value or any datatype so we can check what type of data it is
 * 
 * Returns: It will return what type of data it is in a string. 
 * ex. 14 = "number", null = "null" function = "function"
 * 
 *  
 */ 


function typeOf(value){
   if (Array.isArray(value)) {
           return 'array';
       }
       if (value instanceof Date) {
           return 'date';
       }
       if (typeof value === 'string') {
           return 'string';
       }
       if (value === null) {
           return 'null';
       }
       if (typeof value === 'object') {
           return 'object';
       }
       if (typeof value === "undefined") {
           return 'undefined';
       }
       if (typeof value === 'boolean') {
           return 'boolean';
       }
       if (typeof value === 'function') {
            return 'function';
           
       } if (typeof value === 'number') {
           return 'number';
       }
}
module.exports.typeOF = typeOf;

/**
 * First: it takes number to see if it's the first element in the array
 * 
 * Param: An array that will be check
 * Param: A number or  data that will be checked for in the array
 * 
 * Return: Return value will differ depending of if the array is an array or if it's a number
 * Returns: an empty array, array at the first index, the array given in the param; 
 * Returns: If the number is bigger than the array it will push the number in our empty array and return that
 */
 
 function first(array, number) {
    let newArray = [];
    if (!Array.isArray(array)) {
        return [];
    } else if (isNaN(number) || number === undefined) { // !number
        return array[0];
    } else if (number > array.length){ 
        return array;
    }  else for(var i = 0; i < number; i++) {
        newArray.push(array[i]);
    }
        return newArray;
};
 module.exports.first = first;

 /**
  * Last: Checks the last number in the array and returns it
  * 
  * Param: An array that will be checked.
  * Param: A number that is checked for
  * 
  * Return: Pretty much the same thing as first. But it will all based on the last number in the array
  * 
  */ 
  
  
function last(array, number) {
    let newArray = [];
    if (!Array.isArray(array)) {
        return [];
    } else if (isNaN(number) || number === undefined) { // !number
        return array[array.length - 1];
    } else if (number > array.length){ 
        return array;
    }  else for(var i = array.length - number; i < array.length; i++) {
        newArray.push(array[i]);
    }
        return newArray;
    
};
module.exports.last = last;

/**
 * IndexOf: This function will find the index of the value in the array the first time it appears
 * 
 * Param: An array that will be check 
 * Param: The value tha will be checked to see if it is in the array
 * 
 * Returns: That value indexed position. Else it will return -1 because indexes start off at 0
 * 
 * 
 */
 
function indexOf(array, value) {
    for(var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } 
          if (array[i] !== value) {
              
          }
        }return -1;

};
module.exports.indexOf = indexOf;

/**
 * Contain: A function that checks to see if a value is contained inside an array
 * 
 * Param: An array that will be looped through to see if value is contained
 * Param: Value that we are checking to see if it's in the array
 * 
 * Returns: true if the value is in the array
 * Returns: false if the value is nor in the array
 */
 
function contains(array, value){
     for(var i = 0; i < array.length; i++) {
        if(array[i] === value? true : false) {
         return true;   
        } 
     }
   return false;
};
module.exports.contains = contains;

/**
 * Unique: Checks to see if any values are duplicates in the array and removes them
 * 
 * Param: An array with multiple values that are the same
 * 
 * Return: An updated array with the values that are not the same or duplicates
 * 
 */


 
function unique(array) {
    
    return filter(array, function(element, i, array) {
        return indexOf(array, element) === i
    })   
        // for(var i = 0; i <= array.length; i++) {
    
    }
module.exports.unique = unique;    

    /**
     * Filter function: loops through the array and puts true values inside a new empty array
     * 
     * Param: Array that will be check and looped through that function or action will take place on this array 
     * Param: function or action that will be put on the array
     * 
     * Returns: A new array with all the values that are true that passed the test
     */
     
     
  function filter(array, function1) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        
        if (function1(array[i], i, array)) { 
             newArray.push(array[i]);
        }
        
            }
    return newArray;
}
module.exports.filter = filter;

/**
 * Reject: Runs a test on a array for falsey values and places them in a new Array
 * 
 * Param: An array that will be check for falsey values that the test rejects
 * Param: A function or test on the array that will check for all falsey values
 * 
 * Returns: All falsey values inside a new empty array and return that new array of falsey values
 * 
 * 
 */
 
function reject(array, function1) {
    
    
    return filter(array, function(element, i, array) {
        return !function1(element, i, array);
    });
    
}
module.exports.reject = reject;

/**
 * Partition: Makes a new array of elements with truthy and falsey values
 * 
 * Param: array that the action will take place on
 * Param: The funciton or action that will take place on the array
 * 
 * Returns: A new array of an array of both truthy values that passed and falsey values that passed
 * 
 */ 

function partition(array, function1){
    var newArray = [];
    
    // for(var i = 0; i < array.length; i++) {
        
         newArray.push(filter(array, function(element, i, array){
             return function1(element, i, array);
                    }));     
        newArray.push(reject(array, function(element, i, array){
             return function1(element, i, array);
                    }));
           return newArray;        
};
module.exports.partition = partition;

/**
 * Map: Creates a new array of values based on the function thats being tested on the collection
 *      The function will have three elements so it can map through them. 
 *      The element or the value, the i or the index, and the entire collection itself.
 * 
 * Param: Collection either of array or objects that will be tested on 
 * Param: function or test that will be tested on the collection
 * 
 * 
 * Returns: A new array based on values 
 * 
 * 
 */
 
 function map(collection, function1) {
    var newArray = [];

        each(collection, function(element, i, collection){
            newArray.push(function1(element, i, collection));
        });
        return newArray;
} 
module.exports.map = map;

/**
 * Pluck: An object inside an array
 *        Searches through the object inside the array to see if the property exists
 *        If the key exists then the values will be pushed inside a new array
 * 
 * Param: An array that will be iterated through
 * Param: They prop or key of the object you are searching for
 * 
 * Returns: An array with the same vales inside a new array
 *  
 */
 
 function pluck(array, prop) {
    
  return map(array, function(element, i, array) {
         return element[prop];
})    
};
module.exports.pluck = pluck;

/**
 * Every: Function that will return true if every element is true
 *      The function will have three elements so it can map through them. 
 *      The element or the value, the i or the index, and the entire collection itself.
 * 
 * 
 * Param: Collection to be iterated over
 * Param: function or test to be tested for the values in the collection
 * 
 * Returns: true if all the elements pass the test else it returns false
 *  
 * 
 */ 
 
 
function every(collection, function1) {
 
 var flag = null;
    if (!function1) {
        each(collection, function(i) {
            if (!i) {
                flag = false;
            }
        });
    }
    else {
        each(collection, function(element, i, collection) {
            if(!function1(element, i, collection)) {
                flag = false;
            }
        });
    }
    if (flag === null) {
        return true;
    }
    else {
        return false;
    }
};  
module.exports.every = every;

/**
 * Some: A function that will return true if some of the values are contained in the collection 
 *      The function will have three elements so it can map through them. 
 *      The element or the value, the i or the index, and the entire collection itself.
 * 
 * Param: Collection that will be iterated through
 * Param: function or test that will pass through the collection.
 * 
 * Returns: true if any of the value passes the test
 * 
 * 
 */
 
function some(collection, function1) {
    var flag = null;
    if (function1 === undefined) {
        each(collection, function(i) {
            if (i) {
                flag = true;
            }
        });
    } 
    
    else {
        if (Array.isArray(collection)) {
            if (reject(collection, function1).length === collection.length) {
                return false;
            } 
            else {
                return true;
            }
        } 
        else {
            for (var key in collection) {
                if (collection[key]) {
                    flag = true;
                }
            }
        }   
    }
    
    if (flag === true) {
        return true;
    }
    else {
        return false;
    }    
};
module.exports.some = some;

/**
 * Reduce: A function that runs test on every element  that has passed the test 
 * and accumlates value from the previous result so you can carry it over or manipulate it
 * Without a seed the previous value will start at the first index element in the array
 * With a seed (which should always be the same datatype as the value you're returning) it will be the first indexed value
 * 
 * 
 * Param: An array or object that will be looped through
 * Param: an action or function that will be tested on every element in the array
 * Param: The Start value or Seed (which is optional)
 * 
 * Return: it will return the dataype of whatever the initial start value is, or the seed if you give it a seed.
 * 
 * 
 */
 
function reduce(array, action, startValue) {
    // input: array, action, startValue
    // output: depends on case
    // edgeCase: create conditions based on startvalue
    // Constraint:
    var previousResult = startValue;
    var i = 0;
    if (startValue === undefined) {
        previousResult = array[0];
        i = 1;
    }
    for (; i < array.length; i++) {
        previousResult = action(previousResult, array[i], i, array);
    }
    return previousResult;
};
module.exports.reduce = reduce;

/**
 * Extend: Takes multiple objects and combines them into a new object
 *          It will take the first object and replace the new object with that value for that key 
 *          If the key does not exist then it will be added to the object
 *          It will not make a new object just update the info from the first one
 * 
 * Param: multiple objects
 * 
 * Returns: the Updated first object
 * 
 */
 
 function extend(copyTo) {
    var copyFromObjects = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < copyFromObjects.length; i++) {
        var copyFrom = copyFromObjects[i];
        for (var key in copyFrom) {
            copyTo[key] = copyFrom[key];
        }
    }
    return copyTo;
};
module.exports.extend = extend;

