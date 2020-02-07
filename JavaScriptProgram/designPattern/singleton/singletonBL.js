/**
 * FuctionalPrograms/singleton.
 * @module FunctionalPrograms/singleton
*/
let object = null;
class SingltonPat{
    constructor(name){
        this.name = name;
        this.id = 10;
        object = this;
    }
    /**
     * It will return object single object.
     * @return {object} return object.
    */
   
    getObject(){
       if(object == null){
            object = new SingltonPat('Object1');
       }else{
            return object;
       }
    }
}
module.exports = {
    SingltonPat 
}