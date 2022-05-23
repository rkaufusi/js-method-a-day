

import { DetailedHTMLProps, ImgHTMLAttributes, SVGProps } from 'react'
import concat from './assets/concat_method.png'
import every from "./assets/every method.png"
import filter from "./assets/filter method.png"
import fill from "./assets/fill method.png"
import findIndex from "./assets/findIndex method.png"
import forEach from "./assets/forEach method.png"
import includes from "./assets/includes method.png"
import indexOf from "./assets/indexOf method.png"
import join from "./assets/join method.png"
import map from "./assets/map method.png"
import pop from "./assets/pop method.png"
import push from "./assets/push method.png"
import reduce from "./assets/reduce method.png"
import reverse from "./assets/reverse method.png"
import shift from "./assets/shift method.png"
import slice from "./assets/slice method.png"
import some from "./assets/some method.png"
import sort from "./assets/sort method.png"
import unshift from "./assets/unshift method.png"
import find from "./assets/find method.png"



type methodType = {
    id: number,
    name: string,
    description: string,
    image: string
}

const methods: methodType[] = [
    {
        id: 1, 
        name: "map()", 
        description: "This method creates a new array with the results of calling a provided function on every element in this array.", 
        image: map
    },
    {
        id: 2, 
        name: "filter()",  
        description: "This method creates a new array with only elements that passes the condition inside the provided function.", 
        image: filter
    },
    {
        id: 3, 
        name: "sort()",  
        description: "This method is used to arrange/sort array’s elements either in ascending or descending order.", 
        image: sort
    },
    {
        id: 4, 
        name: "forEach()", 
        description: "This method helps to loop over array by executing a provided callback function for each element in an array.",  
        image: forEach
    },
    {
        id: 5, 
        name: "concat()", 
        description: "This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.",  
        image: concat
    },
    {
        id: 6, 
        name: "every()", 
        description: "This method checks every element in the array that passes the condition, returning true or false as appropriate.",  
        image: every
    },
    {
        id: 7, 
        name: "some()", 
        description: "This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.",  
        image: some
    },
    {
        id: 8, 
        name: "includes()", 
        description: "This method checks if an array includes the element that passes the condition, returning true or false as appropriate.",  
        image: includes
    },
    {
        id: 9, 
        name: "join()", 
        description: "This method returns a new string by concatenating all of the array’s elements separated by the specified separator.", 
        image: join
    },
    {
        id: 10, 
        name: "reduce()", 
        description: "This method applies a function against an accumulator and each element in the array to reduce it to a single value.", 
        image: reduce
    },
    {
        id: 11, 
        name: "find()", 
        description: "This method returns the value of the first element in an array that pass the test in a testing function.",  
        image: find
    },
    {
        id: 12, 
        name: "findIndex()", 
        description: "This method returns the index of the first element in an array that pass the test in a testing function.",  
        image: findIndex
    },
    {
        id: 13, 
        name: "indexOf()", 
        description: "This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.",  
        image: indexOf
    },
    {
        id: 14, 
        name: "fill()", 
        description: "This method fills the elements in an array with a static value and returns the modified array.",  
        image: fill
    },
    {
        id: 15, 
        name: "slice()", 
        description: "This method returns a new array with specified start to end elements.",  
        image: slice
    },
    {
        id: 16, 
        name: "reverse()", 
        description: "This method reverses an array in place. Element at last index will be first and element at 0 index will be last.",  
        image: reverse
    },
    {
        id: 17, 
        name: "push()", 
        description: "This method adds one or more elements to the end of array and returns the new length of the array.",  
        image: push
    },
    {
        id: 18, 
        name: "pop()", 
        description: "This method removes the last element from the end of array and returns that element.",  
        image: pop
    },
    {
        id: 19, 
        name: "shift()", 
        description: "This method removes the first element from an array and returns that element.",  
        image: shift
    },
    {
        id: 20, 
        name: "unshift()", 
        description: "This method adds one or more elements to the beginning of an array and returns the new length of the array.",  
        image: unshift
    },
]


export default methods