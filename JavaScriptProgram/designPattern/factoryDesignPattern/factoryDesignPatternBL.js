/**
 * FuctionalPrograms/factoryDesignPattern.
 * @module FunctionalPrograms/factoryDesignPattern
*/
/**
 * @module- Lenovo product.
*/
class Lenovo{
    constructor(){
        this.name = "Lenovo"
    }
}
/**
 * @module- Lenovo HP.
*/
class HP{
    constructor(){
        this.name = "HP"
    }
}
/**
 * @module- Lenovo Asus.
*/
class Asus{
    constructor(){
        this.name = "Asus"
    }
}
/**
 * @module- LaptopFactory for generates products.
*/
class LaptopFactory{
    fectoryMethod(data){
        if(data == 'Lenovo'){
            return new Lenovo();
        }else if(data == 'HP'){ 
            return new HP();
        }else if(data == 'Asus'){
            return new Asus();
        }else{
            return `${data} not available in factory.`;
        }
    }
}
module.exports = {
    LaptopFactory
}
