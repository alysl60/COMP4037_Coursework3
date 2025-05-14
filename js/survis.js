// window.surVisVersion = '0.1.0';
//
// $(document).ready(function () {
//   page.init();
//   page.update(true);
//   selectors.readQueryFromUrl();
// });
//
// $(window).resize(function () {
//   timeline.updateTimeline();
// });
//
// const electron = typeof require !== 'undefined';


window.surVisVersion = '0.1.0';

// ✅ 等 DOM 渲染完成
$(document).ready(function () {
  page.init();                 // 初始化结构（插入容器等）
  selectors.readQueryFromUrl();// URL 参数
});

// ✅ 等所有资源都加载完，再绘制图表（柱状图、timeline 等）
window.onload = function () {
  page.update(true);           // 包含图表绘制
};

// 监听窗口缩放，更新 timeline
$(window).resize(function () {
  timeline.updateTimeline();
});

// ⚠️ 移除 Electron 代码（防止浏览器报错）
/*
const electron = typeof require !== 'undefined';
*/
