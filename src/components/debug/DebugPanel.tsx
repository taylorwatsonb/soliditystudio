import React from 'react';
import { Bug, Activity, Cpu } from 'lucide-react';
import { SmartContractDebugger } from '../../services/debugger';

interface DebugPanelProps {
  debugger: SmartContractDebugger;
  contractCode: string;
}

export function DebugPanel({ debugger: debug, contractCode }: DebugPanelProps) {
  const [gasAnalysis, setGasAnalysis] = React.useState<any>(null);

  React.useEffect(() => {
    const analyzeGas = async () => {
      const analysis = await debug.analyzeGas(contractCode);
      setGasAnalysis(analysis);
    };
    analyzeGas();
  }, [contractCode]);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Bug className="text-purple-400" size={20} />
        <h3 className="text-lg font-semibold">Debug Tools</h3>
      </div>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="text-green-400" size={16} />
            <span className="font-medium">Gas Analysis</span>
          </div>
          {gasAnalysis && (
            <div className="text-sm text-gray-300">
              <p>Total Gas: {gasAnalysis.totalGas}</p>
            </div>
          )}
        </div>

        <div className="border border-gray-700 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Cpu className="text-blue-400" size={16} />
            <span className="font-medium">Execution Trace</span>
          </div>
          <div className="text-sm text-gray-300">
            {/* Add execution trace visualization */}
          </div>
        </div>
      </div>
    </div>
  );
}