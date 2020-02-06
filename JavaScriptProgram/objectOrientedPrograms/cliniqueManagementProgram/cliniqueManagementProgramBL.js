const fs = require('fs');
class Doctor{
    constructor(id,name,specialization){
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }
}
class Patient{
    constructor(id,name,phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
class CliniqueManagment{
    constructor(){
        this.clinequeData = JSON.parse(fs.readFileSync('cliniqueData.json'));
        if(!this.clinequeData.hasOwnProperty("doctores")){
            this.clinequeData = Object.assign({"doctores": []},this.clinequeData);
            if(!this.clinequeData.hasOwnProperty("patients")){
                this.clinequeData = Object.assign({"patients": []},this.clinequeData);
            }
        }
        fs.writeFileSync('cliniqueData.json',JSON.stringify(this.clinequeData));
    }
}
module.exports = {
    CliniqueManagment
}