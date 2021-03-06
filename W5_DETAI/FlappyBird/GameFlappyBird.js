let myGameBird;
let myObstacle=[];
let myScore;
let myBackground;
let mySoundOver;
let mySoundBird;
let myGameOver;
// window.onload = function() {startGame()};

//Tạo hàm startGame gọi trong onload------------------------------------------------------------------------------------
function startGame() {
    myGameBird=new Component(200,120,'./images/bird.png',30,30,'image');
    myGameOver=new Component(75,50,'./images/gameOver.png',450,250,'image');
    myBackground=new Component(0,0,'./images/backgound1.jpg',600,350,'image');
    mySoundOver=new SoundGame('./sounds/soundOver.mp3');
    mySoundBird=new SoundGame('./sounds/flappingBird.mp3');
    myScore=new Component(420,40,'aquamarine','30px','Eras Demi ITC','text');
    myGameArea.start();
}

//Tạo một khung game bằng canvas----------------------------------------------------------------------------------------
let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d");
        //insertBefore Chèn hoặc di chuyển một thành phần vào ngay trước mục tiêu được chọn.
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //khởi tạo số khung hình =0
        this.frameNo=0;
        //setInterval () sẽ tiếp tục gọi hàm cho đến khi gọi ClearInterval () hoặc cửa sổ được đóng lại
        this.interval =setInterval(updateGameArea,15);

        //phương thức kiểm tra nếu một phím được nhấn
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = (myGameBird.gravity = 0.1);
            myGameBird.image.src='./images/bird.png';
        });
    },
    //clearRect xóa hình chữ nhật canvas.
    clear: function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    },
    //Sử dụng ClearInterval () để dừng thời gian (chức năng dừng game)
    stop:function () {
        clearInterval(this.interval);
    }
};

//Kiểm tra số khung hình đủ n lần thì return true (vẽ vật cản )---------------------------------------------------------
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

    //vẽ và cập nhật bird img
    this.update = function(){
        ctx = myGameArea.context;
        if (this.type=='image'){
            ctx.drawImage(this.image , this.xPosition , this.yPosition , this.width , this.height);
        }else
        if (this.type=='text'){
            ctx.font=this.width+' '+this.height;
            ctx.fillStyle=this.color;
            ctx.fillText(this.text,this.xPosition,this.yPosition)
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.xPosition , this.yPosition , this.width , this.height);
        }
    };

    // vị trí và tư thế mới (thay đổi,kiểm soát vị trí của bird) và thêm trọng lực rơi
    this.newPos=function () {
        this.gravitySpeed+=this.gravity;
        this.xPosition+=this.xSpeed;
        this.yPosition+=this.ySpeed+this.gravitySpeed;
        this.hitBootom();
    };

    //Set rơi chạm đáy sẽ dừng lại.....................
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
//Lấy random color------------------------------------------------------------------------------------------------------
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
function getRandomColor() {
    let red=getRandomHex();
    let green=getRandomHex();
    let blue=getRandomHex();
    return "rgb("+red+","+green+","+blue+")";
}

//cập nhật khung hinh 50 lần mỗi giây-----------------------------------------------------------------------------------
function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap,score=-3,maxScore=0;
    let color=getRandomColor();

    //Xét thua nếu rơi chạm đất...........
    let rockBottom = myGameArea.canvas.height-myGameBird.height;
    if (myGameBird.yPosition>rockBottom){
        myGameBird.yPosition=rockBottom;
    }

    //gọi tới sự cố, nếu va chạm set dừng game
    for (let i = 0 ; i < myObstacle.length ; i++) {
        if (myGameBird.crashWith(myObstacle[i])||myGameBird.yPosition==rockBottom) {
            myGameBird.image.src='./images/birdFall.png';
            myGameBird.update();
            mySoundOver.play();
            mySoundBird.stop();
            myGameOver.update();
            myGameArea.stop();
            //alert("Game Over");
            return;
        }
        score+=1/2;
    }
    if (score<0){
        score=0;
    }

    myGameArea.clear();
    //Hình nền.....................
    myBackground.update();
    myGameArea.frameNo+=1;
    
    //kiểm tra cứ sau 180 khung hình sẽ vẽ random 1 chướng ngại vật
    if (myGameArea.frameNo==1||everyInterval(150)){
        x=myGameArea.canvas.width;
        minHeight=20;
        maxHeight=200;
        //lấy ngẫu nhiên từ 20 đến 180
        height=Math.floor(Math.random()*(maxHeight-minHeight)+minHeight);
        minGap=50;
        maxGap=200;
        //lấy khoảng trống ngẫu nhiên từ 50 đến 150
        gap=Math.floor(Math.random()*(maxGap-minGap)+minGap);
        //lấy x=480, y=độ cao + khoảng trống (vẽ từ trên xuống theo tọa độ)
        myObstacle.push(new Component(x, 0, color, 35, height));
        //lấy x=480, y=0(vẽ từ trên xuống theo tọa độ)
        myObstacle.push(new Component(x,height+gap,color,35,x-height-gap));
    }
    for (let j=0;j<myObstacle.length;j++){
        myObstacle[j].xPosition-=1;
        myObstacle[j].update();
    }
    //Gọi keyCode (Space)
    switch (myGameArea.key) {
        case 32 :
            birdFly();
            break;
    }

    myScore.text="SCORE: "+score;
    myScore.update();
    myGameBird.newPos();
    myGameBird.update();
}

//Âm thanh--------------------------------------------------------------------------------------------------------------
function SoundGame(src) {
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

//chức năng nhấp vào nút và làm cho bird bay lên (thúc dục)
function birdFly() {
    myGameBird.gravity = -0.2;
    myGameBird.image.src='./images/birdFly.png';
    mySoundBird.play();
}
//chức năng thả nút và làm cho bird rơi xuống
function birdFall() {
    myGameBird.gravity = 0.1;
    myGameBird.image.src='./images/bird.png';
    mySoundBird.stop();
}

