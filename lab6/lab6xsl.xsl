<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
  <body style="font-family:Arial;font-size:12pt;background-color:#a18163;box-sizing:border-box;">
    

    <xsl:for-each select="Homepage/ProductsList/Product">
    <div style="margin-left:25rem;">
      <img src="{Image}"
      style="border-radius:10px; height:500px;width:500px; border:2px solid #eee;"></img>
      <h3 style="color:white;">Product Code:<xsl:value-of select="Code"/></h3>
      <h3 style="color:white;">Items left:<xsl:value-of select="StockQty"/></h3>
      <h3 style="color:white;">Price:<xsl:value-of select="Price"/></h3>
      <button style="margin-right:2rem; margin-bottom:2rem;padding:5px; font-weight:100; color:#000; border-radius:10px; background:white;"><xsl:value-of select="AddtoCartButton"/></button>
      <button style="padding:5px; font-weight:100; color:#000; border-radius:10px; background:white;"><xsl:value-of select="BuyButton"/></button>

    </div>
   
      
      </xsl:for-each>

    
  </body>
</html>
</xsl:template>
</xsl:stylesheet>
