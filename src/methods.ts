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
        image: ""
    },
    {
        id: 2, 
        name: "filter()",  
        description: "This method creates a new array with only elements that passes the condition inside the provided function.", 
        image: ""
    },
    {
        id: 3, 
        name: "sort()",  
        description: "This method is used to arrange/sort array’s elements either in ascending or descending order.", 
        image: ""
    },
    {
        id: 4, 
        name: "forEach()", 
        description: "This method helps to loop over array by executing a provided callback function for each element in an array.",  
        image: ""
    },
    {
        id: 5, 
        name: "concat()", 
        description: "This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.",  
        image: ""
    },
    {
        id: 6, 
        name: "every()", 
        description: "This method checks every element in the array that passes the condition, returning true or false as appropriate.",  
        image: ""
    },
    {
        id: 7, 
        name: "some()", 
        description: "This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.",  
        image: ""
    },
    {
        id: 8, 
        name: "includes()", 
        description: "This method checks if an array includes the element that passes the condition, returning true or false as appropriate.",  
        image: ""
    },
    {
        id: 9, 
        name: "join()", 
        description: "This method returns a new string by concatenating all of the array’s elements separated by the specified separator.", 
        image: ""
    },
    {
        id: 10, 
        name: "reduce()", 
        description: "This method applies a function against an accumulator and each element in the array to reduce it to a single value.", 
        image: ""
    },
    {
        id: 11, 
        name: "find()", 
        description: "This method returns the value of the first element in an array that pass the test in a testing function.",  
        image: ""
    },
    {
        id: 12, 
        name: "findIndex()", 
        description: "This method returns the index of the first element in an array that pass the test in a testing function.",  
        image: ""
    },
    {
        id: 13, 
        name: "indexOf()", 
        description: "This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.",  
        image: ""
    },
    {
        id: 14, 
        name: "fill()", 
        description: "This method fills the elements in an array with a static value and returns the modified array.",  
        image: ""
    },
    {
        id: 15, 
        name: "slice()", 
        description: "This method returns a new array with specified start to end elements.",  
        image: ""
    },
    {
        id: 16, 
        name: "reverse()", 
        description: "This method reverses an array in place. Element at last index will be first and element at 0 index will be last.",  
        image: ""
    },
    {
        id: 17, 
        name: "push()", 
        description: "This method adds one or more elements to the end of array and returns the new length of the array.",  
        image: ""
    },
    {
        id: 18, 
        name: "pop()", 
        description: "This method removes the last element from the end of array and returns that element.",  
        image: ""
    },
    {
        id: 19, 
        name: "shift()", 
        description: "This method removes the first element from an array and returns that element.",  
        image: ""
    },
    {
        id: 20, 
        name: "unshift()", 
        description: "This method adds one or more elements to the beginning of an array and returns the new length of the array.",  
        image: ""
    },
]


export default methods