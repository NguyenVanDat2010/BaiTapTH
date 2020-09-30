//load thông tin sinh viên trước
window.onload=function () {loadFullScreen();};
//tạo lớp student
let student = function (studentName, studentEmail, studentPhone, studentAddress) {
    this.sutdentName = studentName;
    this.studentEmail = studentEmail;
    this.studentPhone = studentPhone;
    this.studentAddress = studentAddress;
    // this.id=id;

    // this.getId = function() {
    //     return this.id;
    // };

    this.getStudentName = function () {
        return this.sutdentName;
    };
    this.getStudentEmail = function () {
        return this.studentEmail;
    };
    this.getStudentPhone = function () {
        return this.studentPhone;
    };
    this.getStudentAddress = function () {
        return this.studentAddress;
    };
    // this.setId=function (idStudent) {
    //     this.id=idStudent;
    // };

    this.setStudentName = function (sutdentName) {
        this.sutdentName = sutdentName;
    };
    this.setStudentEmail = function (sutdentEmail) {
        this.studentEmail = sutdentEmail;
    };
    this.setStudentPhone = function (sutdentPhone) {
        this.studentPhone = sutdentPhone;
    };
    this.setStudentAddress = function (sutdentAddress) {
        this.studentAddress = sutdentAddress;
    };
};
// let count = 0;
let k=0;
let students =[];
    // ['Nguyễn Hải Nam','nguyenhainam@gmail.com','0967853525','Kỳ Anh, Hà Tĩnh'];
//     ['Nguyễn Minh Hiếu','nguyenminhhieu@gmail.com','0969995523','Phong Đình Cảng, Tp.Vinh'],
//     ['Hoàng Thanh Long','hoangthanhlong@gmail.com','0359456596','Trần Duy Hưng, Hà Nội'],
// ];
function addStudent() {
    let studentName = document.getElementById("studentName").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let studentPhone = document.getElementById("studentPhone").value;
    let studentAddress = document.getElementById("studentAddress").value;
    let createPhone=Number(studentPhone);
    //(!createPhone) xét điều kiện nếu trường số điện thoại nhập vào không phải là số thì trả về false
    //xét điều kiện nếu trường tên nhập vào ít hơn 2 ký tự hoặc địa chỉ dưới 5 ký tự thì trả về false
    //ko được nhập giá trị rỗng
    if (studentName == ""||studentEmail ==""||
        studentPhone == ""||studentAddress ==""||
        studentName<2||studentAddress<5||!createPhone){
        alert("Bạn chưa nhập hoặc đã nhập sai thông tin.");
    }else {
        alert("Cập nhật sinh viên thành công.");
       // count++;
        let student1 =  new student(studentName,studentEmail,studentPhone,studentAddress);
        students.push(student1);
        //xóa trống bảng thông tin sinh viên trong truong
        document.getElementById("studentName").value='';
        document.getElementById("studentEmail").value='';
        document.getElementById("studentPhone").value='';
        document.getElementById("studentAddress").value='';
        document.getElementById("studentName").focus(); // chỏ chuột vào trường nhập thông tin
    }
    loadFullScreen(students);
}

//Hiển thị ra sinh viên-------------------------------------------------------------------------------------------------
function loadFullScreen() {
    let row = "";
    row = "";
    row+='<table >'+'<tr>' +
        '<th>STT</th>'+
        // '<th>Ảnh đại diện</th>'+
        '<th>Họ và tên</th>'+
        '<th>Email</th>'+
        '<th>Số điện thoại</th>'+
        '<th>Địa chỉ</th>'+
        '<th>Sửa TT</th>'+
        '<th>Xóa TT</th>'+
        '</tr>';
    for (let i = 0;i <students.length;i++){
        row +="<tr><td>"+(i+1)+
            // "</td><td>" +'<input type="file" onchange = "changeHandler(event)"><br>\n' +
            // '<img id="myimage" src="">'+
            "</td><td>" +students[i].getStudentName()+
            "</td><td>" +students[i].getStudentEmail() +
            "</td><td>" +students[i].getStudentPhone() +
            "</td><td>" +students[i].getStudentAddress() +
            "</td><td>" +'<input type="button" value="Edit" onclick="editStudent('+i+')">'+
            "</td><td>" +'<input type="button" value="Delete" onclick="deleteStudent('+i+')">'+
            "</td></tr>";
    }
    row+='</table>';
    document.getElementById("main-body").innerHTML = row;
}

