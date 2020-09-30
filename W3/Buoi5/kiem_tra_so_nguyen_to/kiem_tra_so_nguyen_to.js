//Hàm kiểm tra số nguyên tố
function checkNumber(n) {
    let check = true;
    if (n < 2) {
        document.write(n + " ko phải là số nguyên tố");
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                check = false;
                break;
            } else {
                check = true;
            }
        }
        if (check == true) {
            document.write(n + ' là số nguyên tố')
        } else {
            document.write(n + ' không phải là số nguyên tố')
        }
    }
}
//Gọi hàm
let anotherNumber=Number(prompt("Nhập một số nguyên bất kỳ: "));
checkNumber(anotherNumber);

//-----------------------------------------------------------------------------------------------------------------
//tìm tất cả các số nguyên tố nhỏ hơn 10000.
let num = 10000 , kiemtra = true , ketqua = '' , n = 2;
document.write("Các số nguyên tố đầu tiên nhỏ hơn "+num+" là: "+'<br>');
while (n < num) {
    for (let i = 2 ; i <= (n / 2) ; i++) {
        if (n % i == 0) {
            kiemtra = false;
            break;
        } else {
            kiemtra = true;
        }
    }
    if (kiemtra == true) {
        ketqua = n;
        document.write(ketqua + ', ');
    } else {
        ketqua='';
    }
    n++;
}