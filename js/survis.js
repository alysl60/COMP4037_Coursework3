$(document).ready(function () {
  page.init();
  
  // 等所有资源加载完（包括 script, image, js）再绘图
  window.onload = function () {
    page.update(true);
  };

  selectors.readQueryFromUrl();
});
