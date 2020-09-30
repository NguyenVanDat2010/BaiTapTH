let myGamePiece;

function startGame() {
    var gameArea=new myGameArea();
    gameArea.start();
    myGamePiece=new Component(30,30,'flappybird.png',10,120,'image');
}

//Tạo một khung game bằng canvas
let myGameArea=function () {
    this.canvas=document.createElement("canvas");
    this.start=function () {
        this.canvas.width=480;
        this.canvas.height=270;
        this.context=this.canvas.getContext("2d");
        //insertBefore Chèn hoặc di chuyển một thành phần vào ngay trước mục tiêu được chọn.
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    }
};

//Tạo thành phần trò chơi
function Component (xPosition,yPosition,color,width,height,type) {
    let gameAaarea= new myGameArea();

    this.type=type;
    this.xPosition=xPosition;
    this.yPosition=yPosition;
    this.color=color;
    if (this.type=='image'){
        this.image=new Image();
        this.image.src=this.color;
    }
    this.width=width;
    this.height=height;

    let ctx=gameAaarea.
    console.log(ctx);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xPosition,this.yPosition,this.width,this.height);

    this.update = function(){
        ctx = myGameArea.context;
        if (this.type=='image'){
            ctx.drawImage(this.image , this.xPosition , this.yPosition , this.width , this.height);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.xPosition , this.yPosition , this.width , this.height);
        }
    };

}