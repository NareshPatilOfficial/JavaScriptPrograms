/**
 * designPattern/observerPattern.
 * @module designPattern/observerPattern
*/
/**
     * @module-it a subject which is use to store observers.
*/
function Subject() {
    this.observer = [];
}
/**
     * @module - its a prototype of subject which contain main functionlities.
*/
Subject.prototype = {
    subscribe: function (obj) {
        this.observer.push(obj);
    },
    unsubscribe: function (obj) {
        this.observer = this.observer.filter(fn => {
            if (fn != obj) return fn;
        })
    },
    observerArr: function(){
        console.log(this.observer);
    },
    fire: function () {
        this.observer.forEach(obj => {
            obj.call();
        });
    }
}
/**
    @module-it a modules of objervers with is observs to subjects.
*/
function Observer1() {
    console.log(`hey this is observer1`);
}
function Observer2() {
    console.log(`hey this is observer2`);
}
function Observer3() {
    console.log(`hey this is observer3`);
}
function Observer4() {
    console.log(`hey this is observer4`);
}
function Observer5() {
    console.log(`hey this is observer5`);
}
function Observer6() {
    console.log(`hey this is observer6`);
}
module.exports = {
    Subject, Observer1, Observer2, Observer3, Observer4, Observer5, Observer6
}