function inputMeters(meter) {
    document.getElementById("resultfeet").innerHTML=meter*3.279;
}
function inputFeet(feet) {
    document.getElementById("resultmeter").innerHTML=feet*0.305;
}


//---------------------------------------------------------------------------------------------------------------
//Hàm chuyển đổi

function meters(meter) {
    return meter*3.279;
}
function feets(feet) {
    return feet*0.305;
}

//gọi hàm
let numberN=Number(prompt("Nhập số cần chuyển dổi: "));
alert(meters(numberN));
alert(feets(numberN));