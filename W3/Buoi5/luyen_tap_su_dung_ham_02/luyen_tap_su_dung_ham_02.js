//Bai 01:Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function square(valueSquare) {
    return valueSquare*valueSquare;
}

//Bài 02: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function perimeterCircle(radius) {
    return 2*radius*3.14;
}
function acreageCircle(radius) {
    return radius*radius*3.14;
}

//Bài 03: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function factorialNumber(num) {
    let result=num,n=num;
    if (num==0||num==1){
        alert(num+"! = 1");
        return;
    }
    while (num>1) {
        num--;
        result*=num;
    }
    alert(n+"! = "+result);
}

//Bài 04: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function checkNumber(num) {
    let check=false;
    if (num>='0'&&num<='9'||num<'0'){
        check=true;
    }
    document.write(check)
}

//Bài 05:Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
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

//Bài 06: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.
function checkInteger(num) {
    if (num==null||num<=0){
        return false;
    }
    let intNum=Number.isInteger(num);
    if (!intNum){
        return false;
    }
    return true;
}

//Bài 07: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function changeNumber(a,b) {
    let x=a;
    a=b;
    b=x;
    document.write('a: '+a+', b: '+b)
}

//Bài 08: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function arrInt(arr) {
    let firstIndex=0;lastIndex=arr.length-1;
    while (firstIndex<lastIndex) {
            let num = arr[firstIndex];
            arr[firstIndex] = arr[lastIndex];
            arr[lastIndex] = num;
            firstIndex++;
            lastIndex--;
    }
    document.write(arr);
}

//Bai 09: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
function arrInput(characters) {
    let count=0,check=false;
    let arr=['a','b','c','d','e','b','d','b','2','f'];
    for (let i=0;i<arr.length;i++){
        if (characters==arr[i]){
            check=true;
            count++;
        }
    }
    if (check==true){
        document.write("Số lần xuất hiện ký tự "+characters+" là: "+count);
    }else
        document.write("-1");
}

