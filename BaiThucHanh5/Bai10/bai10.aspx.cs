using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Bai10
{
    public partial class bai10 : System.Web.UI.Page
    {
        protected void Page_Load(object sender,EventArgs e)
        {
            if (IsPostBack)
            {
                Response.Write("Bạn vừa nhập: "+txtNoidung.InnerText);
            }
        }

        protected void btnSub_Click(object sender,EventArgs e)
        {
            HttpPostedFile file = Request.Files["fileUpLoad"];
            if (file!=null)
            {
                fileUpLoad.SaveAs(MapPath("~/App_Data/")+fileUpLoad.FileName);
            }
        }
    }
}