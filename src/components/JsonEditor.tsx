import { AlertCircle, Copy, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export function JsonEditor({ value, onChange, error }: JsonEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormat = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(value), null, 2);
      onChange(formatted);
    } catch (e) {
      // If JSON is invalid, keep the current value
    }
  };

  const handleMinify = () => {
    try {
      const minified = JSON.stringify(JSON.parse(value));
      onChange(minified);
    } catch (e) {
      // If JSON is invalid, keep the current value
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleFormat}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Maximize2 className="w-4 h-4 mr-1" />
          美化
        </button>
        <button
          onClick={handleMinify}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Minimize2 className="w-4 h-4 mr-1" />
          压缩
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Copy className="w-4 h-4 mr-1" />
          {copied ? '已复制!' : '复制'}
        </button>
      </div>
      <textarea
        className={`w-full h-[400px] p-4 font-mono text-sm bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在此粘贴JSON数据..."
      />
      {error && (
        <div className="mt-2 flex items-center text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
}