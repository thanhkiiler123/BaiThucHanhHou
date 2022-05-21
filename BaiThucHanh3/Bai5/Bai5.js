function run(){
	var chuoi = document.getElementsByName("txtChuoi")[0].value;
	var Danhsach = document.getElementById("ddlDanhsach");
	if(chuoi == ''){
		alert("Bạn hãy nhập chuỗi trước khi thực hiện");
		document.getElementsByName("txtChuoi")[0].focus();
	}
	else{
		Danhsach.innerHTML="";
		var mang = chuoi.split(", ");
		for(var i=0;i<mang.length;i++){
			var Element = document.createElement("option");
			Element.textContent=mang[i];
			Element.value=mang[i];
			Danhsach.appendChild(Element);
		}
	}
}
function note(value){
	alert("Bạn đã chọn mục: "+ value);
}
function cancel(){
	document.getElementsByName("txtChuoi")[0].value = '';
	document.getElementsByID("ddlDanhsach").value = '';
}
