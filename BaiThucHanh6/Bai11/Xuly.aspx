<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Xuly.aspx.cs" Inherits="Bai11.Xuly" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Xu ly</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table class="table">
                <tr>
                 <th>STT</th>
                 <th>Họ tên</th>
                 <th>Ngày sinh</th>
                 <th>Địa chỉ</th>
                 <th>Email</th>
                 <th>Số điện thoại</th>
                </tr>
                <asp:Literal ID="ltTable" runat="server"></asp:Literal>
            </table>
            <a href="MyForm.html">Thêm</a>
        </div>
    </form>
</body>
</html>
