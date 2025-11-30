document.addEventListener("DOMContentLoaded", function () {

  var header = `
  <style>
  .site-header {
    background:#121233;
    color:white;
    padding:12px 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family:Arial,sans-serif;
    position:sticky;
    top:0;
    z-index:1000;
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
  background-color: #1c1c3c;
  min-width: 170px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.4);
  z-index: 999;
}

.dropdown-content a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
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



  body {margin:0; overflow-x:hidden;}
  table, canvas, svg {max-width:100%;}
  </style>

  <header class="site-header">
    <div class="logo">पञ्चाङ्गम्</div>
    <div class="menu-toggle" onclick="document.getElementById('nav').classList.toggle('show')">☰</div>
    <nav class="nav" id="nav">
      <a href="index.html" class="home-btn" title="Home">🏠Home</a>

      <div class="dropdown">
  <a href="#" class="dropbtn">पञ्चाङ्गम्▾</a>
  <div class="dropdown-content">
    <a href="chartup5.html">चक्र सहित</a>
    <a href="GovindJiStyle.html">साधारण</a>
  </div>
      <a href="GovindJiStyle.html">GovindJi</a>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);

});
