import pandas as pd
import matplotlib.pyplot as plt

# 构建新数据：10篇已选文献的年份和对应的评估方式数量
data = {
    "Year": [2018, 2020, 2020, 2021, 2021, 2023, 2023, 2023, 2024, 2025],
    "Controlled User Study": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Simulation": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "Clinical Trial": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    "Prototype Demo": [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    "Case Study": [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
}


# 转为 DataFrame 并按年份聚合
df = pd.DataFrame(data)
df = df.groupby("Year").sum()
df = df.sort_index()

# 设置绘图参数
fig, ax = plt.subplots(figsize=(10, 6))
bottom = [0] * len(df)
colors = ['#d55e00', '#999999', '#009e73', '#f0e442', '#56b4e9']

# 绘制堆叠柱状图
for i, column in enumerate(df.columns):
    ax.bar(df.index, df[column], bottom=bottom, label=column, color=colors[i])
    bottom = [i + j for i, j in zip(bottom, df[column])]

# 添加图表信息
ax.set_xlabel("Year", fontsize=12)
ax.set_ylabel("Number of Papers", fontsize=12)
ax.set_title("Number of Papers by Evaluation Method and Year", fontsize=14)
ax.legend(title="Evaluation Method")
plt.tight_layout()
plt.show()
