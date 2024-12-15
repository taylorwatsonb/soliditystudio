import { Play, Save, Upload, Code2 } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-800 border-b border-gray-700">
      <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
        <Save size={18} />
        <span>Save</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
        <Code2 size={18} />
        <span>Compile</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
        <Upload size={18} />
        <span>Deploy</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
        <Play size={18} />
        <span>Run</span>
      </button>
    </div>
  );
}