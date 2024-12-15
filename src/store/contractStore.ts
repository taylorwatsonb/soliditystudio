import { create } from 'zustand';
import { SmartContract } from '../types';

interface ContractState {
  contracts: SmartContract[];
  activeContract: SmartContract | null;
  addContract: (contract: SmartContract) => void;
  setActiveContract: (contract: SmartContract | null) => void;
  updateContract: (id: string, updates: Partial<SmartContract>) => void;
}

// Initialize with a default contract to prevent null states
const DEFAULT_CONTRACT: SmartContract = {
  id: 'default',
  name: 'New Contract',
  code: '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract NewContract {\n    // Your contract code here\n}',
  compiled: false,
  deployed: false,
};

export const useContractStore = create<ContractState>((set) => ({
  contracts: [DEFAULT_CONTRACT],
  activeContract: DEFAULT_CONTRACT,
  addContract: (contract) =>
    set((state) => ({ contracts: [...state.contracts, contract] })),
  setActiveContract: (contract) => set({ activeContract: contract }),
  updateContract: (id, updates) =>
    set((state) => ({
      contracts: state.contracts.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    })),
}));