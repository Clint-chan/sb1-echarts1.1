import React, { useState } from 'react';
import { BarChart3, PieChart, LineChart, Github } from 'lucide-react';
import { JsonEditor } from './components/JsonEditor';
import { ChartPreview } from './components/ChartPreview';
import { ExampleCharts } from './components/ExampleCharts';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [parsedOptions, setParsedOptions] = useState<any>(null);

  const handleJsonChange = (value: string) => {
    setJsonInput(value);
    if (!value.trim()) {
      setError(null);
      setParsedOptions(null);
      return;
    }

    try {
      const parsed = JSON.parse(value);
      setError(null);
      setParsedOptions(parsed);
    } catch (e) {
      setError('JSON格式无效');
      setParsedOptions(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <PieChart className="w-6 h-6 text-green-600" />
                <LineChart className="w-6 h-6 text-yellow-600" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">ECharts图表转换器</h1>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">JSON输入</h2>
            <JsonEditor
              value={jsonInput}
              onChange={handleJsonChange}
              error={error}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">图表预览</h2>
            {parsedOptions ? (
              <ChartPreview options={parsedOptions} />
            ) : (
              <div className="h-[400px] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center text-gray-500">
                输入有效的JSON数据以预览图表
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">示例图表</h2>
          <ExampleCharts />
        </div>
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            基于 React、ECharts 和 Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;