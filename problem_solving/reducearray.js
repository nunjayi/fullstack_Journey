/**
 * 
 */
let reduce = (nums,fn,init)=>{
    if(nums.length === 0){
        return init
    }else{ 
         let result = 0
        for(i=0;i<nums.length;i++){
          
            result = fn(nums[i],result)
            

        
    }
    console.log(result)
    return result
    }
    

}
let nums = []
let sum  = (accum,currVal)=>{
    currVal = accum + currVal
    return currVal
}
reduce(nums,sum,100)