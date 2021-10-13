<?xml version="1.0" encoding="iso-8859-1"?><!-- DWXMLSource="Sports.xml" -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style>
body{
  background-color:#246568;
}
table {
  border-collapse: collapse;
  width: 80%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #FFFFFF}
tr:nth-child(odd){background-color: #5FA6AA}

th {
  background-color: #1D3E40;
  color: white;
}
h1 {
  font-family: Trattatello, fantasy;
  
}
.header {
  background-color:#1D3E40;
  text-align: center;
  padding-top:1px
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
<title>Order</title>
</head>
<div class="header">
  <h1><font color="#FFFFFF" size="+4">Gateways 2021</font></h1>
</div>
 <center><img src="sp.jpg" height="400" width="1200"/></center>
<body>
 <h2 align="center"><font color="#FFFFFF"><u><b>Gateways 2021 Participants</b></u></font></h2>
   <table align="center" border="1" bordercolor="#000099">
   <tr>
    <th >Name</th>
    <th >Branch</th>
    <th >College</th>
    <th >Email</th>
   </tr>
    <xsl:for-each select="CHRIST/CS">
   <tr>
    <td ><xsl:value-of select="STU-NAME"/></td>
    <td ><xsl:value-of select="STU-BRANCH"/></td>
    <td ><xsl:value-of select="STU-COLLEGE"/></td>
    <td ><xsl:value-of select="STU-EMAIL"/></td>
   </tr>
    </xsl:for-each>
    </table><br />
<center>

<h2><font color="#FFFFFF" >Winner</font></h2><p id="demo"></p><p id="demo1"></p>

<script>
var parser, xmlDoc;
var text = "<EventDetails><ed>" +
"<name>Paridhi Shah</name>" +
"<college>Christ University</college>" +
"</ed></EventDetails>";

if (window.DOMParser) {
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text,"text/xml");
} else {
  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async = false;
  xmlDoc.loadXML(text); 
} 

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
document.getElementById("demo1").innerHTML =
xmlDoc.getElementsByTagName("college")[0].childNodes[0].nodeValue;
</script>

</center>
</body>
</html>

</xsl:template>
</xsl:stylesheet>