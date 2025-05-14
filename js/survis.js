window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  if (typeof publications !== 'undefined' && Array.isArray(publications) && publications.length > 0) {
    timeline.updateTimeline();
  } else {
    console.warn("⏳ 数据未加载完成，跳过 timeline.updateTimeline()");
  }
});

const electron = typeof require !== 'undefined';
