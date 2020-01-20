
const readLine = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');


try{
    console.log('Naresh Patil');

    let arr = [[][]];
    let ele = 0;
    let row = 4;
    let column = 4;

    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            ele = readLine.questionInt('Enter Integer in  : ');
            arr[i][j] = ele;
            // console.log(i,j);
        }
    }

    // for(let i=0;i<row;i++){
    //     for(let j=0;j<column;j++){
    //         process.stdout.write(arr[i][j]+' ');
    //     }
    //     console.log();
    // }

}catch(err){
    console.log(err);
}