import React from 'react';
import { CodeEditor } from './components/CodeEditor';
import { Visualizer } from './components/Visualizer';
import { Toolbar } from './components/Toolbar';
import { Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Terminal className="text-cyan-400" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              SmartContract Studio
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Toolbar />
        
        <div className="grid grid-cols-2 gap-6 mt-6" style={{ height: "calc(100vh - 200px)" }}>
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Contract Editor</h2>
            <div className="h-full">
              <CodeEditor />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Contract Visualization</h2>
            <div className="h-full">
              <Visualizer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;