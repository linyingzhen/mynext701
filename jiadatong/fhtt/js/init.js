(function () {
  var c, a, b;
  b = 750;
  d();
  window.addEventListener("resize", d, false);

  function d() {
    c = document.documentElement.clientWidth;
    a = ((625 * c) / b).toFixed(2);
    document.documentElement.style.fontSize = a + "%"
  }
})();