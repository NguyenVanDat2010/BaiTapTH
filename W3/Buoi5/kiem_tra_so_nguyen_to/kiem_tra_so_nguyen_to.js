function checkNumber(n) {
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
    }else {
        document.write(n + ' ko phai là số nguyên tố')
    }
}

checkNumber(12);
