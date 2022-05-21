var mang=['Intel','Intel1','Intel2'];
		function ddlDanhsachhangsx(mang){
			for (var i = 0; i <mang.length; i++) {
				var k=document.createTextNode(mang[i]);
				var h=document.createElement("option");
				h.appendChild(k);
				document.getElementById('select').appendChild(h);
			}
		}
        function Them(){
			if (document.getElementById("add").innerText=="Thêm") {
				document.getElementById("hidden").style.display="block";
				document.getElementById("add").innerText="Lưu";
                
			}
			else{
				Luu();
			}
		}
		function Luu(){
			var k=document.getElementById("input1").value;
			
			if(k==""){
				alert("Bạn phải nhập vào dòng Hãng");
				document.getElementById("input1").focus();
			}
			else{
				var m=0;
				for(var i=0;i<mang.length;i++){
					if(k.toUpperCase()==mang[i].toUpperCase()) 
					++m;
				}
				if(m==0){
					var z=document.createTextNode(k);
					var h=document.createElement("option");
					h.appendChild(z);
					document.getElementById('select').appendChild(h);
					document.getElementById("hidden").style.display="none";
					document.getElementById("add").innerText="Thêm";
				}
				else{
					alert("Bạn đã nhập trùng với hãng có sẵn");
					document.getElementById("input1").focus();
				}
				document.getElementById("input1").value="";
			}
		}
		function Huy(){
			document.getElementById("input1").value="";
			document.getElementById("hidden").style.display="none";
			document.getElementById("add").innerText="Thêm";
		}
		window.onload=function(){
			ddlDanhsachhangsx(mang);
		}