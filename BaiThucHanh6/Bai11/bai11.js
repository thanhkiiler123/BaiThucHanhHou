function checkdulieu() {
    name = document.getElementById("ipName").value;
    name_loi = document.getElementById("name_loi");
    if (name == "") {
        name_loi.innerHTML = "Không để trống";
        checkloi = false;
    }
    add = document.getElementById("ipAdd").value;
    diachi_loi = document.getElementById("diachi_loi");
    if (add == "") {
        diachi_loi.innerHTML = "Không để trống";
        checkloi = false;
    }
    namsinhDate = new Date(document.getElementById("ipDate").value);
    namsinh_loi = document.getElementById("namsinh_loi");
    preDate = new Date();
    DateSoSanh = Number(preDate.getFullYear()) - Number(namsinhDate.getFullYear());
    checkloi = true;
    if (!document.getElementById("ipDate").value) {
        namsinh_loi.innerHTML = "Vui lòng nhập ngày sinh!";
        checkloi = false;
    }
    else if (DateSoSanh < 18) {
        namsinh_loi.innerHTML = "Chưa đủ tuổi";
        checkloi = false;
    }
    sdt = document.getElementById("ipSDT").value;
    sdt_loi = document.getElementById("sdt_loi");
    if (sdt == "") {
        sdt_loi.innerHTML = "Không để trống";
        checkloi = false;
    } else {
        if (sdt.charAt(0) == "0") {
            sdt_loi.innerHTML = "ok";
        } else {
            sdt_loi.innerHTML = "Số 0 phải ở đầu";
            checkloi = false;
        }
    }
    email = document.getElementById("ipEmail").value;
    email_loi = document.getElementById("email_loi");
    if (email == "") {
        email_loi.innerHTML = "Không để trống";
        checkloi = false;
    } else {
        if (email.indexOf("@gmail.com") >= 0) {
            email_loi.innerHTML = "ok";
        } else {
            email_loi.innerHTML = "Không đúng định dạng";
            checkloi = false;
        }
    }
    return checkloi;
}
function huy() {
    var ipName = document.getElementById("ipName"); ipName.innerHTML = "";
    var ipDate = document.getElementById("ipDate"); ipDate.innerHTML = "";
    var ipAdd = document.getElementById("ipAdd"); ipAdd.innerHTML = "";
    var ipEmail = document.getElementById("ipEmail"); ipEmail.innerHTML = "";
    var ipSDT = document.getElementById("ipSDT"); ipSDT.innerHTML = "";
}