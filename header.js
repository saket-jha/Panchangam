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
  body {margin:0; overflow-x:hidden;}
  table, canvas, svg {max-width:100%;}
  </style>

  <header class="site-header">
    <div class="logo">पञ्चाङ्गम्</div>
    <div class="menu-toggle" onclick="document.getElementById('nav').classList.toggle('show')">☰</div>
    <nav class="nav" id="nav">
      <a href="index.html">Home</a>
      <a href="Gen1.html">Gen1</a>
      <a href="gen2.html">Gen2</a>
      <a href="chartupdated.html">Charts</a>
      <a href="GovindJiStyle.html">GovindJi</a>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);

});
