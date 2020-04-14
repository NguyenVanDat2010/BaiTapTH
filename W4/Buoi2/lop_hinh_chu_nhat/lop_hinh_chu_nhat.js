let Rectangle=function (width,height) {
    this.width=width;
    this.height=height;

    this.getArea=function () {
        return this.width*this.height;
    };
    this.getPremeter=function () {
        return (this.width+this.height)*2;
    };
    this.getCanvas=function () {
        let context=document.getElementById("myCanvas").getContext("2d");
        context.beginPath();
        context.strokeStyle='red';
        context.strokeRect(0,0,this.width,this.height);
        // context.fillStyle='blue';
        // context.fillRect(0,0,this.width,this.height);
        context.stroke();
    };
    this.setWidthAndHeight=function (width,height) {
        this.width=width;
        this.heght=height;
    };
};

let hcn=new Rectangle(20,10);
alert("Diện tích hcn là: "+hcn.getArea()+", Chu vi: "+hcn.getPremeter());

hcn.setWidthAndHeight(30,60);
alert("Diện tích hcn là: "+hcn.getArea()+", Chu vi: "+hcn.getPremeter());

hcn.getCanvas();