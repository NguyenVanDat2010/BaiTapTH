
//'Sony Xperia','Samsung galaxy s10','Xiaomi note 8','Iphone 11 pro max','Nokia 8','Huawei nova 3i','Oppo f1s'
let arrA=[];
let k=0,check=true,count=0;

//Tạo sp----------------------------------------------------------------------------------------------------------------
function createProducts(newProducts) {
    if (newProducts == '') {
        return  false;
    } else {
        for (let i = 0 ; i < arrA.length ; i++) {
            if (newProducts == arrA[i]) {
                return false;
            }
        }
        arrA.push(newProducts);
        return true;
    }
}

//Thêm sp----------------------------------------------------------------------------------------------------------------
function addProducts() {
    let inputNameOfProduct = document.getElementById("addproduct").value;
    if (createProducts(inputNameOfProduct)){
        alert("Thêm sản phẩm " + arrA[count] + " thành công");
        count++;
        document.getElementById("addproduct").value = '';
    }else {
        alert("Bạn chưa nhập tên sản phẩm hoặc tên sản phẩm đã tồn tại");
        document.getElementById("addproduct").focus();
    }
    showProducts();
}

//Sửa sp----------------------------------------------------------------------------------------------------------------
function editProducts() {

}

//Xóa sp----------------------------------------------------------------------------------------------------------------
function deleteProducts(index) {
    for (let i=0;i<arrA.length;i++) {
        if (index == i) {
            arrA.splice(i , 1);
            break;
        }
    }
    //count=arrA.length;
    showProducts();
}

//Hien thi sp-----------------------------------------------------------------------------------------------------------
function showProducts() {
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
        table += '<td>' + "<input type='button' value='Xóa' onclick='deleteProducts(j);'>" + '</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById("result").innerHTML = table;
    document.getElementById("countproducts").innerHTML =count;
}



