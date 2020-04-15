let Mobile=function (mode,battery,draftMessage,sentMassage,inbox,phoneNumber) {
    this.battery=battery;
    this.draftMessage=draftMessage;
    this.sentMassage=sentMassage;
    this.inbox=inbox;
    this.phoneNumber=phoneNumber;
    this.mode=mode;

    //Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
    this.changeMode=function () {
        if (this.battery>0&&!this.mode){
            this.mode=true;
        }else {
            this.mode=false;
        }
    };
    //Có chức năng xạc pin điện thoại.
    this.chargeBattery=function () {
        this.battery=100;
    };
    //Có chức năng soạn tin nhắn.
    this.draftMess=function (newMess) {
        if (this.mode){
            this.draftMessage=newMess;
            this.battery--;
        }else {
            this.chargeBattery();//dang chua hoat dong
        }
    };
    //Có chức năng gửi tin nhắn tới một chiếc điện thoại khác.
    this.sendMess=function (phone) {
        if(this.mode){
            //thêm thư nháp vào thư đã gửi
            this.sentMassage.push(this.draftMessage);
            //thêm thư nháp vào inbox
            this.inbox.push(this.draftMessage);
            //xóa thư nháp
            this.draftMessage='';
            this.battery--;
            phone.battery--;
        }else {
            this.chargeBattery();
        }
    };
    //Có chức năng xem tin trong hộp thư đến.
    this.showInbox=function () {
        if (this.mode){
            this.battery--;
            return this.inbox;
        }else {
            this.chargeBattery();
        }
    };
    //Có chức năng xem tin đã gửi.
    this.showSentMess=function () {
        if (this.mode){
            this.battery--;
            return this.sentMassage;
        }else {
            this.chargeBattery();
        }
    };
};



