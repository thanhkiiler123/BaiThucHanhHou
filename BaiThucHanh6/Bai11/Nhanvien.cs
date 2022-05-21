using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bai11
{
    public class Nhanvien
    {
        string hoten;
        DateTime ngaysinh;
        string diachi;
        string email;
        string sdt;
        public Nhanvien(string hoten, DateTime ngaysinh, string diachi, string email, string sdt)
        {
            this.hoten=hoten;
            this.ngaysinh=ngaysinh;
            this.diachi=diachi;
            this.email=email;
            this.sdt=sdt;
        }
        public string HoTen
        {
            get { return hoten; }
            set { hoten=value; }
        }
        public DateTime NgaySinh
        {
            get { return ngaysinh; }
            set { ngaysinh=value; }
        }
        public string DiaChi
        {
            get { return diachi; }
            set { diachi=value; }
        }
        public string Email
        {
            get { return email; }
            set { email=value; }
        }
        public string SDT
        {
            get { return sdt; }
            set { sdt=value; }
        }
    }
}