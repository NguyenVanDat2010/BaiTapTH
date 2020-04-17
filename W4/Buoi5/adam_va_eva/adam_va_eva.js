let Apple = function (weightApple) {
     this.weightApple=weightApple;

    this.decreaseApple=function () {
        if (this.weightApple>0){
            this.weightApple=0;
        }
    };
    this.isEmpty=function () {
        if (this.weightApple>0){
            this.weightApple=true;
        }else {
            this.weightApple=false;
        }
    };
    this.getWeight=function () {
        return this.weightApple;
    };
};

let Human=function (name,gender,weightHuman,weightApple) {
    this.name=name;
    this.gender=gender;
    this.weightHuman=weightHuman;
    this.weightApple=weightApple;

    this.checkApple=function () {
        return this.weightApple.isEmpty();
    };

    this.eat=function () {
        if (this.weightApple){
            this.weightHuman += this.weightApple;
            console.log(this.weightHuman);
            alert(this.name+" đã ăn hết táo.")
        }else {
            alert("Không có táo.")
        }
    };

    this.say=function () {
        if (this.weightHuman>0){
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
// apple.setWeightApple(10);

let human= new Human('Tuấn Anh','male',45,apple);
human.say();
human.eat();

document.write(human.getWeight());
