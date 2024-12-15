import { ParsedNode } from '../../types';

export function parseContractCode(code: string): ParsedNode[] {
  if (!code) return [];

  const nodes: ParsedNode[] = [];
  
  try {
    // Parse contract declaration
    const contractMatch = code.match(/contract\s+(\w+)/);
    if (contractMatch) {
      nodes.push({
        type: 'contract',
        name: contractMatch[1],
      });
    }

    // Parse functions
    const functionRegex = /function\s+(\w+)\s*\((.*?)\)(?:\s+(?:public|private|external|internal))?\s*(?:returns\s*\((.*?)\))?/g;
    let match;

    while ((match = functionRegex.exec(code)) !== null) {
      const [_, name, inputParams, outputParams] = match;
      
      nodes.push({
        type: 'function',
        name,
        inputs: parseParams(inputParams),
        outputs: parseParams(outputParams),
      });
    }

    return nodes;
  } catch (error) {
    console.error('Error parsing contract code:', error);
    return [];
  }
}

function parseParams(params: string | undefined): string[] {
  if (!params) return [];
  return params.split(',').map(p => p.trim()).filter(Boolean);
}