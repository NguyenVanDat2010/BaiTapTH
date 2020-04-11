//Bài 01:Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi  "Xin chao". Gọi hàm từ trong phần <body> của trang web.
function alertMessage() {
    alert("Xin chào!!");
}
//----------------------------------------------------------------------------------------------------------------------
//Bài 02:Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm.
// Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.
function inputNumber(num) {
    return num+1;
}
//----------------------------------------------------------------------------------------------------------------------
//Bài 03:Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại
// thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
function doubleNumbers(a,b) {
    if (a>b){
        alert("Số "+a+' lớn hơn '+b);
    }else{
        let kq=a+b;
        alert(kq)
        return kq;
    }
}
//----------------------------------------------------------------------------------------------------------------------
//Bai 04:Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có thể nhìn thấy giá trị
// của biến result trước và sau lời gọi hàm.
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result);
result = addNumbers();
alert(result);

//----------------------------------------------------------------------------------------------------------------------
//Bài 05:
let sevenStar = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
let sevenConstellation = ['UrsaMinor','Tarurus','Cygnus','Lyra','Aquila','UrsaMajor','Leo'];

function inputStarOutputConstellation(star) {
    let valueStar=false,index=-1;
    for (let i=0;i<sevenStar.length;i++){
        if(star==sevenStar[i]){
            valueStar=true;
            index=i;
            break;
        }
    }
    if(valueStar==true){
        alert('Tên chòm sao tương ứng: '+sevenConstellation[index])
    }else {
        alert("Không có chòm sao tương ứng ngôi sao")
    }
}
