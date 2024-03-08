const { arrayBuffer } = require("stream/consumers")

/**
 *  array 
 *  mapping function (arr,i)
 *  return: array
 *  
 */
let arr = [1,2,3]




let mapFUNC = ()=>{
    let fn = (n,i)=>{
    return n+i
}
const newArray = []
for(i=0;i<arr.length;i++){
    newArray[i]= fn(arr[i],i)
}
console.log(newArray)
return newArray
}
mapFUNC()