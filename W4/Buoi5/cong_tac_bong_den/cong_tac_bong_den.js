function ElectricLamp(status) {
    this.status=status;

    this.turnOff=function () {
        this.status=false;
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.lamp=!this.lamp;
}

function SwitchButton(status,lamp) {
    this.status=status;
    this.lamp=lamp;

    this.connectToLamp=function () {
        if (this.status){
            this.lamp=lamp;

        }
    };
    this.switchOff=function () {
        if (this.status){
            this.status=false;
            alert("Đã tắt bóng đèn "+this.lamp)
        }
    };
    this.switchOn=function () {
        if (!this.status){
            this.status=true;
            alert("Đã bật bóng đèn "+this.lamp)
        }
    };
}

let electricLamp=new ElectricLamp(true);

let switchButton=new SwitchButton(electricLamp,'Lamp');

for (let i =0;i<5;i++){
    switchButton.switchOff();
    document.write(switchButton.status+' , ');
    switchButton.switchOn();
    document.write(switchButton.status+' , ');
}


