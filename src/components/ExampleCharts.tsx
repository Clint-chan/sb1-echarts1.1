import { useState } from 'react';
import { ChartPreview } from './ChartPreview';
import { Code } from 'lucide-react';

const barChartExample = {
  "title": {"text": "2023年中国智能手机出口主要国家", "left": "center"},
  "tooltip": {"show": true},
  "grid": {"left": "1%", "right": "1%", "containLabel": true},
  "xAxis": {"type": "category", "data": ["美国", "中国香港", "日本", "荷兰", "捷克"]},
  "yAxis": {"type": "value"},
  "series": [{
    "type": "bar",
    "data": [
      {"value": 30139843743.85, "itemStyle": {"color": "#5470c6"}},
      {"value": 24939813434.19, "itemStyle": {"color": "#91cc75"}},
      {"value": 6717106717.23, "itemStyle": {"color": "#fac858"}},
      {"value": 4439341425.63, "itemStyle": {"color": "#ee6666"}},
      {"value": 3699772585.79, "itemStyle": {"color": "#73c0de"}}
    ]
  }]
};

const pieChartExample = {
  "title": {"text": "中国糖类产品出口主要国家", "left": "center"},
  "tooltip": {"formatter": "{b} : {c} ({d}%)"},
  "series": [{
    "type": "pie",
    "center": ["50%", "55%"],
    "radius": ["40%", "65%"],
    "label": {"show": true, "formatter": "{b}：{d}%", "color": "#1D2D3E"},
    "data": [
      {"value": 522067698.65, "name": "巴西", "itemStyle": {"color": "#5470c6"}},
      {"value": 58310431.05, "name": "中国香港", "itemStyle": {"color": "#91cc75"}},
      {"value": 50224671.84, "name": "新西兰", "itemStyle": {"color": "#fac858"}},
      {"value": 84012349.7, "name": "泰国", "itemStyle": {"color": "#ee6666"}}
    ]
  }]
};

const lineChartExample = {
  "animation": true,
  "xAxis": {"data": ["日本", "美国", "英国", "俄罗斯", "比利时"], "type": "category"},
  "yAxis": {"type": "value"},
  "tooltip": {"show": true},
  "grid": {"bottom": 10, "left": 0, "right": 0, "containLabel": true},
  "series": [{
    "type": "line",
    "data": [2047037.3, 1672503.35, 581857.33, 502110.64, 397137.96],
    "areaStyle": {"color": "rgba(255, 199, 46, 0.2)"},
    "lineStyle": {"width": 1.5},
    "itemStyle": {"color": "rgba(255, 199, 46, 1)", "opacity": 0}
  }]
};

interface ExampleCardProps {
  title: string;
  options: any;
}

function ExampleCard({ title, options }: ExampleCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Code className="w-4 h-4 mr-1" />
          {showCode ? '隐藏代码' : '查看代码'}
        </button>
      </div>
      <ChartPreview options={options} />
      {showCode && (
        <pre className="mt-4 p-4 bg-gray-50 rounded-lg overflow-x-auto text-sm">
          {JSON.stringify(options, null, 2)}
        </pre>
      )}
    </div>
  );
}

export function ExampleCharts() {
  return (
    <div className="space-y-8">
      <ExampleCard title="柱状图示例" options={barChartExample} />
      <ExampleCard title="饼图示例" options={pieChartExample} />
      <ExampleCard title="折线图示例" options={lineChartExample} />
    </div>
  );
}