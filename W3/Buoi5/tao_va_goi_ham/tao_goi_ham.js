function processConfirm(answer) {
    let result ='';
    if (answer){
        result="Excellent. We'll play a nice game of chess.";
    }
    else {
        result = "Maybe later then.";
    }
    return result;
}
//kiểm tra câu trả lời true hay false (yes hay no)
let confirmAnswer = confirm("Shall we play a game?");

let theAnswer=processConfirm(confirmAnswer);
alert(theAnswer);