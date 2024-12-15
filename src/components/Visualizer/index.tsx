import { useCallback } from 'react';
import ReactFlow, { 
  Background,
  ReactFlowProvider,
  useReactFlow,
  Panel
} from 'react-flow-renderer';
import { useContractStore } from '../../store/contractStore';
import { useVisualizerNodes } from './useVisualizerNodes';
import { nodeTypes } from './nodeTypes';

function VisualizerContent() {
  const { activeContract } = useContractStore();
  const nodes = useVisualizerNodes(activeContract?.code || '');
  const { fitView } = useReactFlow();

  const handleInit = useCallback(() => {
    setTimeout(() => {
      fitView({ padding: 0.2 });
    }, 100);
  }, [fitView]);

  return (
    <div className="h-full w-full bg-gray-900 rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onInit={handleInit}
        className="bg-gray-900"
        minZoom={0.5}
        maxZoom={1.5}
        fitView
      >
        <Background color="#4f46e5" gap={16} />
        <Panel position="top-right" className="bg-gray-800 p-2 rounded-lg">
          <button 
            onClick={() => fitView()} 
            className="text-sm text-gray-300 hover:text-white"
          >
            Reset View
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export function Visualizer() {
  return (
    <ReactFlowProvider>
      <VisualizerContent />
    </ReactFlowProvider>
  );
}