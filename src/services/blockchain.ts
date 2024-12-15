import { ethers } from 'ethers';
import { BlockchainConfig, TransactionResult } from '../types/blockchain';

export class BlockchainService {
  private provider: ethers.Provider | null = null;
  private signer: ethers.Signer | null = null;

  async connect(config: BlockchainConfig) {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        this.provider = provider;
        this.signer = signer;
        return { provider, signer };
      }
      throw new Error('No Ethereum wallet found');
    } catch (error) {
      console.error('Failed to connect to blockchain:', error);
      throw error;
    }
  }

  async deployContract(abi: any[], bytecode: string): Promise<TransactionResult> {
    if (!this.signer) throw new Error('No signer available');
    
    try {
      const factory = new ethers.ContractFactory(abi, bytecode, this.signer);
      const contract = await factory.deploy();
      const receipt = await contract.deployTransaction.wait();
      
      return {
        hash: receipt.hash,
        status: 'confirmed',
        confirmations: receipt.confirmations
      };
    } catch (error) {
      console.error('Contract deployment failed:', error);
      throw error;
    }
  }
}