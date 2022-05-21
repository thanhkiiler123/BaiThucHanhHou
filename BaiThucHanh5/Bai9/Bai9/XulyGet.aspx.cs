using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace Bai9
{
    public partial class XulyGet : System.Web.UI.Page
    {
        protected void Page_Load(object sender,EventArgs e)
        {
            var ten = Request.QueryString["input11"];
            var hang = Request.QueryString["input21"];
            var ngay = Request.QueryString["input31"];
            var gia = Request.QueryString["input41"];

            string fileName = "D:\\Workspace\\ThucHanhHou\\BaiThucHanh5\\Bai9\\Bai9\\XMLGet.xml";
            XmlDocument d = new XmlDocument();
            d.Load(fileName);
            XmlElement eMain, eTen, eHang, eNgay, eGia;
            eMain=d.CreateElement("MainGet");
            eTen=d.CreateElement("ten");
            eTen.InnerText=ten;
            eHang=d.CreateElement("hang");
            eHang.InnerText=hang;
            eNgay=d.CreateElement("ngay");
            eNgay.InnerText=ngay;
            eGia=d.CreateElement("gia");
            eGia.InnerText=gia;
            eMain.AppendChild(eTen);
            eMain.AppendChild(eHang);
            eMain.AppendChild(eNgay);
            eMain.AppendChild(eGia);
            d.DocumentElement.AppendChild(eMain);
            d.Save(fileName);
            Response.Clear();
            Response.Buffer=true;
            Response.Charset="";
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.ContentType="application/xml";
            Response.WriteFile(fileName);
            Response.Flush();
            Response.End();
        }
    }
}