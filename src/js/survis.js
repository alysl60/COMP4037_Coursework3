window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();

  // 👇 等待 publications 数据加载完成，再进行图表更新
  waitForDataThenUpdate();

  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

// ✅ 新增：等待数据加载完成再执行 page.update(true)
function waitForDataThenUpdate(retry = 0) {
  // 请确认你渲染图表依赖的是 publications 或 generatedBibEntries
  const ready = typeof publications !== 'undefined' && Object.keys(publications).length > 0;

  if (ready) {
    console.log("✅ 数据加载完成，开始更新图表");
    page.update(true);
  } else if (retry < 15) {
    console.warn(`⏳ 等待数据加载中…（第 ${retry + 1} 次尝试）`);
    setTimeout(() => waitForDataThenUpdate(retry + 1), 300);
  } else {
    console.error("❌ 数据加载失败，未能初始化图表！");
  }
}

const electron = typeof require !== 'undefined';
