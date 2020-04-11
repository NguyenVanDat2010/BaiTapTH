// //Bai 01:
// function square(valueSquare) {
//     return valueSquare*valueSquare;
// }
//
// //Bài 02:
// function perimeterCircle(radius) {
//     return 2*radius*3.14;
// }
// function acreageCircle(radius) {
//     return radius*radius*3.14;
// }
//Bài 03: 
// function factorialNumber(num) {
//     let result=num,n=num;
//     if (num==0||num==1){
//         alert(num+"! = 1");
//         return;
//     }
//     while (num>1) {
//         num--;
//         result*=num;
//     }
//     alert(n+"! = "+result);
// }
//Bài 04:
// function checkNumber(num) {
//     let check=false;
//     if (num>='0'&&num<='9'){
//         check=true;
//     }
//     document.write(check)
// }

//Bài 05:
function minNumber(a,b,c) {
    let min;
    if (a<b&&a<c){
        min=a;
    }else if (b<c){
        min=b;
    }else {
        min=c;
    }
    document.write('Số nhỏ nhất: '+min);
}
