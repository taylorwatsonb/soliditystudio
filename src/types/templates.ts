export interface ContractTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}