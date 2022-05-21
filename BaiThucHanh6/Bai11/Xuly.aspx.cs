using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Bai11
{
    public partial class Xuly : System.Web.UI.Page
    {
        protected void Page_Load(object sender,EventArgs e)
        {
            string hoten = Request.Form["ipName"];
            DateTime ngaysinh = DateTime.Parse(Request.Form["ipDate"]);
            string diachi = Request.Form["ipAdd"];
            string email = Request.Form["ipEmail"];
            string sdt = Request.Form["ipSDT"];
            var nv = new Nhanvien(hoten,ngaysinh,diachi,email,sdt);
            List<Nhanvien> ds = (List<Nhanvien>)Session["danhsach"];
            ds.Add(nv);
            string chuoi = "";
            int i = 1;
            foreach(Nhanvien nhanvien in ds)
            {
                chuoi+="<tr>";
                chuoi+="<td>"+(i++)+"</td>";
                chuoi+="<td>"+nv.HoTen+"</td>";
                chuoi+="<td>"+nv.NgaySinh.ToString("dd/MM/yyyy")+"</td>";
                chuoi+="<td>"+nv.DiaChi+"</td>";
                chuoi+="<td>"+nv.Email+"</td>";
                chuoi+="<td>"+nv.SDT+"</td></tr>";
            }
            ltTable.Text=chuoi;
        }
    }
}