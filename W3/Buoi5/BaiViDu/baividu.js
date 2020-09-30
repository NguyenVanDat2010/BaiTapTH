function TongAB(a,b) {
    let kq=a+b;
    return kq;
}

let ac=TongAB(6,2);
document.write('Tổng a + b = '+ac+'<br><br>');

//---------------------------------------------------------------------------------------------------------------------------

function square(number) {
    let kq = number*number;
    return kq;
}

function binhphuong() {
    let num= document.getElementById("txtinput").value;
    let result=square(num);
    document.getElementById("result").innerHTML=result;
}

//---------------------------------------------------------------------------------------------------------------------------

//Arguments chứa các đối số đã truyền vào hàm, giúp bạn biết số lượng đối số được truyền vào.
function myFunction() {
    let firstAgrm= arguments[0];
    let lastAgrm= arguments[1];
    alert(firstAgrm);
    alert(lastAgrm);
}
//Khi được gọi, hàm nhận vào một đối tượng (hoạt động như một mảng) có tên là arguments.
myFunction("hello","world");

//---------------------------------------------------------------------------------------------------------------------------
let aNewVariable = "is global.";  //biến toàn cục
function doSomething(incomingBits) {
    alert("Global variable within the function: " + aNewVariable);
    alert("Local variable within the function: " + incomingBits);
}

doSomething("is a local variable"); //gọi hàm
alert("Global var outside the function: " + aNewVariable); //aNewVariable là biến toàn cục nên ở đây ok
alert("Local var outside the function: " + incomingBits);  //incomingBits là biến cục bộ nên ở đây bị lỗi không xử lý đc


