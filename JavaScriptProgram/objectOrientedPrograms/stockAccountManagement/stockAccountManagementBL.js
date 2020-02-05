/**
 * objectOrientedPrograms/stockAccountManagementBL.
 * @module objectOrientedPrograms/stockAccountManagementBL.
 */
const readLine = require('readline-sync');
const fs = require('fs');
/**
 * @module Stock - this stock class has the following property - stock name, number of stock and stock price
 */
class Stock{
    constructor(names,numbersOfStock,price){
        this.names = names;
        this.numbersOfStock = numbersOfStock;
        this.price = price;
    }
}
/**
 * @module StockManagement - this StockManagement class will work on the properties of stock class and have methods like
 *                           insertStock(),stockReport() 
 */
class StockManager{
    constructor(){
        this.stockData = {stock:[]};
        let JSONData = fs.readFileSync('stockData.json');
        let JSONstockData = JSON.parse(JSONData);
        if(Array.isArray(JSONstockData.stock)){
            this.stockData.stock = JSONstockData.stock;
        }
    }
     /**
     * @module insertStock() - this will add the stock object in the stockAcc.json file
     */
    insertStock(){
        let name = readLine.question('Enter name of stock : ');
        let numberOfStock = readLine.questionInt('Enter number of stock : ');
        let price = readLine.questionInt('Enter the price : ');
        let stock = new Stock(name,numberOfStock,price);
        this.stockData.stock.push(JSON.parse(JSON.stringify(stock)));
        fs.writeFileSync('stockData.json',JSON.stringify(this.stockData));
    }
    /**
    * @module stockReport - calculate the stock value based on stock number. 
    */
    stockReport(){
        for(let i=0;i<this.stockData.stock.length;i++){
            const totalPrice = this.stockData.stock[i].price * this.stockData.stock[i].numbersOfStock;
            console.log(`Total Price of ${this.stockData.stock[i].name} is ${totalPrice}`);
        }
    }
}
module.exports = {
    Stock,StockManager
}