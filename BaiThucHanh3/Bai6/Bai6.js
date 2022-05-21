function run(){
    var dob = document.getElementById("txtNgaysinh").value;
    if(dob == ""){
        alert("Bạn hãy nhập ngày sinh!");
        document.getElementById("txtNgaysinh").focus();
    }
    else{
        var afterSplit = dob.split("-");
        var mm=Number(afterSplit[1]),dd=Number(afterSplit[2]);
        var k='';
        switch(mm){
            case 1:
                if (dd<20) k='Ma Kết';
                else k='Bảo Bình';
                break;
            case 2:
                if (dd<19)  k='Bảo Bình';
                else k='Song Ngư';
                break;
            case 3:
                if (dd<20)  k='Song Ngư';
                else k='Bạch Dương';
                break;
            case 4:
                if (dd<21)  k='Bạch Dương';
                else k='Kim Ngưu';
                break;
            case 5:
                if (dd<21)  k='Kim Ngưu';
                else k='Song Tử';
                break;
            case 6:
                if (dd<22)  k='Song Tử';
                else k='Cự Giải';
                break;
            case 7:
                if (dd<23)  k='Cự Giải';
                else k='Sư Tử';
                break;
            case 8:
                if (dd<23)  k='Sư Tử';
                else k="Xử Nữ";
                break;
            case 9:
                if (dd<23)  k='Xử Nữ';
                else k='Thiên Bình';
                break;
            case 10:
                if (dd<24)  k='Thiên Bình';
                else k='Bọ Cạp';
                break;
            case 11:
                if (dd<23)  k='Bọ Cạp';
                else k='Nhân Mã';
                break;
            case 12:
                if (dd<22)  k='Nhân Mã';
                else k='Ma Kết';
                break;
        }
        document.getElementById("txtCung").value=k;
    }
}
function cancel(){
    document.getElementById("txtNgaysinh").value="";
    document.getElementById("txtCung").value="";
}