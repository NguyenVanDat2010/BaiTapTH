let myGamePiece;
let myObstacle=[];
let myScore;
let myBackground;
let mySound;

function startGame() {
    myGamePiece=new Component(70,120,'./images/bird1.png',30,30,'image');
    mySound=new soundBird('./sounds/sound2.mp3');
    myScore=new Component(280,40,'white','30px','Consolas','text');
    myBackground=new Component(0,0,'./images/backgound.jpg',480,270,'image');
    //myObstacle = new Component(300, 120, "green", 10, 200);
    myGameArea.start();
}

//Tạo một khung game bằng canvas----------------------------------------------------------------------------------------
let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        //insertBefore Chèn hoặc di chuyển một thành phần vào ngay trước mục tiêu được chọn.
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //khởi tạo số khung hình =0
        this.frameNo=0;
        //setInterval () sẽ tiếp tục gọi hàm cho đến khi gọi ClearInterval () hoặc cửa sổ được đóng lại
        this.interval =setInterval(updateGameArea,20);

        //phương thức kiểm tra nếu một phím được nhấn
        // window.addEventListener('keydown', function (e) {
        //     myGameArea.key = e.keyCode;
        // });
        // window.addEventListener('keyup', function (e) {
        //     myGameArea.key = false;
        // });
    },
    //clearRect () xóa các pixel được chỉ định trong một hình chữ nhật đã cho.
    clear: function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    },
    //Sử dụng ClearInterval () để dừng thời gian (chức năng dừng game)
    stop:function () {
        clearInterval(this.interval);
    }
};

//Kiểm tra số khung hình
function everyInterval(n) {
    if ((myGameArea.frameNo/n)%1==0){
        return true;
    }
    return  false;
}

//Tạo thành phần trò chơi-----------------------------------------------------------------------------------------------
function Component (xPosition,yPosition,color,width,height,type) {
    this.type=type;
    this.color = color;
    ctx = myGameArea.context;
    if (this.type=='image'){
        this.image=new Image();
        this.image.src=this.color;
    }
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    //khởi tạo tốc độ = 0
    this.xSpeed=0;
    this.ySpeed=0;
    //Trọng lực và tăng tốc trọng lực
    this.gravity = 0.05;
    this.gravitySpeed = 0;

    this.width = width;
    this.height = height;

    //vẽ và cập nhật piece
    this.update = function(){
        ctx = myGameArea.context;
        if (this.type=='image'){
            ctx.drawImage(this.image , this.xPosition , this.yPosition , this.width , this.height);
        }else
        if (this.type=='text'){
            ctx.font=this.width+' '+this.height;
            ctx.fillStyle=this.color;
            ctx.fillText(this.text,this.xPosition,this.yPosition)
        }

        else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.xPosition , this.yPosition , this.width , this.height);
        }
    };

    //vị trí và tư thế mới (thay đổi vị trí của thành phần) và thêm trọng lực rơi
    this.newPos=function () {
        this.gravitySpeed+=this.gravity;
        this.xPosition+=this.xSpeed;
        this.yPosition+=this.ySpeed+this.gravitySpeed;
        this.hitBootom();
    };

    //Set chạm đáy sẽ dừng lại.....................
    this.hitBootom=function () {
        let rockBottom = myGameArea.canvas.height-this.height;
        if (this.yPosition>rockBottom){
            this.yPosition=rockBottom;
            this.gravitySpeed=0;
        }
    };

    //kiểm tra sự cố va chạm trả về false
    this.crashWith=function (otherObj) {
        let myLeft=this.xPosition;
        let myRight=this.xPosition+(this.width);
        let myTop=this.yPosition;
        let myBottom=this.yPosition+(this.height);
        let otherLeft=otherObj.xPosition;
        let otherRight=otherObj.xPosition+(otherObj.width);
        let otherTop=otherObj.yPosition;
        let otherBottom=otherObj.yPosition+(otherObj.height);
        let crash = true;
        if ((myBottom < otherTop) ||
            (myTop > otherBottom) ||
            (myRight < otherLeft) ||
            (myLeft > otherRight)) {
            crash = false;
        }
        return crash;
    }
}

