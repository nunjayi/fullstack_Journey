async function wait(millis){
    await new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
      
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve(console.log('hello')), millis);
      });
}

wait(30000).then((millis)=>{
    console.log('it is now past',millis)
})

async function myFn(x){
    
     
    let foo = true
    let helloWorld =()=>{ console.log("helloworld")}
    await new Promise(function(resolve,reject){
        setTimeout(()=>{if(foo){
            resolve(helloWorld())
        }else{
            reject((error)=>{
                throw new Error
            })
        }},x)
    })
   
}
let time = ()=>{
    
     
 }
myFn(30000)
 time()
