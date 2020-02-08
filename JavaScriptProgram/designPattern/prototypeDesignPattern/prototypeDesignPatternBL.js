/**
 * FuctionalPrograms/prototypeDesignPattern.
 * @module FunctionalPrograms/prototypeDesignPattern
*/
/**
 * @module- Bulb class.
*/
class Bulb {
    constructor(prototype,dgd) {
        console.log('Dog ProtoType.');
    }
}
/**
 * @function - function of Bulb Class using prototype pattern.
*/
Bulb.prototype.getName = () => {
    return 'Bulb getName() function called.';
}
/**
 * @module- Syska class.
*/
class Syska extends Bulb {
    constructor() {
        console.log("i am a labrador");
        super()
    }
}
/**
 * @function - function of Syska Class using prototype pattern.
*/
Syska.prototype.getName = () => {
    return 'Syska getName() function called.';
}
/**
 * @module- Philips class.
*/
class Philips extends Bulb {
    constructor() {
        console.log("i am a pug");
        super()
    }
}
/**
 * @function - function of Philips Class using prototype pattern.
*/
Philips.prototype.getName = () => {
    return 'Philips getName() function called.';
}
module.exports = {
    Syska,Philips
}

