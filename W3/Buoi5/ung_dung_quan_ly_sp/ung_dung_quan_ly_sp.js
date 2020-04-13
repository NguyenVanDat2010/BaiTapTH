
//'Sony Xperia','Samsung galaxy s10','Xiaomi note 8','Iphone 11 pro max','Nokia 8','Huawei nova 3i','Oppo f1s'
let arrListProducts=['Sony Xperia','Samsung galaxy s10','Xiaomi note 8'];
let count=arrListProducts.length;
showProducts(arrListProducts);

//Tạo sp----------------------------------------------------------------------------------------------------------------
function createProducts(newProducts) {
    if (newProducts == '') {
        return  false;
    } else {
        for (let i = 0 ; i < arrListProducts.length ; i++) {
            if (newProducts == arrListProducts[i]) {
                return false;
            }
        }
        arrListProducts.push(newProducts);
        return true;
    }
}

//Thêm sp----------------------------------------------------------------------------------------------------------------
function addProducts() {
    let inputNameOfProduct = document.getElementById("addproduct").value;
    if (createProducts(inputNameOfProduct)){
        alert("Thêm sản phẩm "+'"' + arrListProducts[count] +'"'+ " thành công");
        count++;
        document.getElementById("addproduct").value = '';
    }else {
        alert("Bạn chưa nhập tên sản phẩm hoặc tên sản phẩm đã tồn tại");
        document.getElementById("addproduct").focus();
    }
    showProducts();
}

//Sửa sp----------------------------------------------------------------------------------------------------------------
function editProducts(index) {
    let editName=prompt("Nhập tên sản phẩm bạn muốn sửa ", arrListProducts[index]);
    if (editName) {
        arrListProducts[index] = editName;
    }
    showProducts();
}

//Xóa sp----------------------------------------------------------------------------------------------------------------
function deleteProducts(index) {
    let optionDelete=confirm("Bạn có chắc chắn muốn xóa không? ");
    if (optionDelete) {
        arrListProducts.splice(index , 1);
    }
    count--;
    showProducts();
}

//Hien thi sp-----------------------------------------------------------------------------------------------------------
function showProducts() {
    let data = '<table border="1" cellspacing="0">';
    data += '<tr bgcolor="#adff2f" align="center">'+
    '<td width="35px">' + "STT" + '</td>'+
     '<td width="250px">' + "Tên sản phẩm" + '</td>'+
     '<td width="100px">' + "Sửa" + '</td>'+
     '<td width="100px">' + "Xóa" + '</td>'+
     '</tr>';

    for (let j = 0 ; j < arrListProducts.length ; j++) {
        data += '<tr>'+
         '<td>' + (j + 1) + '</td>'+
         '<td>' + arrListProducts[j] + '</td>'+
         '<td>' + "<input type='button' value='Sửa SP' onclick='editProducts("+j+");'>" + '</td>'+
         '<td>' + "<input type='button' value='Xóa SP' onclick='deleteProducts("+j+");'>" + '</td>'+
         '</tr>';
    }
    data += '</table>';
    document.getElementById("result").innerHTML = data;
    document.getElementById("countproducts").innerHTML =count;
}

