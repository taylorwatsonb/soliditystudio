import ReactFlow, { Background } from 'react-flow-renderer';
import { useContractStore } from '../store/contractStore';

const nodeTypes = {
  function: ({ data }: any) => (
    <div className="px-4 py-2 shadow-lg rounded-lg bg-gray-800 border border-cyan-500">
      <div className="text-white font-mono">
        <div className="text-cyan-400">{data.label}</div>
        {data.inputs?.length > 0 && (
          <div className="text-sm text-gray-400">
            Inputs: {data.inputs.join(', ')}
          </div>
        )}
      </div>
    </div>
  ),
};

export function Visualizer() {
  const { activeContract } = useContractStore();

  // This is a simplified example - in a real app, you'd parse the contract
  // and generate nodes/edges based on the actual contract structure
  const nodes = [
    {
      id: '1',
      type: 'function',
      data: { label: 'Constructor', inputs: ['owner: address'] },
      position: { x: 250, y: 100 },
    },
  ];

  return (
    <div className="h-full w-full bg-gray-900 rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-900"
      >
        <Background color="#4f46e5" gap={16} />
      </ReactFlow>
    </div>
  );
}