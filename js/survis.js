window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();

  // 更安全的加载方式
  window.onload = function () {
    page.update(true);
  };

  selectors.readQueryFromUrl();
});