//Sửa thông tin sinh viên-----------------------------------------------------------------------------------------------
function editStudent(index) {
    k = index;
    //Bật tắt nút BUTTON
    document.getElementById('btnAdd').disabled=true;
    document.getElementById('btnEdit').disabled=false;

    //lấy giá trị từ mảng sinh viên tại vị trí index đưa lên trường nhập input text
    document.students.name.value=students[index].getStudentName();
    document.students.email.value =students[index].getStudentEmail();
    document.students.phone.value = students[index].getStudentPhone();
    document.students.address.value = students[index].getStudentAddress();
}

//Xóa thông tin sinh viên-----------------------------------------------------------------------------------------------
function deleteStudent(index) {
    let optionDelete=confirm("Bạn có chắc chắn muốn xóa không?");
    //Nếu có (optionDelete trả về true) thì sẽ xóa, ko thì ko xóa
    if (optionDelete){
        students.splice(index,1);
        //xóa trống bảng thông tin sinh viên trong trường nhập
        document.getElementById("studentName").value='';
        document.getElementById("studentEmail").value='';
        document.getElementById("studentPhone").value='';
        document.getElementById("studentAddress").value='';

        //Bật tắt nút BUTTON
        document.getElementById("btnEdit").disabled=true;
        document.getElementById("btnAdd").disabled=false;
    }
    loadFullScreen();
}

//Lưu thông tin sinh viên-----------------------------------------------------------------------------------------------
function saveStudent(index) {
    index = k ;
    //khai báo các biến và gán giá trị nhập vào trường input text cho các biến đó
    let studentName =document.getElementById("studentName").value;
    let studentEmail =document.getElementById("studentEmail").value;
    let studentPhone =document.getElementById("studentPhone").value;
    let studentAddress=document.getElementById("studentAddress").value;
    //(!createPhone) xét điều kiện nếu trường số điện thoại nhập vào không phải là số thì trả về false
    //ko được để giá trị rỗng
    let createPhone=Number(studentPhone);
    if (studentName == ""||studentEmail ==""||studentPhone == ""||studentAddress ==""||!createPhone){
        alert("Bạn chưa nhập hoặc đã nhập sai thông tin");
    }else {
        alert("Sửa thông tin sinh viên thành công");
        students[index].setStudentName(studentName);
        students[index].setStudentEmail(studentEmail);
        students[index].setStudentPhone(studentPhone);
        students[index].setStudentAddress(studentAddress);

        //xóa trống bảng thông tin sinh viên trong trường nhập
        document.getElementById("studentName").value='';
        document.getElementById("studentEmail").value='';
        document.getElementById("studentPhone").value='';
        document.getElementById("studentAddress").value='';
        document.getElementById("studentName").focus(); // chỏ chuột vào trường nhập thông tin

        //Bật tắt nút BUTTON
        document.getElementById('btnAdd').disabled=false;
        document.getElementById('btnEdit').disabled=true;
    }
    loadFullScreen(students);
}

//Reset lại ô nhập------------------------------------------------------------------------------------------------------
function resetStudent() {
    //Bật tắt nút BUTTON
    document.getElementById("btnEdit").disabled=true;
    document.getElementById("btnAdd").disabled=false;

    //Gán giá trị rỗng cho thẻ INPUT
    document.getElementById("studentName").value='';
    document.getElementById("studentEmail").value='';
    document.getElementById("studentPhone").value='';
    document.getElementById("studentAddress").value='';
}

//upload ảnh lên trình duyệt--------------------------------------------------------------------------------------------
// function changeHandler(evt) {
//     evt.stopPropagation();
//     evt.preventDefault();
//
//     // FileList object.
//     var files = evt.target.files;
//     var file = files[0];
//     var fileReader = new FileReader();
//
//     fileReader.onload = function(progressEvent) {
//         var url = fileReader.result;
//         var myImg = document.getElementById("myimage");
//         myImg.src= url;
//     };
//     // Read file asynchronously.
//     fileReader.readAsDataURL(file); // fileReader.result -> URL.
// }