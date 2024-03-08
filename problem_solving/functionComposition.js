/**
 * FUNC: compose( [ fns] )
 *      let FUNC: comps( x )
 *      if([fns].length  === 0)
 *        RETURN:
 *          FUNC: comps (x)
 *              return x
 *      else:
 *          RETURN: f1.f2.f3.f4.f5.fn
 *          let func
 *          for(every func){
 *              func(x)
 * }
 * 
 *       return( FUNC : comps  ( x ))
 *    
 */
let compose = function(functions) {
	return function(x) {
       let final = x;
        functions.reverse();
        return functions.reduce((final,fn,index)=>final=fn(final),x);
    }
};

let fnsArray = [x => x + 1, x => x * x, x => 2 * x]
   compose(fnsArray,1)
