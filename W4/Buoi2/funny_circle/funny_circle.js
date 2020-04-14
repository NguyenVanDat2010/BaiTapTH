let Circle= function (x,y,radius) {
    this.x=x;
    this.y=y;
    this.radius=radius;
};

function getRandomHex() {
    return Math.floor(Math.random()*255);
}

function getRandomColor() {
    let red=getRandomHex();
    let green=getRandomHex();
    let blue=getRandomHex();
    return "rgb("+red+","+green+","+blue+")";
}

function drawCircle() {
    let context=document.getElementById("myCanvas").getContext("2d");

    let radius=Math.floor(Math.random()*80);    //lấy bán kính ngẫu nhiên
    //lấy tọa độ ngẫu nhiên
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let circle=new Circle(x,y,radius);
    //lấy màu ngẫu nhiên
    let color=getRandomColor();

    context.beginPath();
    context.fillStyle=color;
    context.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    context.fill();                 //Đổ màu

    // context.strokeStyle='red';   //Màu viền
    // context.lineWidth=15;        //Độ rộng viền
    // context.stroke();            //Vẽ
}

function createMultipleCircle() {
    for (let i=0;i<30;i++){
        drawCircle();
        noHover();
    }
}
createMultipleCircle();

// function noHover(x,y) {
//      x=Math.round(Math.random()*window.innerWidth);
//      y=Math.round(Math.random()*window.innerHeight);
//     document.getElementById("myCanvas").style.left=x+'px';
//     document.getElementById("myCanvas").style.top=y+'px';
// }

// drawCircle();
// drawCircle();