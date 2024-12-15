interface ParsedNode {
  type: string;
  name: string;
  inputs?: string[];
  outputs?: string[];
}

export function parseContractCode(code: string): ParsedNode[] {
  if (!code) return [];

  const nodes: ParsedNode[] = [];
  
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
      inputs: inputParams ? inputParams.split(',').map(p => p.trim()).filter(Boolean) : [],
      outputs: outputParams ? outputParams.split(',').map(p => p.trim()).filter(Boolean) : [],
    });
  }

  return nodes;
}