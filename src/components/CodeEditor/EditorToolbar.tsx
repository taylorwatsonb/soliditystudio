import { Save, Play, AlertCircle } from 'lucide-react';
import { ValidationResult } from '../../utils/contract/validation';

interface EditorToolbarProps {
  onSave: () => void;
  onCompile: () => void;
  validation: ValidationResult;
}

export function EditorToolbar({ onSave, onCompile, validation }: EditorToolbarProps) {
  const errorCount = validation.errors.filter(e => e.severity === 'error').length;
  const warningCount = validation.errors.filter(e => e.severity === 'warning').length;

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <button
          onClick={onSave}
          className="flex items-center space-x-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors"
        >
          <Save size={16} />
          <span>Save</span>
        </button>
        <button
          onClick={onCompile}
          disabled={!validation.isValid}
          className="flex items-center space-x-2 px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md transition-colors disabled:opacity-50"
        >
          <Play size={16} />
          <span>Compile</span>
        </button>
      </div>

      {(errorCount > 0 || warningCount > 0) && (
        <div className="flex items-center space-x-4">
          {errorCount > 0 && (
            <div className="flex items-center space-x-1 text-red-400">
              <AlertCircle size={16} />
              <span>{errorCount} error(s)</span>
            </div>
          )}
          {warningCount > 0 && (
            <div className="flex items-center space-x-1 text-yellow-400">
              <AlertCircle size={16} />
              <span>{warningCount} warning(s)</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}