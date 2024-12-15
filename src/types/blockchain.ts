import { ethers } from 'ethers';

export interface BlockchainConfig {
  networkUrl: string;
  chainId: number;
}

export interface WalletState {
  address: string | null;
  balance: string | null;
  provider: ethers.Provider | null;
  signer: ethers.Signer | null;
}

export interface TransactionResult {
  hash: string;
  status: 'pending' | 'confirmed' | 'failed';
  confirmations: number;
}