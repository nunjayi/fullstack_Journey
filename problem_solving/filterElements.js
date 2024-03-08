/**
 * we need an array to filter through
 * a function to filter through the array
 * 
 */

let array  =[0,10,20,30]

let filter = (n)=>{
    if(n>10){
        return true
    }else{
        return false
    }
    
}

function filterArray(arr,fn){
    let newArray = []
    for(i=0;i<arr.length;i++){
        if(Boolean(fn(arr[i])) === true){
            newArray.push(arr[i])

        } else{
            console.log(`${arr[i]} is less than ten`)
        }
    }
    console.log(newArray)
    return newArray
}

filterArray(array,filter)
