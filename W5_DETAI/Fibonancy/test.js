function printAtoZ() {
    var arr=[];
    for (let i=97;i<=122;i++){
        // document.write(String.fromCharCode(i)+', ');
        arr.push(String.fromCharCode(i));
    }
    return arr;
}
document.write(printAtoZ());

// function sum(arr) {
//     let tong=0;
//     for (let i=0;i<arr.length;i++){
//         tong+=arr[i];
//     }
//     return tong;
// }
// document.write(sum([1,2,3]));
