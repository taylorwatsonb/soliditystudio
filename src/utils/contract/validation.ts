export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  line: number;
  message: string;
  severity: 'error' | 'warning';
}

export function validateContractCode(code: string): ValidationResult {
  const errors: ValidationError[] = [];
  const lines = code.split('\n');

  // Basic validation rules
  if (!code.includes('pragma solidity')) {
    errors.push({
      line: 1,
      message: 'Missing pragma solidity version',
      severity: 'error'
    });
  }

  if (!code.includes('contract')) {
    errors.push({
      line: 1,
      message: 'No contract definition found',
      severity: 'error'
    });
  }

  // Check for potential security issues
  if (code.includes('tx.origin')) {
    const line = lines.findIndex(l => l.includes('tx.origin')) + 1;
    errors.push({
      line,
      message: 'Avoid using tx.origin for authorization',
      severity: 'warning'
    });
  }

  return {
    isValid: errors.filter(e => e.severity === 'error').length === 0,
    errors
  };
}