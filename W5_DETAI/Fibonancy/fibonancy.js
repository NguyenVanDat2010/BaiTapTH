//Tìm số fibonancy đầu tiên chia hết cho n nhập vào
// let n = Number(prompt("Nhập số cần cần tìm số fibonancy chia hết đầu tiên: "));
// let f0=0,f1=1,f2=0;
// while (f2>=0){
//     f2=f0+f1;
//     f0=f1;
//     f1=f2;
//     if (f2%n==0){
//         document.write("Số fibonancy đầu tiên chia hết cho "+n+' là: '+f2);
//         break;
//     }
// }

//Kiểm tra một số nhập vào có phải là sô fibonancy hay ko
// let n = Number(prompt("Nhập số cần cần kiểm tra: "));
// let f0=0,f1=1,f2=0;
// while (f2<=n){
//     f2=f0+f1;
//     f0=f1;
//     f1=f2;
//     if (n==0||n==1||f2==n){
//         document.write("Số "+n+" là fibonancy.");
//         break;
//     }else {
//         document.write("Số "+n+" ko phải là fibonancy.");
//         break;
//     }
// }

//Tìm k số fibonancy đầu tiên chia hết cho n nhập vào
// let k=Number(prompt("Nhập số lượng số fibonancy cần tìm: "));
// let n = Number(prompt("Nhập số cần cần tìm"+k+" số fibonancy chia hết đầu tiên: "));
// let count=0;
// let f0=0,f1=1,f2=0;
// document.write(k+" số fibonancy đầu tiên chia hết cho " + n + ' là: ');
// while (f2 >= 0) {
//     f2 = f0 + f1;
//     f0 = f1;
//     f1 = f2;
//     if (f2 % n == 0) {
//         document.write(' ' + f2);
//         count++;
//         if (count == k) {
//             break;
//         }
//     }
// }

//Canvas -------------------------------------------------------------------------------------------------------------
let context=document.getElementById("myCanvas").getContext("2d");
//vẽ đường thẳng
// context.moveTo(0,0);
// context.lineTo(100,200);
// context.stroke();

//vẽ hcn
// context.beginPath();
// context.fillStyle='red';        //nằm trên fillRect
// context.fillRect(30,30,150,70);
// context.strokeStyle='blue';     //nằm trên strokeRect
// context.lineWidth=15;           //nằm trên strokeRect
// context.strokeRect(30,30,150,70);
// context.fill();                 //dùng stroke hoặc fill

//vẽ hình tròn
// context.beginPath();
// context.fillStyle='yellow';      //nằm trên hoặc nằm dưới arc
// context.strokeStyle='Brown';     //nằm trên hoặc nằm dưới arc
// context.lineWidth=5;             //nằm trên hoặc nằm dưới arc
// context.arc(100,100,50,0,2*Math.PI);
// context.stroke();                //dùng stroke để vẽ đường tròn
// context.fill();                  //dùng fill để vẽ hình tròn


//vẽ text
// context.font='50px Arial';
// // context.fillText('LOL',30,50);
// context.strokeText('LOL',30,50);

//Hiệu ứng gradient
// let grd=context.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,'red');
// grd.addColorStop(1,'green');
// context.fillStyle=grd;
// context.fillRect(10,10,150,70);

//Hiệu ứng gradient Hình tròn
let grd=context.createRadialGradient(70,50,5,90,60,100);
grd.addColorStop(0,'red');
grd.addColorStop(1,'white');
context.fillStyle=grd;
// context.fillRect(20,20,150,70);
context.arc(100,100,50,0,2*Math.PI);
context.fill();