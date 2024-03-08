let array =[1,2,3]
let firstIndex = (i)=>{
    if(i=== 0){return true}
    else{return false}
}
let filter =(arr, fn)=> {
   let newArray = []
   for(i=0;i<arr.length;i++)
    if(Boolean(fn(i)) === true){
        newArray.push(arr[i])
    }else{
        console.log('not the first element',arr[i])
    }
    console.log(newArray)
    return newArray
}
filter(array,firstIndex)