
//'Sony Xperia','Samsung galaxy s10','Xiaomi note 8','Iphone 11 pro max','Nokia 8','Huawei nova 3i','Oppo f1s'
let arrA=[];
let k=0,check=true,count=0;
function addProducts() {
    let n =document.getElementById("addproduct").value;
    if (n==''){
        alert("Bạn chưa nhập tên sản phẩm");
        //arrA[i].focus();
    }
    for (let i=0;i<arrA.length;i++) {
        if (n == arrA[i]) {
            check=false;
            break;
        }else {
            check=true;
        }
    }
    if (check==true) {
        arrA[k] = n;
        alert("Thêm sản phẩm " + arrA[k] + " thành công");
        k++;count++;
        document.getElementById("addproduct").value = '';

        //Hien thi sp
        let table = '<table border="1" cellspacing="0">';
        table += '<tr bgcolor="#adff2f" align="center">';
        table += '<td width="35px">' + "STT" + '</td>';
        table += '<td width="250px">' + "Tên sản phẩm" + '</td>';
        table += '<td width="100px">' + "Sửa" + '</td>';
        table += '<td width="100px">' + "Xóa" + '</td>';
        table += '</tr>';

        for (let j = 0 ; j < arrA.length ; j++) {
            table += '<tr>';
            table += '<td>' + (j + 1) + '</td>';
            table += '<td>' + arrA[j] + '</td>';
            table += '<td>' + "<input type='button' value='Sửa' onclick='editProducts();'>" + '</td>';
            table += '<td>' + "<input type='button' value='Xóa' onclick='deleteProducts();'>" + '</td>';
            table += '</tr>';

        }
        table += '</table>';
        document.getElementById("result").innerHTML = table;
        document.getElementById("countproducts").innerHTML =count;
    }else {
        alert("Tên sản phẩm đã tồn tại");
    }
}
function editProducts() {

}
function deleteProducts(abc) {
    for (let x = 0 ; x < arrA.length ; x++) {
        if (arrA[abc] == arrA[x]) {
            arrA.splice(x , 1)
        }
    }
}
