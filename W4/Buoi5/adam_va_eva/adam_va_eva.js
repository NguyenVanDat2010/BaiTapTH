let Apple = function (weightApple) {
     // this.status=status;
     this.weightApple=weightApple;

     // this.setWeightApple=function (weightApple) {
     //     this.weightApple=weightApple;
     // };

    this.decreaseApple=function () {
        if (this.weightApple>0){
            this.weightApple--;
        }
    };
    this.isEmpty=function () {
        if (this.weightApple>0){
            this.status=true;
        }else {
            this.status=false;
        }
    };
    this.getWeight=function () {
        return this.weightApple;
    };
};

let Human=function (name,gender,weightHuman) {
    this.name=name;
    this.gender=gender;
    this.weightHuman=weightHuman;
    // this.status=status;
    //this.weightApple=weightApple;

    this.checkApple=function (weightApple) {

    };

    this.eat=function () {
        if (this.status){
            this.weightHuman ++;
            this.decreaseApple();
            alert(this.name+" đã ăn một miếng táo.");
        }else {
            alert("Có táo mô mà ăn.")
        }
        console.log(this.weightApple)
    };

    this.say=function () {
        if (this.weightHuman>40){
            alert(this.name+" cười hahaha")
        }
    };

    this.getName=function () {
        return this.name;
    };
    this.setName=function () {
        this.name=name;
    };
    this.getWeight=function () {
        return this.weightHuman;
    };
    this.setWeight=function () {
        this.weightHuman=weightHuman;
    }
};
let apple=new Apple(10);
// apple.setWeightApple(0);

let human= new Human('Tuấn Anh','male',45,apple);
human.say();
human.eat();

document.write(human.getWeight());
document.write(human.weightApple);
