document.addEventListener("DOMContentLoaded", function () {

  var header = `
  <style>
  .site-header {
    background:#f17115ff;
    color:white;
    padding:12px 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family:Arial, "Unicode MS";
    position:sticky;
    top:0;
    z-index:1000;
  }

  .logo a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 42px;
  font-family: Arial, "Unicode MS";
}

  .logo {font-size:22px; font-weight:bold;}
  .nav a {
    color:white;
    text-decoration:none;
    margin-left:15px;
  }
  .nav a:hover {color:gold;}
  .menu-toggle {
    font-size:26px;
    cursor:pointer;
    display:none;
  }
  @media(max-width:768px) {
    .nav {
      display:none;
      position:absolute;
      right:0;
      top:55px;
      background:#1c1c3c;
      width:200px;
      padding:10px;
      flex-direction:column;
    }
    .nav.show {display:flex;}
    .menu-toggle {display:block;}
  }
    /* DROPDOWN MENU */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f17115ff;
  min-width: 170px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.4);
  z-index: 999;
}

.dropdown-content a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: rgba(255,255,255,0.2);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* MOBILE FIX */
@media(max-width:768px) {
  .dropdown-content {
    position: static;
    box-shadow: none;
  }
}
  .home-btn {
  font-size: 20px;
}



  body {margin:0; overflow-x:hidden; font-family: Arial, Unicode MS;}
  table, canvas, svg {max-width:100%;}
  </style>

  <header class="site-header">
    <div class="logo"><a href="index.html">पञ्चाङ्गम्</a></div>
    <div class="menu-toggle" onclick="document.getElementById('nav').classList.toggle('show')">☰</div>
    <nav class="nav" id="nav">
      <a href="index.html" class="home-btn" title="Home">🏠Home</a>

  <div class="dropdown">
  <a href="#" class="dropbtn">पञ्चाङ्गम्▾</a>
  <div class="dropdown-content">
    <a href="index.html">चक्र सहित</a>
    <a href="GovindJiStyle.html">साधारण</a>
  </div></div>


  <div class="dropdown">
  <a href="#" class="dropbtn">सन्ध्यावन्दन▾</a>
  <div class="dropdown-content">
    <a href="pranayaam.html">प्राणायाम</a>
    <a href="ySandhya.html">यजुर्वेदीसंध्या</a>
    <a href="sSandhya.html">सामवेदीसंध्या</a>
  </div></div>


  <div class="dropdown">
  <a href="#" class="dropbtn">ग्रहशान्ति▾</a>
  <div class="dropdown-content">
    <a href="GenRule.html">सामान्य नियम</a>
    <a href="SuryaShanti.html">सूर्यशान्ति</a>
    <a href="ChandraShanti.html">चन्द्रशान्ति</a>
    <a href="MangalShanti.html">मङ्गलशान्ति</a>
    <a href="BudhaShanti.html">बुधशान्ति</a>
    <a href="GuruShanti.html">बृहस्पतिशान्ति</a>
    <a href="ShukraShanti.html">शुक्रशान्ति</a>
    <a href="ShaniShanti.html">शनिशान्ति</a>
    <a href="RahuShanti.html">राहुशान्ति</a>
    <a href="KetuShanti.html">केतुशान्ति</a>
  </div></div>
      <a href="vividh.html">विविध-अनुष्ठान</a>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);

});
