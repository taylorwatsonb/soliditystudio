import { Editor } from '@monaco-editor/react';
import { useContractStore } from '../../store/contractStore';
import { useMonacoSetup } from './useMonacoSetup';

export function CodeEditor() {
  const { activeContract, updateContract } = useContractStore();
  const { handleEditorDidMount } = useMonacoSetup();

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
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { top: 16 },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}