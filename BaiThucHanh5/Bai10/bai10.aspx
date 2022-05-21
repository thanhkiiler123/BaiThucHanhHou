<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="bai10.aspx.cs" Inherits="Bai10.bai10" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="bai10.css" rel="stylesheet" />
</head>
<body>
    <form id="form2" runat="server">
        <section>
            <label>Input textarea:</label>
            <textarea id="txtNoidung" runat="server" required="required"></textarea>
        </section>
        <section>
            <label>InputFile</label>
            <asp:FileUpload ID="fileUpLoad" runat="server" />
        </section>
        <asp:Button ID="btnSub" runat="server" Text="Submit" OnClick="btnSub_Click" />
    </form>
</body>
</html>