//Unsolved One Map

const hashMapJs = function(){
   this.list = [];

   return{
         get(key){
           let result = "not found";
           this.list.forEach(pairs=>{
               if(pairs[0] === key)
                    result = pairs[1];
           })
           return result;
       }
       

   }
}();

// Class on CRUD