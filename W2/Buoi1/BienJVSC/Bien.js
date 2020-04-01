let i =10;
let f =20.5;
let b = true;
let s = "Hà Nội"

document.write("i = "+i);
document.write("</br>")
document.write("f = "+ f);
document.write("</br>")
document.write("b = "+b);
document.write("</br>")
document.write("s ="+s);

document.write("</br>")
let width =20;
let height =10;
let area = width*height;
document.write("Diện tích là: "+area)
document.write("</br>")

var x;
var y;
x    = prompt("biến x là");
y   = prompt("biến y là");
if(x>y){
    if(x%y===0){
        alert("x là bội số của y")
    }else {
        alert("x không phải là bội số của y")
    }
}else {
    alert("x không là bội số của y")
}