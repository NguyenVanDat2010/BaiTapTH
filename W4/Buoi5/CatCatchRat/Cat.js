let Cat=function (name,weightCat,speedCat) {
    this.name=name;
    this.weightCat=weightCat;
    this.speedCat=speedCat;

    this.soundCat=function () {
        alert("meo meo");
    };
    this.catchRat=function (rat) {
        if (this.speedCat>rat.speedRat){
            alert("Meo "+this.name+" bắt đc chuột "+rat.name)
        }else {
            alert("Meo "+this.name+" ko bắt đc chuột "+rat.name)
        }
    };
    this.eatRat=function (rat) {
        if(!rat.status){
            this.weightCat+=rat.weightRat;
            alert("chuột "+rat.name+' đã bị ăn.')
        }
    }
};