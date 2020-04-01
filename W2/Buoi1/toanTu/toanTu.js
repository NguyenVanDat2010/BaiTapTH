//Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
// Sau đó hiển thị điểm trung bình và tổng của những điểm này.
var physical;
var chemistry;
var biology;
physical= prompt("Nhập điểm Vật lý: ");
chemistry = prompt("Nhập điểm Hóa học: ");
biology = prompt("Nhập điểm sinh học: ");
let phy=parseInt(physical);
let che=parseInt(chemistry);
let bio=parseInt(biology);
document.write("Điểm lý: " +phy+", Điểm hóa: " +che+ ", Điểm sinh: "+bio);
document.write("</br>");
let sum = (phy + che + bio);
alert("Tổng điểm của 3 môn lý, hóa, sinh là: "+sum);
// document.write("</br>")
let average = sum/3;
alert("Điểm trung bình cộng là: "+average);
document.write("Tổng điểm là: "+sum+ ", Điểm trung bình cộng là: "+average);
document.write("</br>");
document.write("</br>");

//Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
let degree;
degree = prompt("Nhập độ C: ");
let C = parseInt(degree);
let F = 1.8*C + 32;
document.write("Độ C nhập vào là: "+C);
document.write("</br>");
alert(C+ " độ C đổi sang độ F là: "+F+ ' độ F');
document.write(C+ " độ C đổi sang độ F là: "+F+ ' độ F');
document.write("</br>");
document.write("</br>");

//Bài 3,4: Viết chương trình tính diện tích, chu vi hình tròn
let pi = 3.14159265358;
let radius;
radius = prompt("Nhập bán kính hình tròn: ");
let r= parseInt(radius);
//let rr=math.pow(r,2)
document.write("Bán kính nhập vào là: "+r);
document.write("</br>");
let s=pi*r*r;
let p=pi*2*r
alert("Diện tích hình tròn là: "+s);
alert("Chu vi hình tròn là: "+p);
document.write("Diện tích hình tròn là: "+s);
document.write("</br>");
document.write("Chu vi hình tròn là: "+p);
document.write("</br>");