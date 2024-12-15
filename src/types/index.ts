export interface SmartContract {
  id: string;
  name: string;
  code: string;
  compiled: boolean;
  deployed: boolean;
}

export interface ContractNode {
  id: string;
  type: string;
  data: {
    label: string;
    type?: string;
    inputs?: string[];
    outputs?: string[];
  };
  position: { x: number; y: number };
}