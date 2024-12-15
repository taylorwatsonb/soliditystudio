import { useCallback } from 'react';
import { editor } from '@monaco-editor/react';

export function useMonacoSetup() {
  const handleEditorDidMount = useCallback((editor: editor.IStandaloneCodeEditor) => {
    // Register Solidity language
    editor.getModel()?.updateOptions({
      tabSize: 2,
      insertSpaces: true,
    });

    // Add basic Solidity syntax highlighting
    editor.getModel()?.setMonarchTokensProvider('solidity', {
      keywords: [
        'contract', 'function', 'public', 'private', 'internal', 'external',
        'pure', 'view', 'payable', 'storage', 'memory', 'returns'
      ],
      operators: [
        '=', '>', '<', '!', '~', '?', ':',
        '==', '<=', '>=', '!=', '&&', '||', '++', '--',
        '+', '-', '*', '/', '&', '|', '^', '%', '<<',
        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
        '^=', '%=', '<<=', '>>=', '>>>='
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      tokenizer: {
        root: [
          [/[a-zA-Z_]\w*/, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
          [/[{}()\[\]]/, '@brackets'],
          [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
          [/\d+/, 'number'],
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, { token: 'string.quote', next: '@string' }],
          [/\/\/.*$/, 'comment'],
        ],
        string: [
          [/[^\\"]+/, 'string'],
          [/"/, { token: 'string.quote', next: '@pop' }],
        ],
      },
    });
  }, []);

  return { handleEditorDidMount };
}