//cập nhật khung hinh 50 lần mỗi giây-----------------------------------------------------------------------------------
function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    //gọi tới sự cố, nếu va chạm set dừng game
    for (let i = 0 ; i < myObstacle.length ; i++) {
        if (myGamePiece.crashWith(myObstacle[i])) {
            mySound.play();
            myGameArea.stop();
            alert("Game Over")
            return;
        }
    }
    myGameArea.clear();
    //Hình nền.....................
    myBackground.newPos();
    myBackground.update();
    myGameArea.frameNo+=1;

    //kiểm tra cứ sau 150 khung hình sẽ vẽ random  1 chướng ngại vật
    if (myGameArea.frameNo==1||everyInterval(180)){
        x=myGameArea.canvas.width;
        minHeight=20;
        maxHeight=200;
        //lấy ngẫu nhiên từ 20 đến 180
        height=Math.floor(Math.random()*(maxHeight-minHeight)+minHeight);
        minGap=50;
        maxGap=200;
        //lấy ngẫu nhiên từ 50 đến 80
        gap=Math.floor(Math.random()*(maxGap-minGap)+minGap);
        //lấy x=480, y=độ cao + khoảng trống (vẽ từ trên xuống theo tọa độ)
        myObstacle.push(new Component(x, 0, "orange", 10, height));
        //lấy x=480, y=0(vẽ từ trên xuống theo tọa độ)
        myObstacle.push(new Component(x,height+gap,'orange',10,x-height-gap));
    }
    for (let j=0;j<myObstacle.length;j++){
        myObstacle[j].xPosition-=1;
        myObstacle[j].update();
    }
    //myGamePiece.xPosition+=1;     //hình vuông màu sẽ được vẽ 50 lần mỗi giây
    //myObstacle.xPosition-=1;
    // myGamePiece.xSpeed = 0;
    // myGamePiece.ySpeed = 0;
    // switch (myGameArea.key) {
    //     case 37 :
    //         moveLeft();
    //         break;
    //     case  39 :
    //         moveRight();
    //         break;
    //     case 38 :
    //         moveUp();
    //         break;
    //     case 40 :
    //         moveDown();
    //         break;
    // }
    myScore.text="SCORE: "+myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

//Âm thanh--------------------------------------------------------------------------------------------------------------
function soundBird(src) {
    this.sound=document.createElement('audio');
    this.sound.src=src;
    this.sound.setAttribute('preload','auto');
    this.sound.setAttribute('controls','none');
    this.sound.style.display='none';
    document.body.appendChild(this.sound);
    this.play=function () {
        this.sound.play();
    };
    this.stop=function () {
        this.sound.pause();
    }
}

//Di chuyển bird--------------------------------------------------------------------------------------------------------
// function moveAngry(dir) {
//     myGamePiece.image.src='./images/bird2.png';
//     if (dir=='up'){myGamePiece.ySpeed-=1;}
//     if (dir=='down'){myGamePiece.ySpeed+=1;}
//     if (dir=='left'){myGamePiece.xSpeed-=1;}
//     if (dir=='right'){myGamePiece.xSpeed+=1;}
// }

//Nút button LÊN, XUỐNG, TRÁI, PHẢI--------------------------------------------------------------------------------------
// function moveUp() {
//     myGamePiece.ySpeed-=1;
// }
// function moveDown() {
//     myGamePiece.ySpeed+=1;
// }
// function moveRight() {
//     myGamePiece.xSpeed+=1;
// }
// function moveLeft() {
//     myGamePiece.xSpeed-=1;
// }

//Dừng di chuyển--------------------------------------------------------------------------------------------------------
function stopMove() {
    myGamePiece.image.src='./images/bird1.png';
    myGamePiece.xSpeed=0;
    myGamePiece.ySpeed=0;
}

//chức năng nhấp vào nút và làm cho bird bay lên (thúc dục)
function flyBird(n) {
    myGamePiece.gravity = n;
    // myGamePiece.image.src='./images/bird2.png';
}