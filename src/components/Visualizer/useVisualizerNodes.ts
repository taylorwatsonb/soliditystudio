import { useMemo } from 'react';
import { ContractNode } from '../../types';
import { parseContractCode } from '../../utils/contractParser';

export function useVisualizerNodes(code: string): ContractNode[] {
  return useMemo(() => {
    if (!code) return [];
    
    const parsedNodes = parseContractCode(code);
    return parsedNodes.map((node, index) => ({
      id: `node-${index}`,
      type: node.type || 'function', // Ensure type is never null
      data: {
        label: node.name,
        inputs: node.inputs || [],
        outputs: node.outputs || [],
      },
      position: calculateNodePosition(index),
    }));
  }, [code]);
}

function calculateNodePosition(index: number) {
  const VERTICAL_SPACING = 120;
  const START_Y = 50;
  return { 
    x: 250,
    y: START_Y + (index * VERTICAL_SPACING)
  };
}