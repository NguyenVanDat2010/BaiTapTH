let myDate= function (day,month,year) {
    this.day=day;
    this.month=month;
    this.year=year;

    //Xây dựng phương thức trả về ngày, tháng, năm
    this.getDay=function () {
        return this.day;
    };
    this.getMonth=function () {
        return this.month;
    };
    this.getYear=function () {
        return this.year;
    };

    //Xây dựng phương thức thiết đặt lại giá trị các thuộc tính day, month, year
    this.setDay=function (day) {
        this.day=day;
    };
    this.setMonth=function (month) {
        this.month=month;
    };
    this.setYear=function (year) {
        this.year=year;
    };

    this.setDate=function (day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;
    };
    this.toString=function () {
        let stringDate=this.day+'/'+this.month+'/'+this.year;
        return alert( stringDate)
    }

};

//Sử dụng lớp vừa tạo. Tạo đối tượng date
let date=new myDate(2,2,2007);

let day=date.getDay();
let month=date.getMonth();
let year=date.getYear();

alert(day+'/'+month+'/'+year);

//Gọi phương thức để thay đổi ngày, tháng, năm của đối tượng date vừa tạo ra
date.setDay(18);
date.setMonth(4);
date.setYear(2019);

day=date.getDay();
month=date.getMonth();
year=date.getYear();

alert(day+'/'+month+'/'+year);

//Cài đặt thêm phương thức setDate() để thiết đặt lại ngày, tháng, năm cho đối tượng MyDate
date.setDate(14,4,2020);
date.toString();

