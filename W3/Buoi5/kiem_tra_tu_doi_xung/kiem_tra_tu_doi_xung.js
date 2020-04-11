//Xây dựng chương trình sử dụng đệ quy để kiểm tra một từ có phải là từ đối xứng không.
//Một chuỗi palindrome là một từ được đọc theo thứ tự xuôi, ngược đều giống nhau.
// Ví dụ, rotor và redder là các chuỗi palindrome, nhưng motor thì không phải.

function isPalindrome(palindrome) {
    let firstValue=0,lastValue=palindrome.length-1,check=false;
    while (firstValue<lastValue){
        if (palindrome[firstValue]!=palindrome[lastValue]){
            break;
        }else {
            check=true;
            firstValue++;
            lastValue--;
        }
    }
    if (check==true){
        document.write(palindrome+" là chuỗi đối xứng.")
    }else document.write(palindrome+" là chuỗi không đối xứng.");
}


//Cách 02: Kiểm tra theo hàm for-----------------------------------------------------------------------------------------

// function isPalindrome(palindrome) {
//     let check=true;
//     for (let i=0;i<palindrome.length/2;i++){
//         if (palindrome[i]!=palindrome[palindrome.length-1-i]){
//             check=false;
//         }
//     }
//     if (check==true){
//         document.write(palindrome+" là chuỗi đối xứng.")
//     }else {
//         document.write(palindrome+" là chuỗi không đối xứng.")
//     }
// }