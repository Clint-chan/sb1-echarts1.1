import ReactECharts from 'echarts-for-react';

interface ChartPreviewProps {
  options: any;
}

export function ChartPreview({ options }: ChartPreviewProps) {
  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <ReactECharts option={options} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}