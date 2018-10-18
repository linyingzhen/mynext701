// 商品为0，结算颜色变灰
function jiesuan() {
  var goodsValue = document.getElementById('goodsNum').value
  console.log(goodsValue)
  if (goodsValue == 0) {
      $('.submit_btn').addClass('none');
  }
  if (goodsValue >= 1) {
      $('.submit_btn').removeClass('none');
  }
}