/**
 * algorithmPrograms/customizeMsgBL.
 * @module algorithmPrograms/customizeMsgBL
 */
const readLine = require('readline-sync');
/**
 * @module Person - customize message by given inputs.
 * @requires {string} message.
 */
module.exports = {
    customize: (msg) => {
        let msgArr = msg.split(' ');
        let name = readLine.question('Enter The Name : ');
        let fullName = readLine.question('Enter The Full Name : ');
        let number = readLine.questionInt('Enter The Mobile Number :');
        let date_ob = new Date();
        let date = date_ob.getDate() + "/" + (date_ob.getMonth() + 1) + "/" + date_ob.getFullYear();
        for(let i=0;i<msgArr.length;i++){
            if(msgArr[i].match(/<<name>>/)){
                msgArr[i] = name;
            }else if(msgArr[i].match(/91-xxxxxxxxxx./)){
                msgArr[i] = number;
            }else if(msgArr[i].match(/<<fullname>>/)){
                msgArr[i] = fullName;
            }else if(msgArr[i].match(/^\d{2}[.//]\d{2}[.//]\d{4}.$/)){
                msgArr[i] = date;
            }
        }
        return msgArr.toString().;   
        }
}