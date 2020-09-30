let Circle=function (radius) {
    this.radius=radius;

    this.getRadius=function () {
        return radius;
    };
    this.getArea=function () {
        return radius*radius*Math.PI;
    };
    //Để vẽ cung tròn - hình tròn, ta dùng lệnh: arc(x,y,r,start,stop)
    this.drawCanvas=function () {
        let canvas=document.getElementById("myCanvas");
        let ctx=canvas.getContext("2d");
        ctx.beginPath();// Khai báo vẽ đường thẳng mới
        ctx.strokeStyle='Green';// Màu của đường viền
        ctx.fillStyle='yellow';//màu muốn đổ (tô)
        ctx.arc(200,100,this.radius,0,2*Math.PI);
        ctx.lineWidth=3;//Độ rộng viền
        ctx.fill();//đổ màu
        ctx.stroke();//vẽ
    }
};

let circle=new Circle(50);
let radius=circle.getRadius();
let area=circle.getArea();
alert('Bán kính '+radius+', diện tích: '+area);

circle.drawCanvas();