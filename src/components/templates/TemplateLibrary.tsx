import React from 'react';
import { Book, Tag } from 'lucide-react';
import { ContractTemplate } from '../../types/templates';

const SAMPLE_TEMPLATES: ContractTemplate[] = [
  {
    id: '1',
    name: 'ERC20 Token',
    description: 'Standard ERC20 token implementation',
    category: 'Tokens',
    complexity: 'beginner',
    tags: ['erc20', 'token', 'standard'],
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20 {
    // Implementation...
}`
  }
];

export function TemplateLibrary() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Book className="text-cyan-400" size={20} />
        <h3 className="text-lg font-semibold">Contract Templates</h3>
      </div>

      <div className="space-y-4">
        {SAMPLE_TEMPLATES.map((template) => (
          <div
            key={template.id}
            className="border border-gray-700 rounded-lg p-3 hover:border-cyan-500 transition-colors"
          >
            <h4 className="font-medium text-cyan-400">{template.name}</h4>
            <p className="text-sm text-gray-300 mt-1">{template.description}</p>
            <div className="flex items-center space-x-2 mt-2">
              <Tag size={14} className="text-gray-400" />
              <div className="flex gap-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}