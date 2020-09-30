const GAMEBOARD_WIDTH = 1340;
const GAMEBOARD_HEIGHT = 630;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

const NINJA_WIDTH = 100;
const NINJA_HEIGHT = 47;


const DEFAULT_CAR_X_POSITION = 600;
const DEFAULT_CAR_Y_POSITION = 250;
// const DEFAULT_CAR_ORIENTATION = ORIENTATION_UP;
const DEFAULT_CAR_SPEED = 20;

let Car = function () {
    this.xPosition = DEFAULT_CAR_X_POSITION;
    this.yPosition = DEFAULT_CAR_Y_POSITION;
    this.orientation=ORIENTATION_UP;
    this.speed=DEFAULT_CAR_SPEED;

    this.buildImage = function(){
        this.image = this.orientation+'.png';
        // console.log(this.image);
    };

    this.buildImage();

    this.move=function () {
        switch (this.orientation) {
            case ORIENTATION_UP:
                this.yPosition-=this.speed;
                break;
            case ORIENTATION_DOWN:
                this.yPosition+=this.speed;
                break;
            case ORIENTATION_LEFT:
                this.xPosition-=this.speed;
                break;
            case ORIENTATION_RIGHT:
                this.xPosition+=this.speed;
                break;
        }
        this.buildImage();
    };

    this.turnCar=function (orientation) {
        this.orientation=orientation;
        this.buildImage();
    };

    this.showCar=function (context) {
        let imageCar = new Image();
        let xPosition=this.xPosition;
        let yPosition=this.yPosition;
        imageCar.onload = function () {
            context.drawImage(imageCar,xPosition,yPosition);
            // context.drawImage(imageCar,xPosition,yPosition,NINJA_WIDTH ,NINJA_HEIGHT);
            // console.log(xPosition);
            // console.log(yPosition);
        };
        imageCar.src= './images/' +this.image
    };
};

let GameBoard=function () {
    this.car = new Car();
    this.context = undefined;

    this.begin=function () {
        this.context = document.getElementById('myCanvas').getContext('2d');
        this.car.showCar(this.context);
    };

    this.renderCar=function () {
        this.context.clearRect(0,0,GAMEBOARD_WIDTH,GAMEBOARD_HEIGHT);
        this.car.showCar(this.context);
    };

    this.moveCar = function(event){
        var orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }

        if(orientation){
            if(this.car.orientation !== orientation){
                this.car.orientation = orientation;
            } else {
                this.car.move();
            }
            this.renderCar();
        }
    }
};

let gameBoard=new GameBoard();
gameBoard.begin();
