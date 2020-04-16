function Battery() {
    this.setEnergy=function (energy) {
        this.energy=energy;
    };
    this.getEnergy=function () {
        return this.energy;
    };
    this.decreaseEnergy=function () {
        if (this.energy>0){
            this.energy--;
        }
    }
}

function FlashLamp(status,battery) {
    this.status=status;
    this.battery=battery;

    this.setBattery=function () {
        this.battery=battery;
    };

    this.getBatteryInfo=function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status){
            alert("Lighting");
            this.battery.decreaseEnergy();
        }else {
            alert("Not lighting");
        }
    };
    this.turnOn=function () {
        this.status=true;
        this.battery.decreaseEnergy();
    };
    this.turnOff=function () {
        this.status=false;
    };
}

let battery=new Battery();
battery.setEnergy(10);

let flashLamp=new FlashLamp(true,battery);

document.write("Battery info: "+flashLamp.getBatteryInfo()+'<br>');
flashLamp.light();

document.write("Turn on:"+'<br>');
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info: "+flashLamp.getBatteryInfo()+'<br>');


document.write("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light();
