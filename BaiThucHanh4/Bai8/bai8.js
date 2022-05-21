var timenow=new Date();

var mang=[
	{
		ten:"Core i3 7100",
		hang: "Intel",
		ngay: new Date(2011,10,20),
		gia: "3450000"
	},

	{
		ten:"Core i5 4430",
		hang: "Intel",
		ngay: new Date(2012,8,21),
		gia: "4530000"
	}
];

function datetoString(date){
	var dd=date.getDate(), mm=date.getMonth()+1;
	dd.toString();
	mm.toString();
	return dd+"/"+mm+"/"+date.getFullYear();
}

function giatoString(gia){
	var x="";
	var k=parseInt(gia); x=k.toLocaleString();
	return x;
}

function add(a1,a2,a3,a4,a5){
	var tr=document.createElement("tr");
	var td1=document.createElement("td");td1.innerText=a1;tr.appendChild(td1);
	var td2=document.createElement("td");td2.innerText=a2;tr.appendChild(td2);
	var td3=document.createElement("td");td3.innerText=a3;tr.appendChild(td3);
	var td4=document.createElement("td");td4.innerText=datetoString(a4);tr.appendChild(td4);
	var td5=document.createElement("td");td5.innerText=giatoString(a5);tr.appendChild(td5);
	document.getElementById('tbody').appendChild(tr);
}

function Them(){
	var h1=document.getElementById("input1").value,
		h2=document.getElementById("input2").value,
		h3=new Date(document.getElementById("input3").value),
		h4=document.getElementById("input4").value; 
	if((h1=="")||(h2=="")||(h3=="")||(h4=="")){
		alert("Bạn chưa điền đủ thông tin");
	}
	
	else{
		if(h4<0){
			alert("Bạn hãy nhập giá trị dương");
			document.getElementById("input4").value="";
			document.getElementById("input4").focus();
		}
		else{
			if(h3.getTime()>timenow.getTime()){
			alert("Nhập sai ngày");
			}	
			else{
				mang.push({ten:h1,hang:h2,ngay:h3,gia:h4});
				var x=mang.length-1;
				add(x+1,mang[x].ten,mang[x].hang,mang[x].ngay,mang[x].gia);
				document.getElementById("input1").value=document.getElementById("input2").value
				=document.getElementById("input3").value=document.getElementById("input4").value="";
			}
		}
	}
	
}

function Huy(){
	document.getElementById("input1").value=document.getElementById("input2").value=
	document.getElementById("input3").value=document.getElementById("input4").value=""; 
}

window.onload=function(){
	add(1,mang[0].ten,mang[0].hang,mang[0].ngay,mang[0].gia);
	add(2,mang[1].ten,mang[1].hang,mang[1].ngay,mang[1].gia);
}