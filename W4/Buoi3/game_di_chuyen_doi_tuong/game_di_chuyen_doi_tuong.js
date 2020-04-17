function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' + ' height="'+ this.size + '"' + ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 50;

    };

    this.moveLeft=function () {
        this.left -= 50;
        console.log('ok: ' + this.left);
    };

    this.moveUp=function () {
        this.top-=50;
    };

    this.moveDown=function () {
        this.top+=50;
    };
}

var car = new Hero('pikachu.png', 30, 30, 100,);

function start(){
    let a=window.innerWidth - car.size;
    if(car.left < window.innerWidth - car.size){
        car.moveRight();
    }else
    if(car.top < window.innerHeight - car.size){
        car.moveDown();
    }else

    if(car.left >a){
        car.moveLeft();
    }else
    if(car.top >a){
        car.moveUp();
    }
    document.getElementById('game').innerHTML = car.getHeroElement();
    setTimeout(start, 500)
}

start();