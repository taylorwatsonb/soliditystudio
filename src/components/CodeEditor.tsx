import { Editor } from '@monaco-editor/react';
import { useContractStore } from '../store/contractStore';

export function CodeEditor() {
  const { activeContract, updateContract } = useContractStore();

  const handleEditorChange = (value: string | undefined) => {
    if (activeContract && value) {
      updateContract(activeContract.id, { code: value, compiled: false });
    }
  };

  return (
    <div className="h-full w-full bg-gray-900 rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="solidity"
        theme="vs-dark"
        value={activeContract?.code || ''}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { top: 16 },
        }}
      />
    </div>
  );
}